import Link from 'next/link'

import styles from "../assets/styles/navigation.module.css"

function Navigation() {
    return(
        <nav>
            <Link href="/">
                <a className={styles.link}>Anasayfa</a>
            </Link>
            <Link href="/about">
                <a className={styles.link}>Hakkımda</a>
            </Link>
            <Link href="/galley">
                <a className={styles.link}>Galeri</a>
            </Link>
        </nav>
    ) 
  }
  
  export default Navigation