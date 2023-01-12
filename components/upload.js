import React from "react";
import styles from '../styles/Home.module.css'

import { Text, Button } from "@nextui-org/react";


export default function Upload() {

  return (
    <div className={styles.window}>
            
        <div style={{display: 'inline-flex', justifyContent: 'space-between', marginTop: '2rem'}}>
            <Text h3 style={{marginLeft: '2rem'}} fontWeight="bold">Graduate Buddy Allocation</Text>
        </div>

        <div style={{display: 'inline-flex', justifyContent: 'center', marginTop: '2rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
            <div style={{
                flexBasis: '0',
                flexGrow: '1',
                border: '1px solid black',
                borderBottom: '3px solid black',
                padding: '10px'
                }}>
                <Text h5 fontWeight="bold">Upload Sheets</Text>
                <Text fontWeight="normal" textDecoration="underline">In Progress</Text>
            </div>
            <div style={{
                flexBasis: '0',
                flexGrow: '1',
                border: '1px solid grey',
                padding: '10px'
                }}>
                <Text h5 fontWeight="bold" color="gray">View Buddy Allocation</Text>
                <Text fontWeight="normal" color="gray">Step 2</Text>
            </div>
        </div>

        <div style={{padding: '2rem', textAlign: "center"}}>
            <Text h2 style={{marginTop: '2rem', marginBottom: '2rem'}}>Upload Buddy and Incoming Graduate/Intern Files</Text>
            <Text >Upload Buddy and Incoming Graduate/Intern cohort sheets below to receive buddy allocations. Please note files must be in CSV or PSV format.</Text>
            <Text>Add sheets by clicking the buttons below.</Text>
        </div>

        <div className={styles.buttonContainer} style={{display: 'inline-flex', justifyContent: 'center', marginTop: '2rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
            <Button className={styles.button} style={{borderWidth:"1px"}} rounded bordered size="lg" color='#010101' variant="outline">
                <Text>Upload Grad Buddy Sheet</Text>
            </Button>
            <Button className={styles.button}  style={{borderWidth:"1px"}} rounded bordered size="lg" color='#010101' variant="outline">
                <Text>Upload Incoming Cohort Sheet</Text>
            </Button>
        </div>
        
    </div>
  );
}
