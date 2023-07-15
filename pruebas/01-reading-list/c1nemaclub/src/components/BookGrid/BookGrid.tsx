import React from 'react';

type BookGridProps = {
  children: React.ReactNode;
  loading: boolean;
};

function BookGrid({ children, loading }: BookGridProps) {
  if (loading) return <p>Loading Books...</p>;
  return <div className='book-grid'>{children}</div>;
}

export default BookGrid;
