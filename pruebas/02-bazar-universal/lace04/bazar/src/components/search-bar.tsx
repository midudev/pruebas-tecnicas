'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchCheck } from 'lucide-react';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof search === 'string' && search !== '') {
      const lowerCaseSearch = search.toLowerCase();
      router.push(`/items/?search=${lowerCaseSearch}`);
    }
  };

  return (
    <form className='flex gap-x-2' onSubmit={handleSearch}>
      <div className=''>
        <Input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Pruductos y más...'
          autoComplete='off'
          required
        />
      </div>
      <Button data-test-id='buttonSubmit' type='submit' variant='secondary'>
        <SearchCheck className='w-4 h-4 mr-2' />
        Buscar
      </Button>
    </form>
  );
};
