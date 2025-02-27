import Header from '@/components/header/header';
import './layout.module.css';
import Sidebar from '@/components/sidebar/sidebar';
import SidebarButton from '@/components/sidebarButton/sidebarButton';

function Layout({children}) {
  return (
    <div className='dashboardL'>
      <Header />
      {children}
      <Sidebar>
        {
          <SidebarButton text={null} href={null} />
        }
      </Sidebar>
    </div>
  )
}

export default Layout