import Header from '@/components/header/header';
import styles from './layout.module.css';
import Sidebar from '@/components/sidebar/sidebar';
import SidebarButton from '@/components/sidebarButton/sidebarButton';

import sidebarButtons from '@/config/sidebarButtons.json';
import { SidebarContextProvider } from '@/context/sidebar';
import { cookies } from 'next/headers';
import { fetchData } from '@/utils/data';

async function Layout({children}) {
  
  const userId = (await cookies()).get('ssid').value;

  const user = await fetchData(`users/${userId}`);
  const isPatient = user.role === 'patient';

  return (
    <SidebarContextProvider>
      <div className={styles.dashboardL}>   
        <Sidebar>
          {
            isPatient && sidebarButtons.patient.map((btn, index) => {
              return <SidebarButton key={index} text={btn} href={`/dashboard/${btn}`} />
            })
          }
          {
            !isPatient && sidebarButtons.doctor.map((btn, index) => {
              return <SidebarButton key={index} text={btn} href={`/dashboard/${btn}`} />
            })
          }
          <SidebarButton text='log out' href='/login' />
        </Sidebar>
        <Header />
        {children}
      </div>
    </SidebarContextProvider>
  )
}

export default Layout