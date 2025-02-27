'use client'

import { useSidebarContext } from '@/context/sidebar';
import styles from './sidebar.module.css';
import {BiLeftArrowAlt} from 'react-icons/bi';

function Sidebar({children}) {

  const [state, toggle] = useSidebarContext();

  return (
    <div style={{transform:`translateX(${state})`}} className={styles.sidebarC}>
      <BiLeftArrowAlt size={25} style={{alignSelf:"self-end"}} onClick={toggle} />
      {children}
    </div>
  )
}

export default Sidebar