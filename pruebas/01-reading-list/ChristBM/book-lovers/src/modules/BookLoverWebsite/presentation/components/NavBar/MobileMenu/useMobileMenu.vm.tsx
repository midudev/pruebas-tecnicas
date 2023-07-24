import { useContext } from 'react';
import MainCtx from '@commonContext/MainCtx/MainCtx';

export default function useMobileMain() {
  const { states: { openAside, showAlert }, toggleOpenAside } = useContext(MainCtx);

  return { openAside, showAlert, toggleOpenAside };
}
