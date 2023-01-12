
import styles from '../styles/Home.module.css'
import { Button } from "@nextui-org/react";

export default function YellowButton({ children, href }) {

  return (
    <Button 
      rounded
      color="#ffcc00"
      className={styles.yellowButton }
    >
      {children}
    </Button>
  )
}
