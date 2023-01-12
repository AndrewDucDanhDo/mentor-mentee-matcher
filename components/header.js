import React from "react";
import styles from '../styles/Home.module.css'

import { Navbar} from "@nextui-org/react";
import { Image } from '@nextui-org/react';

import CBALogo from '/img/commbank_logo_wordmark.png'

export default function Header() {

  return (
    <div className={styles.navbar}>
      <div >
        <Image className={styles.navbarLogo}
          src="https://www.edigitalagency.com.au/wp-content/uploads/Commonwealth-Bank-logo-png-small.png"
          alt="Company Logo"
          height={35}
          width={200}
        />
       </div>
    </div>
  );
}
