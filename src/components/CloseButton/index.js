import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css";

function CloseButton() {
    return (
        <Link to="/" className="close-btn"><button>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="18.042" cy="18.1431" rx="18" ry="18.0025" fill="#524F4A"/><path d="M24.4537 13.3721L22.5818 11.5001L17.8146 15.9883L13.0475 11.2212L11.1872 13.0815L16.2449 18.1392L11.4778 22.9064L13.1986 24.6272L17.9657 19.86L22.7329 24.6272L24.4537 22.9064L19.6865 18.1392L24.4537 13.3721Z" fill="white"/></svg>
        </button></Link>
    );
}

export default CloseButton;