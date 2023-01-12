import styles from '../styles/Home.module.css'
import YellowButton from './yellowButton'
import { Button, Link, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import PopUp from '../components/popUp'

export default function AllocationFooter() {

  return (
    <div className={styles.container} >
      <footer className={styles.footer}>
        <div style={{padding: '1rem'}}>
        <Link href="/uploadPage" style={{color:'black' }}>
          <Button style={{marginRight: '2rem', borderWidth:"1px"}} rounded bordered color='#010101' variant="outline"> 
              Cancel
          </Button>
          </Link>
        </div>
        <div style={{padding: '1rem'}}>
        <PopUp>Confirm</PopUp>
        </div>
      </footer>
    </div>
  )
}
