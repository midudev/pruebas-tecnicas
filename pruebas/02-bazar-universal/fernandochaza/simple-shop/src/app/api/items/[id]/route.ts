import { NextResponse } from "next/server"
import Data from "../../../../data/products.json"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const products = Data.products

  const urlId = Number(params.id)

  if (!urlId) {
    return new NextResponse("Missing id!", { status: 400 })
  }

  const item = products.find((item) => item.id === urlId)

  if (!item) {
    return new NextResponse("No item found!", { status: 404 })
  }

  return NextResponse.json({ message: "success", item }, { status: 200 })
}
