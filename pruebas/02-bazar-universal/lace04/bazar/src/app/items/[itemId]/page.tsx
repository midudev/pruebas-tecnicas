'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Product } from '@/types/product';
import Category from '@/components/category';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/search-bar';
import { Separator } from '@/components/ui/separator';
import {
  FacebookButton,
  TwitterButton,
  WhatsappButton,
} from '@/components/shared-buttons';
import { Spinner } from '@/components/spinner';
import ButtonHome from '@/components/button-home';

function ProductDetail() {
  const router = useRouter();
  const { itemId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  const firstImage = product?.images[0];
  const otherImages = product?.images.slice(1);

  const [mainImage, setMainImage] = useState(firstImage);
  useEffect(() => {
    fetch(`/api/items/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.images[0]);
      })
      .catch((err) => {
        console.error(err);
        setError('An error occurred while fetching the product.');
      });
  }, [itemId]);

  if (error) return <p>{error}</p>;
  if (!product)
    return (
      <div className='flex justify-center items-center w-full'>
        <Spinner size='lg' />
      </div>
    );

  return (
    <main>
      <aside className='flex items-center justify-center mx-auto my-3'>
        <SearchBar />
      </aside>
      <Separator />
      <Category />
      <section className='flex flex-col items-center justify-center'>
        <article className='flex gap-x-10 p-10 bg-slate-200/30 rounded-md mb-5'>
          <figure>
            {/* Imagen principal */}
            <img
              className='cursor-zoom-in w-[530px] h-[350px] object-contain'
              src={mainImage}
              alt={product.title}
            />
            {/* Galeria */}
            <div className='flex gap-3 w-full items-center justify-center mt-4'>
              {otherImages?.map((image, index) => (
                <picture
                  key={index}
                  className='w-16 h-16 overflow-hidden rounded-md'
                >
                  <img
                    className='h-[full] w-full object-cover cursor-pointer'
                    src={image}
                    alt={product.title}
                    onClick={() => setMainImage(image)}
                  />
                </picture>
              ))}
            </div>
          </figure>
          <header>
            <h1 className='font-bold text-2xl'>
              {product.title} - <span className='text-xl'>{product.brand}</span>
            </h1>
            <p className='text-sm line-through'>$ {product.price},00</p>
            <div className='flex items-center gap-x-2'>
              <p className='text-3xl'>
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
            <p className='text-sm'>{product.stock} disponibles.</p>
            <p className='mt-5 text-sm text-justify italic'>
              {product.description}
            </p>

            <div className='flex gap-x-2 mt-10'>
              <Button variant='outline'>Add to cart</Button>
              <Button className='w-28'>Buy</Button>
            </div>

            <div className='flex gap-x-2 mt-5'>
              <FacebookButton />
              <TwitterButton />
              <WhatsappButton />
            </div>
          </header>
        </article>
      </section>
      <ButtonHome />
    </main>
  );
}

export default ProductDetail;
