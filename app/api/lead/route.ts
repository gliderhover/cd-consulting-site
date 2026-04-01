import { NextResponse } from "next/server";
import { CosmosClient } from "@azure/cosmos";

type LeadPayload = {
  email?: string;
  name?: string;
  company?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  let payload: LeadPayload = {};

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const email = (payload.email ?? "").trim();
  const name = (payload.name ?? "").trim();
  if (!email || !email.includes("@") || email.length > 200) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }
  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  const honeypot = (payload.website ?? "").trim();
  if (honeypot) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const endpoint = process.env.COSMOS_ENDPOINT;
  const key = process.env.COSMOS_KEY;
  const databaseId = process.env.COSMOS_DATABASE ?? "website";
  const containerId = process.env.COSMOS_CONTAINER ?? "contacts";

  if (!endpoint || !key) {
    console.error("Missing Cosmos DB credentials.");
    return NextResponse.json({ error: "Missing Cosmos DB credentials." }, { status: 500 });
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

  const response = NextResponse.json({ ok: true });
  response.cookies.set("cd_diag_access", "true", {
    httpOnly: false,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
