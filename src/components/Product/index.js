//jshint esversion:6

import React from 'react';

import Title from 'components/Title';
import Image from 'components/Image';
import LikeButton from 'components/LikeButton'

import styles from './Product.module.css'


const Product = () => {


  return (
    <div>
      <Title subtitle="Air Jordan 1" title="Acclimate"/>
      <Image className={styles.image} src="https://picsum.photos/300/200" alt="chaussure" />
      <LikeButton />
    </div>
  );
};

export default Product;
