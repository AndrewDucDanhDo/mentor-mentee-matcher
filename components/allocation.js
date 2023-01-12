import React from "react";
import styles from '../styles/Home.module.css'

import { Text, Button } from "@nextui-org/react";
import { Table } from "@nextui-org/react";

export default function Allocation() {

  return (
    <div className={styles.window}>
        <div style={{display: 'inline-flex', justifyContent: 'space-between', marginTop: '2rem'}}>
            <Text h3 style={{marginLeft: '2rem'}} fontWeight="bold">Graduate Buddy Allocation</Text>
            <Button style={{marginRight: '2rem', borderWidth:"1px"}} rounded bordered color='#010101' variant="outline">
                <Text>Cancel</Text>
            </Button>
        </div>

        <div style={{display: 'inline-flex', justifyContent: 'center', marginTop: '2rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
            <div style={{
                flexBasis: '0',
                flexGrow: '1',
                border: '1px solid grey',
                padding: '10px'
                }}>
                <Text h5 fontWeight="bold" color="gray">Upload Sheets</Text>
                <Text fontWeight="normal" color="gray" >Step 1</Text>
            </div>
            <div style={{
                flexBasis: '0',
                flexGrow: '1',
                border: '1px solid black',
                borderBottom: '3px solid black',
                padding: '10px'
                }}>
                <Text h5 fontWeight="bold" >View Buddy Allocation</Text>
                <Text fontWeight="normal" >In Progress</Text>
            </div>
        </div>

        <div style={{paddingTop: '2rem', textAlign: "center"}}>
            <Text h2 style={{marginTop: '2rem', marginBottom: '2rem'}}>Buddy Allocation</Text>
            <Text>Allocation is complete. Please review the pairings below before confirming. A summarised allocation is shown. For a full view of the allocations, please download and view the .csv.</Text>
            <Text>Add sheets by clicking the buttons below.</Text>
        </div>

        <div className={styles.buttonContainer} style={{display: 'inline-flex', justifyContent: 'center', marginTop: '2rem', paddingLeft: '2rem', paddingRight: '2rem'}}>

        <div style={{paddingBottom: '2rem', textAlign: "center"}}>
            <Table
            shadow={false}
            css={{
                height: "auto",
                minWidth: "100%",
            }}
            >
            <Table.Header>
                <Table.Column>MENTOR</Table.Column>
                <Table.Column>MENTEE</Table.Column>
            </Table.Header>
            <Table.Body>
                <Table.Row key="1">
                <Table.Cell>Tony Reichert</Table.Cell>
                <Table.Cell>Harry Robbins</Table.Cell>

                </Table.Row>
                <Table.Row key="2">
                <Table.Cell>Zoey Lang</Table.Cell>
                <Table.Cell>Sarah Cairn</Table.Cell>

                </Table.Row>
                <Table.Row key="3">
                <Table.Cell>Jane Fisher</Table.Cell>
                <Table.Cell>Lizzy Lim</Table.Cell>

                </Table.Row>
                <Table.Row key="4">
                <Table.Cell>William Howard</Table.Cell>
                <Table.Cell>Andy Anderson</Table.Cell>

                </Table.Row>
            </Table.Body>
            </Table>
        </div>

        </div> 
    </div>
  );
}
