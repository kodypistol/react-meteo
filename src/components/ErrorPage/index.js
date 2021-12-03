import React from "react";

import "./style.css";

function ErrorPage ({ errorCode }) {
    return (
        <section className="error-page">
            <div className="texts">
                <h3>🚫</h3>
                <h2>Erreur {errorCode}</h2>
                <p>Désolé, une erreur est survenue...</p>
            </div>
        </section>
    );
}

export default ErrorPage;