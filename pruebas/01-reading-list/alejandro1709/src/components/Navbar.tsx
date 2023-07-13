import { SiBookstack } from 'react-icons/si';
import { AiFillSetting } from 'react-icons/ai';

function Navbar() {
  return (
    <nav className='flex flex-row justify-between items-center bg-secondary py-4 px-6 rounded-md'>
      <button>
        <AiFillSetting width={60} height={60} />
      </button>
      <h2 className='text-2xl font-medium'>Readerx</h2>
      <button>
        <SiBookstack width={60} height={60} />
      </button>
    </nav>
  );
}

export default Navbar;
