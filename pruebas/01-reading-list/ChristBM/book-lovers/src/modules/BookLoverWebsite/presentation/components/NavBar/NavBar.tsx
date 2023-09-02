import Image from 'next/image';
import logoWhite from '@public/logo-white.svg';

import MobileMenu from './MobileMenu/MobileMenu';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Image src={logoWhite} alt="BookLovers Logo" width={200} height={46} />

        <div className={styles.mobile_menu}>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
