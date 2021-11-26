//jshint esversion:6

import React from 'react';

import Title from 'components/Title';
import Image from 'components/Image';
import CTALikeButton from 'components/CTALikeButton'
import CTAShareButton from 'components/CTAShareButton'
import CTARemindingButton from 'components/CTARemindingButton'
import { Link } from 'react-router-dom';

import "./style.css";
import products from "json/products.json";

const Product = () => {

  return (
    <section className="product-list">
      
      {/* Header navigation links */}
      <nav className="header-navigation">
        <div className="links">
          <Link to="/" className="active">Feed</Link>
          <Link to="/">En stock</Link>
          <Link to="/">A venir</Link>
        </div>
        <button className="search-btn">Rechercher</button>
      </nav>

      {/* Products feed */}
      <ul>

        {Object.values(products)[0].map((product, index) => (
          
          <li key={index}><div className="product">
            {/* Head */}
            <div className="padding">
              <Title subtitle={product.group} title={product.name} />
            </div>

            {/* Preview image */}
            <Link to="/details/0">
              <Image src={product.previewImages[0]} alt="Preview" className="preview" />
            </Link>

            {/* Actions */}
            <div className="padding actions">
              <div className="share">
                <CTALikeButton />
                <CTAShareButton />
              </div>
              <CTARemindingButton />
            </div>
          </div></li>

        ))}

      </ul>
    </section>
  );
};

export default Product;
