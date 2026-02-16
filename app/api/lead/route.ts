import { NextResponse } from "next/server";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

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
  if (!email || !email.includes("@") || email.length > 200) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  const honeypot = (payload.website ?? "").trim();
  if (honeypot) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const record = {
    timestamp: new Date().toISOString(),
    email,
    name: (payload.name ?? "").trim(),
    company: (payload.company ?? "").trim(),
    message: (payload.message ?? "").trim(),
  };

  const leadsDir = path.join(process.cwd(), "secure-assets");
  const leadsPath = path.join(leadsDir, "leads.jsonl");

  await mkdir(leadsDir, { recursive: true });
  await appendFile(leadsPath, `${JSON.stringify(record)}\n`, "utf-8");

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
