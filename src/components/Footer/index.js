import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {

// Initialisation des états des différentes icônes du footer
  const [homeClicked, setHomeClick] = useState(true);
  const [discoverClicked, setDiscoverClick] = useState(false);
  const [messagesClicked, setMessagesClick] = useState(false);
  const [profileClicked, setProfileClick] = useState(false);

//Sachant bien que ce n'est probablement pas la façon la plus optimisée de faire,
//c'est la logique que j'ai réussi à trouver. Je vérifie quel événement a déclenché
//le click du bouton, puis je modifie son état en fonction du bouton cliqué, identifié
//grâce à sa propriété alt.

  const setActiveItem = () => {
    const activedItem = window.event.target;

    if (activedItem.alt === "Home"){
      setHomeClick(true);
      setDiscoverClick(false);
      setMessagesClick(false);
      setProfileClick(false);

    } else if(activedItem.alt === "Discover"){
        setHomeClick(false);
        setDiscoverClick(true);
        setMessagesClick(false);
        setProfileClick(false);

    } else if (activedItem.alt === "Messages") {
    setHomeClick(false);
    setDiscoverClick(false);
    setMessagesClick(true);
    setProfileClick(false);

  } else if (activedItem.alt === "Profile"){
    setHomeClick(false);
    setDiscoverClick(false);
    setMessagesClick(false);
    setProfileClick(true);
  }
}

  return(

    <div>
      <footer className={styles.footer}>
        <ul>
          <Link to="/" >
            <li
              className={styles.homeIcon + ' ' + styles.itemsMargin} onClick={setActiveItem}>
              <img src={!homeClicked ? "/assets/svg/homeInactive.svg" : "/assets/svg/homeActive.svg"} alt="Home"></img>
            </li>
          </Link>

          <Link to="/discover" >
            <li className={styles.discoverIcon + ' ' + styles.itemsMargin} onClick={setActiveItem}>
              <img src={!discoverClicked ? "/assets/svg/discoverInactive.svg" : "/assets/svg/discoverActive.svg"} alt="Discover">
              </img>
            </li>
          </Link>

          <Link to="/messages" >
            <li className={styles.messagesIcon + ' ' + styles.itemsMargin} onClick={setActiveItem}>
            <img src={!messagesClicked ? "/assets/svg/messagesInactive.svg" : "/assets/svg/messagesActive.svg"} alt="Messages"></img></li>
          </Link>

          <Link to="/profile" >
            <li className={styles.profileIcon + ' ' + styles.itemsMargin} onClick={setActiveItem}>
            <img src={!profileClicked ? "/assets/svg/profileInactive.svg" : "/assets/svg/profileActive.svg"} alt="Profile"></img></li>
          </Link>
        </ul>
      </footer>

    </div>

  );
}

export default Footer;
