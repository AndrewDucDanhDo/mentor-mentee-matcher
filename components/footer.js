import styles from '../styles/Home.module.css'
import YellowButton from './yellowButton'

export default function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div style={{paddingTop: '20px'}}>
          <YellowButton  href="/about">Next</YellowButton>
        </div>
      </footer>
    </div>
  )
}
