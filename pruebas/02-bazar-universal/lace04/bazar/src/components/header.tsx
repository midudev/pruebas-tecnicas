import Link from 'next/link';

function Header() {
  return (
    <div className='h-[48px] flex items-center bg-zinc-100/60'>
      <Link id='navbar' href='/' className='text-zinc-900 font-bold text-2xl ml-4 flex items-center'>
        <img src='/logo.svg' alt='Not found' className='w-12' />
        Prueba Bazar Online
      </Link>
    </div>
  );
}

export default Header;
