import React from 'react';

export default function Contact({

}){
    const SERVER_ADDRESS = 'http://webbiconz-consulting.ts.r.appspot.com/index.php';//'http://localhost:9000/index.php';

    const sendRequest = (e) => {
        e.preventDefault();
        // console.log(e)
        var formData = form2Json(document.getElementById('contactForm'));
        console.log(formData);
        fetch(SERVER_ADDRESS, {
            method: 'post',
            // mode: 'no-cors',
            body: JSON.stringify(formData) 
        }).then((res) => res.json())
        .then(d => console.log("d: ", d));

        // var name = document.getElementById('name').value;
        // var email = document.getElementById('email').value;
        // var company = document.getElementById('company').value;
        // var url = document.getElementById('url').value;

    }

    const form2Json = (element) => {
        const out = {"check_list": []};
        const inputs = element.getElementsByTagName("input");
        console.log("inputs: ", inputs)
        for(var i=0;i<inputs.length;i++){
            var el = inputs[i];
            console.log(el);
            if(el.name !== "check_list")
                out[el.name] = el.value;
            else 
                out[el.name].push(el.value);
            
        }
        return out;
    }

    return(
        <div id="contact" className="Contact">
            <div className="container">
                <form id="contactForm">
                    <h2>Contact us</h2>
                    <p>Let us know what you're after and receive an instant quote.</p>

                    <input id="name" name="name" placeholder="Your name" />
                    <input id="email" name="email" placeholder="Your email" />
                    <input id="company" name="company" placeholder="Your company" />
                    <input id="url" name="url" placeholder="Your website (if available)" />

                    <CheckList />

                    <div className="submit" onClick={(e)=>{sendRequest(e)}}>
                        <div><button name="submit" type="submit">Submit</button></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

function CheckList({

}){
    return(
        <div className="checkbox-block CheckList">     
            <h4>How can we help?</h4>
            <div>
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

                <label className="checkbox-wrapper">E-Commerce
                    <input type="checkbox" name="check_list" value="E-Commerce"/>
                    <span className="checkmark"></span>
                </label>

                <label className="checkbox-wrapper">Shopify
                    <input type="checkbox" name="check_list" value="Shopify"/>
                    <span className="checkmark"></span>
                </label>

                <label className="checkbox-wrapper">Wordpress
                    <input type="checkbox" name="check_list" value="Wordpress"/>
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