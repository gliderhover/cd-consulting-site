import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const hasAccess = cookies().get("cd_diag_access")?.value === "true";
  if (!hasAccess) {
    return new NextResponse("Access denied. Please visit /diagram to unlock access.", {
      status: 403,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }

  const filePath = path.join(
    process.cwd(),
    "secure-assets",
    "diagram",
    "diagram_complete_v2.html"
  );

  try {
    const html = await readFile(filePath, "utf-8");
    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return new NextResponse("Diagram file not found.", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }
}
