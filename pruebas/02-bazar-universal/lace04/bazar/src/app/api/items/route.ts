import { NextResponse } from 'next/server';
import data from '../../../data/products.json';

export async function GET(request: Request) {
  const url = new URL(request.url);
  // Obtener el ultimo elemento de la url
  const id = url.pathname.split('/').pop();
  const query = url.searchParams.get('q');
  const title = url.searchParams.get('title');

  if (id !== 'items') {
    const item = data.products.find(
      (item: { id: number }) => item.id === Number(id)
    );
    if (!item) {
      return new NextResponse('Not Found', { status: 404 });
    }
    return NextResponse.json(item);
  }

  //Reasingar el valor de items a data.products [let]
  let items = data.products;

  if (query) {
    items = items.filter(
      (item: { title: string; category: string }) =>
        item.title.toLocaleLowerCase().includes(query) ||
        item.category.includes(query)
    );
  }

  // console.log(items.length);

  if (items.length === 0) {
    return new NextResponse('Items not found', { status: 404 });
  }

  return NextResponse.json(items);
}
