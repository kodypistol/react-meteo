//jshint esversion:6

import React from 'react';

import Title from 'components/Title';
import Image from 'components/Image';
import LikeButton from 'components/LikeButton'
import ShareButton from 'components/ShareButton'


const Product = () => {


  return (
    <div>
      <Title subtitle="Air Jordan 1" title="Acclimate"/>
      <Image src="" alt="chaussure" />
      <LikeButton />
      <ShareButton />
    </div>
  );
};

export default Product;
