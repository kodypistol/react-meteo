//jshint esversion:6

import React from 'react';

import Title from 'components/Title';
import Image from 'components/Image';
import CTALikeButton from 'components/CTALikeButton'
import CTAShareButton from 'components/CTAShareButton'
import CTARemindingButton from 'components/CTARemindingButton'
import { Link } from 'react-router-dom';

import "./style.css";

const Product = () => {
  return (
    <section className="product-list">
      <div class="product">
        <div className="padding">
          <Title subtitle="Air Jordan 1" title="Acclimate"/>
        </div>
        <Image src="https://picsum.photos/500/500" alt="chaussure" className="preview" />
        <div className="padding actions">
          <div className="share">
            <CTALikeButton />
            <CTAShareButton />
          </div>
          <CTARemindingButton />
        </div>
      </div>
      <hr />
      <Link to="/details"> Voir les détails</Link>
    </section>
  );
};

export default Product;
