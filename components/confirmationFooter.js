import styles from '../styles/Home.module.css'
import YellowButton from './yellowButton'

import Link from 'next/link';

export default function ConfirmationFooter() {
  return (
    <div className={styles.container} >
      <footer className={styles.footer}>
        <div style={{padding: '1rem'}}>
        <Link href="/" style={{color:'black' }}><YellowButton>Home</YellowButton></Link>
        </div>
      </footer>
    </div>
  )
}
