import React from 'react';

import Title from 'components/Title';
import CloseButton from "components/CloseButton";
import RemindMeButton from "components/ProductDetails/RemindMeButton";
import Slider from "components/ProductDetails/Slider"

function ProductDetails (props) {
    return (
        <section class="product-details">
            <div className="actions">
                <CloseButton/>
                <RemindMeButton isActive={false}/>
            </div>
            
            <Slider/>
            <div className="details">
                <Title subtitle="Air Jordan 1" title="Acclimate" price="169,99 € Stock épuisé"/>
                <p><strong>Disponible {props.avaliableDate}</strong></p>
                <p>{props.gender} {props.minSize} - {props.maxSize}</p>

                <p>{props.description}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec libero elit. Sed quis tortor a urna euismod sodales non eu magna. Nulla facilisi. Fusce tempor congue velit, quis tincidunt nisi euismod sed. Vestibulum et orci cursus, finibus ex nec, tincidunt ligula. Duis interdum dapibus lorem quis mollis. Vivamus sit amet semper erat, vel scelerisque purus. Donec placerat, nisi tincidunt blandit tincidunt, justo tellus egestas risus, sed ultrices dui diam sit amet orci. Nullam quis ante vitae justo scelerisque sagittis nec nec tortor. Quisque et elit commodo, vestibulum augue eu, sollicitudin mi. Curabitur a auctor nisl, ac lobortis sapien. Etiam ultricies, nulla eget ornare pharetra, elit augue semper nisl, ac molestie ipsum est non mauris. Maecenas dignissim, ex eget congue varius, est mauris commodo leo, a aliquam nisl nisl quis lorem. 
                </p>
            </div>
        </section>
    );
}

export default ProductDetails;