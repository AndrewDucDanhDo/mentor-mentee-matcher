import styles from '../styles/Home.module.css'
import YellowButton from './yellowButton'
import { Button } from '@nextui-org/react';

import Link from 'next/link';

export default function UploadFooter() {
  return (
    <div className={styles.container} >
      <footer className={styles.footer}>
      <div style={{padding: '1rem'}}>
        <Link href="/" style={{color:'black' }}>
          <Button style={{marginRight: '2rem', borderWidth:"1px"}} rounded bordered color='#010101' variant="outline"> 
              Back
          </Button>
          </Link>
        </div>
        <div style={{padding: '1rem'}}>
        <Link href="allocationPage" style={{color:'black' }}><YellowButton>Next</YellowButton></Link>
        </div>
      </footer>
    </div>
  )
}
