'use client';

// eslint-disable-next-line spellcheck/spell-checker
import { VscChromeMinimize, VscMenu } from 'react-icons/vsc';
import classNames from 'classnames';

import useMobileMenu from './useMobileMenu.vm';
import styles from './MobileMenu.module.css';

export default function MobileMenu() {
  const { openAside, showAlert, toggleOpenAside } = useMobileMenu();

  return (
    <button
      type="button"
      onClick={toggleOpenAside}
      className={classNames(styles.button, { [styles.btn_alert]: showAlert })}
    >
      <VscMenu
        size={25}
        className={
          classNames(styles.icon, styles.menu_icon, { [styles.hide__menu_icon]: openAside })
        }
      />

      <VscChromeMinimize
        size={25}
        className={
          classNames(styles.icon, styles.close_icon, { [styles.show__close_icon]: openAside })
        }
      />
    </button>
  );
}
