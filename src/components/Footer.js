import React from 'react';

import { Tool, Edit3, Sun, Send, Phone, Home, Facebook, Linkedin } from 'react-feather';
import logo from '../assets/white_254.png';

export default function Footer({

}){
    return (
        <footer className="Footer">
            <div className="container">
                <div className="Footer-wrapper">
                    <div className="left">
                        
                        <div className="row">
                            <a href="mailto:jun.a.kagaya@gmail.com">
                                <Send />
                                <small>hello@webbi.co.nz</small>
                            </a>
                        </div>
                        <div className="row">
                            <Phone />
                            <small>(+64) 022-091-0069</small>
                        </div>
                        
                        <div>
                            
                            <small><Home />Richmond, Nelson, New Zealand, 7020</small>
                        </div>
                    </div>
                    {/* <div>
                        <img src={logo} alt="Webbi logo" />
                    </div> */}
                    <div className="right">
                        <div className="row">
                            <div className="social-wrapper">
                                <div className="social">
                                    <a href="https://www.facebook.com/Webbi-Digital-Design-105745454602021" target="_blank" rel="noopener noreferrer">
                                        <Facebook />
                                    </a>
                                </div>
                                <div className="social">
                                    <a href="https://www.linkedin.com/company/webbi-digital-studio/" target="_blank" rel="noopener noreferrer">
                                        <Linkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <small>Icons made by <a href="https://www.flaticon.com/free-icon/product_2362021?term=different&page=1&position=4" title="ultimatearm">ultimatearm</a>, <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>, from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></small>
                        </div>
                        <div className="row">
                            {/* <Edit3 /> */}
                            <small>Designed by Webbi Digital Studio &copy; 2020</small>
                        </div>
                        <div>
                            {/* <Tool /> */}
                            <small>
                                {/* Built  */}
                                In sunny <Sun color="#eb4614" />Nelson, New Zealand
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
