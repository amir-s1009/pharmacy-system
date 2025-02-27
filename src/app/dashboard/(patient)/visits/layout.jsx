import styles from './layout.module.css';

function Layout({children}) {
  return (
    <div className={styles.visitsL}>{children}</div>
  )
}

export default Layout