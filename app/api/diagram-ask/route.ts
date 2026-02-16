import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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
  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ error: "Missing Supabase credentials." }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const { error } = await supabase.from("diagram_ask").insert({
    email,
    name: payload.name ?? null,
    company: payload.company ?? null,
    phone: payload.phone ?? null,
    message: payload.message ?? null,
    source: payload.source ?? null,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
