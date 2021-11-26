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
        <li><div class="product">
            {/* Head */}
            <div className="padding">
              <Title subtitle="Air Jordan 1" title="Acclimate"/>
            </div>

            {/* Preview image */}
            <Link to="/details">
              <Image src="https://picsum.photos/500/500" alt="chaussure" className="preview" />
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

          <li><div class="product">
            <div className="padding">
              <Title subtitle="Air Jordan 1" title="Acclimate"/>
            </div>

            <Link to="/details">
              <Image src="https://picsum.photos/500/500" alt="chaussure" className="preview" />
            </Link>

            <div className="padding actions">
              <div className="share">
                <CTALikeButton />
                <CTAShareButton />
              </div>
              <CTARemindingButton />
            </div>
          </div></li>
      </ul>
    </section>
  );
};

export default Product;
