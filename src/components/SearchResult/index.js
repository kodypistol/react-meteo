import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Image from "components/Image";

function SearchResult (props) {
    return (
        <div className="product-result-container">
            <Link to={"/details/" + props.index} className="product-result" onClick={props.onSelect}>
                <div className="img-container">
                    <Image src={props.product.descriptionImages[0]} alt="Preview" />
                </div>
                <div className="text">
                    <h4>{props.product.name}</h4>
                    <p>{props.product.group}</p>
                </div>
            </Link>
        </div>
    );
}

export default SearchResult;