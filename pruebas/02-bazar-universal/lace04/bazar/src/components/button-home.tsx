import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

function ButtonHome() {
  const router = useRouter();
  return (
    <nav className='flex flex-col items-center justify-center'>
      <Button id='back-btn' variant='outline' onClick={() => router.push('/')}>
        Back to home
      </Button>
    </nav>
  );
}

export default ButtonHome;
