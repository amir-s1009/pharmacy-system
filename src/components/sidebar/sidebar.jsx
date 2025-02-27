import './sidebar.module.css';

import React from 'react'

function Sidebar({children}) {
  return (
    <div className='sidebarC'>{children}</div>
  )
}

export default Sidebar