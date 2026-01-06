// app/api/campers/route.ts
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

    const params = new URL(req.url).searchParams;
    const page = params.get("page") || "1";
    const limit = params.get("limit") || "4";

    // Собираем все фильтры кроме page и limit
    const filters: Record<string, string> = {};
    params.forEach((value, key) => {
      if (key !== "page" && key !== "limit") filters[key] = value;
    });

    const response = await axios.get(url, {
      params: { page, limit, ...filters },
      headers: {'content-type':'application/json'}
    });

    return NextResponse.json(response.data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
