import React from 'react';

import { Tool, Edit3, Sun, Send, Phone, Home } from 'react-feather';
import logo from '../assets/white_254.png';

export default function Footer({

}){
    return (
        <footer className="Footer">
            <div className="container">
                <div className="Footer-wrapper">
                    <div>
                        <div className="row">
                            <Edit3 />
                            <small>Designed by Webbi Digital Studio &copy; 2020</small>
                        </div>
                        <div className="row">
                            <a href="mailto:jun.a.kagaya@gmail.com">
                                <Send />
                                <small>jun.a.kagaya@gmail.com</small>
                            </a>
                        </div>
                        <div className="row">
                            <Phone />
                            <small>(+64) 022-091-0069</small>
                        </div>
                        {/* <div>
                            <Home />
                            <small>Richmond, Nelson, New Zealand, 7020</small>
                        </div> */}
                    </div>
                    <div>
                        <img src={logo} alt="Webbi logo" />
                    </div>
                    <div>
                        <div>
                            <Tool />
                            <small>
                                Built in Sunny <Sun />Nelson, New Zealand
                                {/* <span style={{fontSize: "24px",marginBottom:"-4px"}}>🇳🇿</span> */}
                            </small>
                        </div>
                        {/* <div>
                            <small>Made with ❤️</small>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}
