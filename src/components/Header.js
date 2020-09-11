import React, {useState, useEffect} from 'react';

import logo from '../assets/logo_254.png';
import HamburgerMenu from 'react-hamburger-menu';

export default function Header({

}){
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    const handleHamburgerClicked = (e) => {
        console.log('Hamburger clicked');

    }

    useEffect(()=>{
        console.log(window.innerWidth);
        if(window.innerWidth < 769){
            setIsMobile(true);
            
        }
    });

    return(
        <nav className="Header">
            <div>
                <img className="logo" src={logo} alt="Webbi's logo" />
            </div>
            { isMobile
                ? <HamburgerMenu
                    isOpen={hamburgerOpen}
                    menuClicked={handleHamburgerClicked.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.5}
                />

                : <div className="Links-wrapper">
                    <div><a href="#ourwork">Our Work</a></div>
                    <div><a href="#about">About</a></div>
                    <div><a href="#faq">FAQ</a></div>
                    <div><a href="#contact">Contact</a></div>
                </div>
            }
        </nav>
    )
}
