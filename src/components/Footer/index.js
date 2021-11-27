import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {

  return(

    <div>
      <footer className={styles.footer}>
        <ul>
          <Link to="/" >
            <li className={styles.homeIcon + ' ' + styles.itemsMargin}><img src="/assets/svg/home.svg" alt="Home"></img></li>
          </Link>

          <Link to="/" >
            <li className={styles.discoverIcon + ' ' + styles.itemsMargin}><img src="/assets/svg/discover.svg" alt="Discover"></img></li>
          </Link>

          <Link to="/" >
            <li className={styles.messagesIcon + ' ' + styles.itemsMargin}><img src="/assets/svg/messages.svg" alt="Messages"></img></li>
          </Link>

          <Link to="/" >
            <li className={styles.profileIcon + ' ' + styles.itemsMargin}><img src="/assets/svg/profile.svg" alt="Profile"></img></li>
          </Link>
        </ul>
      </footer>

    </div>

  );
}

export default Footer;
