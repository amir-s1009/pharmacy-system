import Link from 'next/link';
import './sidebarButton.module.css';

import React from 'react'

function SidebarButton({text, href}) {
  return (
    <Link href={href}>{text}</Link>
  )
}

export default SidebarButton