import React, { Component } from 'react';

import './error-indicator.css';

const ErrorIndicator = () =>{
    return(
        <div className="error-indicator">
            <span className="boom">Boom!</span>
            <p>something has gone terribly wrong</p>
            <p>(but we always sent droids to fix it)</p>
        </div>
    );
};

export default ErrorIndicator;