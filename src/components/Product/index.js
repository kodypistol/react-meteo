//jshint esversion:6

import React from 'react';

import Title from 'components/Title';
import Image from 'components/Image';
import CTALikeButton from 'components/CTALikeButton'
import CTAShareButton from 'components/CTAShareButton'
import CTARemindingButton from 'components/CTARemindingButton'
import { Link } from 'react-router-dom';

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
    </div>
  );
};

export default Product;
