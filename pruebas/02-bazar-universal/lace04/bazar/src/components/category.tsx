'use client';

import { Product } from '@/types/product';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function Category({}) {
  const { itemId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`/api/items/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [itemId]);

  return (
    <div className='text-sm p-1 text-slate-600 ml-10'>Categoria: {product?.category}</div>
  );
}

export default Category;
