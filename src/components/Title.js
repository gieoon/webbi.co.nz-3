import React from 'react';
import logo from '../assets/white_254.png';

export default function Title({

}){
    return(
        <div className="Title">
            <div className="container">
                <div className="Title-wrapper">
                    <h1>Webbi</h1>
                    <img src={logo} alt="Webbi logo" />
                </div>
                <div>
                    <h5>Grow your business with a powerful image that speaks who you are and makes you visible.</h5>
                </div>
            </div>
        </div>
    )
}
