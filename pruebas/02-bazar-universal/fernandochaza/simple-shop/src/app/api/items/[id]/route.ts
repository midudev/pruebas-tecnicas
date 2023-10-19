import { NextResponse } from "next/server"
import { type NextRequest } from "next/server"
import Data from "../../../../data/products.json"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const products = Data.products

  const urlId = Number(params.id)
  const item = products.find((item) => item.id === urlId)

  if (item === null || urlId > products.length) {
    return NextResponse.next()
  }

  return NextResponse.json({ message: "success", item }, { status: 200 })
}
