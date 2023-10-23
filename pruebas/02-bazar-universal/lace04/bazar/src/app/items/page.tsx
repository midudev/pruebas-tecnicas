'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { SearchBar } from '@/components/search-bar';
import products from '@/data/products.json';
import { Product } from '@/types/product';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/spinner';
import NotItems from '@/components/not-items';
import ButtonHome from '@/components/button-home';
import { set } from 'cypress/types/lodash';

function ItemsPage() {
  const [results, setResults] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get('search');

  interface CategoryNumbers {
    [key: string]: string;
  }

  const categoryNumbers: CategoryNumbers = {
    laptops: '💻',
    smartphones: '📱',
    fragrances: '🌸',
    skincare: '🧴',
    groceries: '🍎',
    'home-decoration': '🏠',
  };

  const categoryCounts: { [key: string]: number } = {};

  /*
  useEffect(() => {
    const filteredProducts = products.products.filter(
      (product) =>
        product.category.toLowerCase().includes(search?.toLowerCase() || '') ||
        product.title.toLowerCase().includes(search?.toLowerCase() || '')
    );
    setResults(filteredProducts);
  }, [search]);*/

  useEffect(() => {
    setResults([]);
    setLoading(true);
    fetch(`/api/items?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('An error occurred while fetching the product.');
        setLoading(false);
      });
  }, [search]);

  // console.log(results);

  //Muestra la cantidad de productos por categoría
  results.forEach((product) => {
    if (categoryCounts[product.category]) {
      categoryCounts[product.category]++;
    } else {
      categoryCounts[product.category] = 1;
    }
  });

  //loading
  if (results.length === 0 && loading)
    return (
      <div className='flex justify-center items-center w-full'>
        <Spinner size='lg' />
      </div>
    );

  if (results.length === 0)
    return (
      <>
        <aside className='flex items-center justify-center mx-auto my-3'>
          <SearchBar />
        </aside>
        <Separator />
        <h1 className='text-base text-left mt-3 ml-10'>
          <>
            Resultados para{' '}
            <span className='font-semibold'>
              "{search}": {results.length}
            </span>
          </>
        </h1>
        <NotItems />
        <section className='flex flex-col items-center justify-center'>
          {products.products.map((product) => (
            <>
              <div
                key={product.id}
                onClick={() => {
                  router.push(`/items/${product.id}`);
                }}
                className='cursor-pointer bg-slate-200/20  w-[600px] flex items-center gap-x-12 rounded-md'
                id='product'
                data-test-id='product'
              >
                <div className='min-w-max overflow-hidden rounded-md flex items-center justify-center bg-white'>
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width='256'
                    height='256'
                    objectFit='cover'
                    className='w-[160px] h-[160px] object-contain'
                  />
                </div>
                <div className=''>
                  <h1 className='font-bold text-2xl'>{product.title}</h1>
                  <span>{product.brand}</span>
                  <p className='text-xs line-through'>$ {product.price},00</p>
                  <div className='flex items-center gap-x-2'>
                    <p className='text-2xl'>
                      $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </p>
                    <p className='font-semibold text-green-600'>
                      {product.discountPercentage}% OFF
                    </p>
                  </div>
                  <span>{product.rating}⭐</span>
                  <p className='my-5 text-sm text-justify w-[80%] overflow-clip'>
                    {product.description}
                  </p>
                </div>
              </div>
              <Separator className='my-3' />
            </>
          ))}
        </section>
      </>
    );

  return (
    <>
      <aside className='flex items-center justify-center mx-auto my-3'>
        <SearchBar />
      </aside>
      <Separator />
      <h1 className='text-base text-left mt-3 ml-10'>
        {search ? (
          <>
            Resultados de busqueda para
            <span className='font-semibold'>
              "{search}": {results.length}
            </span>
            <div className='text-sm mt-2'>
              Categorías: &nbsp;
              <span className='font-semibold'>
                {Object.keys(categoryCounts)
                  .map(
                    (category) =>
                      `${category} ${categoryNumbers[category]} - ${categoryCounts[category]}`
                  )
                  .join(', ')}
              </span>
            </div>
          </>
        ) : (
          <>
            <span className='text-base'>Todos los productos</span>
          </>
        )}
      </h1>
      <section className='flex flex-col items-center'>
        {results.map((product) => (
          <>
            <div
              key={product.id}
              onClick={() => {
                router.push(`/items/${product.id}`);
              }}
              className='cursor-pointer bg-slate-200/20  w-[600px] flex items-center gap-x-12 rounded-md'
              id='product'
              data-test-id='product'
            >
              <div className='min-w-max overflow-hidden rounded-md flex items-center justify-center bg-white'>
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width='256'
                  height='256'
                  objectFit='cover'
                  className='w-[160px] h-[160px] object-contain'
                />
              </div>
              <div className=''>
                <h1 className='font-bold text-2xl'>{product.title}</h1>
                <span>{product.brand}</span>
                <p className='text-xs line-through'>$ {product.price},00</p>
                <div className='flex items-center gap-x-2'>
                  <p className='text-2xl'>
                    $
                    {(
                      product.price -
                      (product.price * product.discountPercentage) / 100
                    ).toFixed(2)}
                  </p>
                  <p className='font-semibold text-green-600'>
                    {product.discountPercentage}% OFF
                  </p>
                </div>
                <span>{product.rating}⭐</span>
                <p className='my-5 text-sm text-justify w-[80%] overflow-clip'>
                  {product.description}
                </p>
              </div>
            </div>
            <Separator className='my-3' />
          </>
        ))}
      </section>
      <ButtonHome />
    </>
  );
}

export default ItemsPage;
