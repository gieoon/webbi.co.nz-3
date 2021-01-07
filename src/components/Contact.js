import React, {useState} from 'react';
import unicorn from '../assets/unicorn.svg';
import {GAevent} from '../analytics';

export default function Contact({

}){
    const SERVER_ADDRESS = 
        'https://webbiconz-consulting.ts.r.appspot.com/index.php';
        // 'http://localhost:9000/index.php';

    const [showing, setShowing] = useState(true);
    const [loading, setLoading] = useState(false);

    const sendRequest = (e) => {
        setLoading(true);
        e.preventDefault();
        // console.log(e)
        var formData = form2Json(document.getElementById('contactForm'));
        // console.log(formData);
        fetch(SERVER_ADDRESS, {
            method: 'post',
            // mode: 'cors',
            mode: 'no-cors',
            body: JSON.stringify(formData) 
        }).then((res) => {
            res.text();
            // res.json()
            setShowing(false);
            setLoading(false);
        })
        .then(d => {
            // console.log("d: ", d)
        })
        .catch(err =>{
            // console.error("Error sending cors");
        })

        // var name = document.getElementById('name').value;
        // var email = document.getElementById('email').value;
        // var company = document.getElementById('company').value;
        // var url = document.getElementById('url').value;

    }

    const form2Json = (element) => {
        const out = {"check_list": []};
        const inputs = element.getElementsByTagName("input");
        // console.log("inputs: ", inputs)
        for(var i=0;i<inputs.length;i++){
            var el = inputs[i];
            // console.log(el);
            if(el.name !== "check_list")
                out[el.name] = el.value;
            else {
                // console.log(el.checked)
                if(el.checked)
                    out[el.name].push(el.value);
                
            }
                
            
        }
        return out;
    }

    const Loader = () => {
        return <div className="Loader">
            <div className={"overlay " + (loading ? "showing" : "")}>
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
        </div>
    }

    return(
        <div id="contact" className="Contact">
            <Loader />
            { showing 
                ? <div>
                    <div className="container" id="TAG__visible_contact">
                        <form id="contactForm">
                            <h2>Contact us, we're friendly.</h2>
                            <p>Let us know what you're after and receive a quote.</p>
                            <input id="name" name="name" placeholder="Your name" />
                            <input id="email" name="email" placeholder="Your email" />
                            <input id="company" name="company" placeholder="Your company" />
                            <input id="url" name="url" placeholder="Your website (if available)" />

                            <CheckList />

                            <div className="submit" onClick={(e)=>{
                                GAevent('clicked', 'form-submit-pressed');
                                sendRequest(e);
                            }}>
                                <div><button name="submit" id="TAG__submit" type="submit">Submit</button></div>
                            </div>
                        </form>
                    </div>
                    
                    <div className="additional">
                        <h2>Or contact us directly</h2>
                        <div>
                            <p>Call Jun at: <a href="tel:0220910069">(+64) 0220910069</a></p>
                            <p>Email us at: <a href="mailto:hello@webbi.co.nz">hello@webbi.co.nz</a></p>
                        </div>
                    </div>
                </div>
                : <div className="confirmation-wrapper">
                    <img src={unicorn} alt="Picture of unicorn with website" />
                    <h2>Thanks, we will get back to you shortly.</h2>
                    <p>- The Webbi Team</p>
                </div>
            }
        </div>
    )
}

function CheckList({

}){
    return(
        <div className="checkbox-block CheckList">     
            <h4>How can we help?</h4>
            <div className="CheckList-wrapper">
                <label className="checkbox-wrapper">New website
                    <input type="checkbox" name="check_list" value="Website" />
                    <span className="checkmark"></span>
                </label>

                <label className="checkbox-wrapper">Mobile Application
                    <input type="checkbox" name="check_list" value="Mobile Application" />
                    <span className="checkmark"></span>
                </label>

                <label className="checkbox-wrapper">Brand Design
                    <input type="checkbox" name="check_list" value="Brand Design"/>
                    <span className="checkmark"></span>
                </label>

                <label className="checkbox-wrapper">E-Commerce / Selling products online
                    <input type="checkbox" name="check_list" value="E-Commerce"/>
                    <span className="checkmark"></span>
                </label>

                {/* <label className="checkbox-wrapper">Shopify
                    <input type="checkbox" name="check_list" value="Shopify"/>
                    <span className="checkmark"></span>
                </label> */}

                {/* <label className="checkbox-wrapper">Wordpress
                    <input type="checkbox" name="check_list" value="Wordpress"/>
                    <span className="checkmark"></span>
                </label> */}

                <label className="checkbox-wrapper">Blog
                    <input type="checkbox" name="check_list" value="Blog"/>
                    <span className="checkmark"></span>
                </label>

                <label className="checkbox-wrapper">Custom features
                    <input type="checkbox" name="check_list" value="New platform to disrupt an industry"/>
                    <span className="checkmark"></span>
                </label>

                {/* <label className="checkbox-wrapper">New platform to disrupt an industry
                    <input type="checkbox" name="check_list[]" value="New platform to disrupt an industry"/>
                    <span className="checkmark"></span>
                </label> */}

                <label className="checkbox-wrapper">Not sure, let's discuss ideas
                    <input type="checkbox" name="check_list" value="Other" />
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>
    )
}