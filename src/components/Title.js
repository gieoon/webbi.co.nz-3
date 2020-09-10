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
                    {/* <h5>We specialize in website design &amp; development</h5> */}
                    <h5>Website Design &amp; Development <br/>in Nelson, New Zealand</h5>
                </div>
            </div>
        </div>
    )
}
