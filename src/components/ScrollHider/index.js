import styles from 'components/Footer/styles.module.css';

const ScrollHider = () => {

  const body = document.body;
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

//Code de Adel SANAA:
//Ici, j'ajoute un EventListener qui va écouter le "scroll" de la page.
//Je place dans une variable constante la valeur actuelle de pixels sur lesquels le document défile actuellement sur l'axe Y
//Ensuite, je conditionne avec cette valeur pour savoir si c'est un scroll qui est vers le haut, ou le bas
//par rapport à la valeur initiale du dernier scroll.
//Enfin, je change la classe de mon footer et de mon body en fonction de ce scroll. La class
//du footer contient les animations de défilement haut/bas.

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
      document.querySelector("#footer").classList.remove(styles.show);
      document.querySelector("#footer").classList.add(styles.hide);

    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
      document.querySelector("#footer").classList.remove(styles.hide);
      document.querySelector("#footer").classList.add(styles.show);
    }
    lastScroll = currentScroll;
  });

  return null;

}

export default ScrollHider;
