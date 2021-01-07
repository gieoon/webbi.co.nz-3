import React from 'react';
import FadeIn from 'react-fade-in';

export default function Top({
}){
    return(
        <div className="Top" id="TAG__visible_top">
            {/* <img src={backgroundImg} alt=""/> */}
            <FadeIn>
                <p>Launch your products.</p>
                <p>Grow your business.</p>
                <p>Be seen online.</p>
            </FadeIn>
        </div>
    );
}