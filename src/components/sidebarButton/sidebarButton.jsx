'use client'

import Link from 'next/link';
import styles from './sidebarButton.module.css';
import { usePathname } from 'next/navigation';

function SidebarButton({text, href}) {

  const pathname = usePathname();

  return (
    <Link className={styles.sidebarButton} style={{borderLeft:pathname === href?"2px solid lightblue":"none"}} href={href}>{text}</Link>
  )
}

export default SidebarButton