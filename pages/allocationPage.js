import Allocation from '../components/allocation'
import Footer from '../components/allocationFooter'
import Header from '../components/header'

import styles from '../styles/Home.module.css'

export default function UploadPage() {

  return (
    <div className={styles.container}>
      <Header/>
        <main className={styles.main}>
            <Allocation/>
        </main>
        <Footer/>
    </div>
  );
}
