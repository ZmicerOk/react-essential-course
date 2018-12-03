import React, { Component } from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () =>{
    return(
        <div className="error-indicator">
        <img src = {icon} alt="error icon"/>
            <span className="boom">Boom!</span>
            <p>something has gone terribly wrong</p>
            <p>(but we always sent droids to fix it)</p>
        </div>
    );
};

export default ErrorIndicator;