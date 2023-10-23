import { NextResponse } from 'next/server';
import data from '../../../../data/products.json';
import { Product } from '@/types/product';

interface ProductParams {
  itemId: number;
}

export async function GET(
  request: Request,
  { params }: { params: ProductParams }
) {
  try {
    const item = data.products.find(
      (item: Product) => item.id === Number(params.itemId)
    );

    if (!item) {
      return new NextResponse('Item not found', { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
