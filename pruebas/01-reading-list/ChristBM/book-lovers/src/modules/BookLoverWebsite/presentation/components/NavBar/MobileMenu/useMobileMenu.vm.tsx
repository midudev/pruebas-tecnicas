import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import MainCtx from '@commonContext/MainCtx/MainCtx';

export default function useMobileMain() {
  const { states: { openAside, showAlert }, toggleOpenAside } = useContext(MainCtx);

  const pathname = usePathname();
  const showMenu = pathname === '/';

  return {
    showMenu,
    openAside,
    showAlert,
    toggleOpenAside,
  };
}
