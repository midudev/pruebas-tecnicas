import getLibrary from "@/utils/get-library";
import { NextResponse } from "next/server";

export async function GET() {
  const library = await getLibrary();
  return NextResponse.json(library);
}
