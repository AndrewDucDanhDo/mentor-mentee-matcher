import Upload from '../components/upload'
import Footer from '../components/uploadFooter'
import Header from '../components/header'

import styles from '../styles/Home.module.css'

export default function UploadPage() {

  return (
    <div className={styles.container}>
        <Header/>
        <main className={styles.main}>
            <Upload/>
        </main>
        <Footer/>
    </div>
  );
}
