import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { Button } from "@nextui-org/react";

export default function YellowButton({ children, href }) {
  const router = useRouter()

  return (
    <Button 
      rounded
      color="#ffcc00"
      onClick={() => router.push(href)}
      className={styles.yellowButton }
    >
      {children}
    </Button>
  )
}
