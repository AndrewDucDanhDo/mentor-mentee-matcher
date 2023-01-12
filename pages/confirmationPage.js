
import Header from '../components/header'
import { Button, Text } from "@nextui-org/react";

import styles from '../styles/Home.module.css'
import Footer from '../components/confirmationFooter'

export default function UploadPage() {

  return (
    <div className={styles.container}>
      <Header/>
        <main className={styles.main}>
        <div className={styles.windowConfirmation}>
            
            <div style={{padding: '2rem', textAlign: "center"}}>
                <Text h2 style={{marginTop: '2rem', marginBottom: '2rem'}}>Graduate Buddy Allocations Confirmed</Text>
                <Text>Graduate Buddies have been successfully allocated. Introductory emails are being sent to the mentors & mentees.</Text>
                <Text style={{paddingTop: '1rem'}}>Forgot to save the allocations?</Text>
            </div>
    
            <div className={styles.buttonContainer} style={{display: 'inline-flex', justifyContent: 'center', marginTop: '2rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
                <Button className={styles.button} style={{borderWidth:"1px"}} rounded bordered size="lg" color='#010101' variant="outline">
                    <Text>Download CSV File</Text>
                </Button>
                <Button className={styles.button}  style={{borderWidth:"1px"}} rounded bordered size="lg" color='#010101' variant="outline">
                    <Text>Download Excel File</Text>
                </Button>
            </div>
            
        </div>
        </main>
<Footer/>
    </div>
  );
}
