import React from 'react';
import { Link } from 'react-router-dom';

function CloseButton() {
    return (
        <Link to="/"><button>Fermer</button></Link>
    );
}

export default CloseButton;