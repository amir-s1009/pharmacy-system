import styles from './layout.module.css';

function Layout({children}) {
  return (
    <div className={styles.loginL}>{children}</div>
  )
}

export default Layout