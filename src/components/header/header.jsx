'use client'

import { usePathname } from 'next/navigation';
import styles from './header.module.css';
import {BiMenu} from 'react-icons/bi';
import { useSidebarContext } from '@/context/sidebar';

function Header() {

  const [state, toggle] = useSidebarContext();

  const pathname = usePathname();
  const routeTitle = pathname.substring(pathname.lastIndexOf('/')+1);

  return (
    <div className={styles.headerC}>
      <BiMenu onClick={toggle} />
      <h2>{routeTitle}</h2>
    </div>
  )
}

export default Header