import React from "react";
import { useParams } from 'react-router-dom';

import Title from "components/Title";
import Image from "components/Image";
import CloseButton from "components/CloseButton";
import RemindMeButton from "components/ProductDetails/RemindMeButton";
import Slider from "components/ProductDetails/Slider";
import CTALikeButton from "components/CTALikeButton";
import CTAShareButton from "components/CTAShareButton";

import "./style.css";
import products from "json/products.json";

function ProductDetails (props) {
    const { productId } = useParams();
    const currentProduct = products.products[productId];

    return (
        <section className="product-details">
            <div className="actions">
                <CloseButton/>
                <RemindMeButton isActive={props.hasStock}/>
            </div>

            <Slider baseUrl={currentProduct.baseSliderImageUrl} />

            <div className="details">
                <Title subtitle={currentProduct.group} title={currentProduct.name} price={currentProduct.price + " €"} />
                <p className="wear-details">
                    <strong>Disponible {currentProduct.avaliableDate}</strong><br/>
                    {currentProduct.gender} {currentProduct.minSize} - {currentProduct.maxSize}
                </p>

                <p>{currentProduct.description}</p>

                <div className="container-cta">
                  <div className="cta">
                    <CTAShareButton />
                  </div>
                  <div className="cta">
                    <CTALikeButton className="like" id={currentProduct.id}/>
                  </div>

                </div>
                {currentProduct.descriptionImages.map((image, index) => (
                    <div key={index} className="desc-image">
                        <Image src={image} alt="Illustration" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductDetails;
