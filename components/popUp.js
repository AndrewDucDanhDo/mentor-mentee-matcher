import styles from '../styles/Home.module.css'
import { Button, Link, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import YellowButton from './yellowButton';

export default function PopUp() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
}

  return (
    <div>
        <Button rounded color="#ffcc00"className={styles.yellowButton } onClick={() => setShowPopup(true)}>Open Popup</Button>
        {showPopup && (
            <div className={styles.popup}>
                <div className={styles.popupInner}>
                    <div className={styles.popupHeader}>
                        <Text h2>Confirmation Buddy Allocation</Text>
                        <Button size='xs' light onClick={() => setShowPopup(false)}>X</Button>
                    </div>
                        <Text h5> Upon confirmation of buddy allocation, the following will happen</Text>
                        <Text h5> - Introductory emails will do sent to both exisitng and new graduates</Text>
                        <Text h5> - A tentative teams meeting will be created with a meeting link attached to the introductory email</Text>
                        <Text h5> Once confirmed, this action cannot be undone</Text>
                    <Link href="/confirmationPage"  style={{color:'black' }}><Button rounded color="#ffcc00" className={styles.yellowButton }>Confirm</Button></Link>
                </div>
            </div>
        )}
        </div>
  )
}
