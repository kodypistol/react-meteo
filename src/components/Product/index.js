//jshint esversion:6

import React from 'react';

import Title from 'components/Title';
import Image from 'components/Image';
import CTALikeButton from 'components/CTALikeButton'
import CTAShareButton from 'components/CTAShareButton'
import CTARemindingButton from 'components/CTARemindingButton'
import { Link } from 'react-router-dom';
import StylingComponents from 'components/StylingComponents'

import styles from './Product.module.css'


const Product = () => {


  return (
    <div>
      <Title subtitle="Air Jordan 1" title="Acclimate"/>
      <Image src="" alt="chaussure" />
      <CTALikeButton />
      <CTAShareButton />
      <CTARemindingButton />
      <hr />
      <Link to="/details"> Voir les détails</Link>

      <StylingComponents />
    </div>
  );
};

export default Product;
