import React from "react";
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Image from 'components/Image';
import CTALikeButton from 'components/CTALikeButton'
import CTAShareButton from 'components/CTAShareButton'
import CTARemindingButton from 'components/CTARemindingButton'

import "./style.css";

function Product (props) {
    return (
        <div className="product">
            {/* Head */}
            <div className="padding">
              <Title subtitle={props.product.group} title={props.product.name} />
            </div>

            {/* Preview image */}
            <Link to={"/details/" + props.index}>
              <Image src={props.product.previewImages[0]} alt="Preview" className="preview" />
            </Link>

            {/* Actions */}
            <div className="padding actions">
              <div className="share">
                <CTALikeButton id={props.product.id} />
                <CTAShareButton />
              </div>
              <CTARemindingButton />
            </div>
          </div>
    );
}

export default Product;
