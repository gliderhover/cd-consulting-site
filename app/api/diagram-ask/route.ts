import { NextResponse } from "next/server";
import { CosmosClient } from "@azure/cosmos";

type DiagramAskPayload = {
  email?: string;
  name?: string;
  company?: string;
  phone?: string;
  message?: string;
  source?: string;
};

export async function POST(request: Request) {
  let payload: DiagramAskPayload = {};

  try {
    payload = (await request.json()) as DiagramAskPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const email = (payload.email ?? "").trim();
  const name = (payload.name ?? "").trim();
  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  const endpoint = process.env.COSMOS_ENDPOINT;
  const key = process.env.COSMOS_KEY;
  const databaseId = process.env.COSMOS_DATABASE ?? "website";
  const containerId = process.env.COSMOS_CONTAINER ?? "contacts";

  if (!endpoint || !key) {
    const debug = {
      hasEndpoint: Boolean(process.env.COSMOS_ENDPOINT),
      hasKey: Boolean(process.env.COSMOS_KEY),
      hasDatabase: Boolean(process.env.COSMOS_DATABASE),
      hasContainer: Boolean(process.env.COSMOS_CONTAINER),
    };
    console.error("Missing Cosmos DB credentials.", debug);
    return NextResponse.json(
      { error: "Missing Cosmos DB credentials.", debug },
      { status: 500 }
    );
  }

  try {
    const client = new CosmosClient({ endpoint, key });
    const container = client.database(databaseId).container(containerId);
    await container.items.create({
      id: crypto.randomUUID(),
      name,
      email,
      company: (payload.company ?? "").trim(),
      message: (payload.message ?? "").trim(),
      createdAt: new Date().toISOString(),
      source: "website-form",
    });
  } catch (error) {
    console.error("Cosmos DB insert failed.", error);
    return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
