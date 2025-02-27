import styles from './layout.module.css';

function Layout({children}) {
  return (
    <div className={styles.prescriptionsL}>{children}</div>
  )
}

export default Layout