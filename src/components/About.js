import React from 'react';
import FadeIn from 'react-fade-in';

export default function About({

}){
    return(
        <div id="about" className="About">
            <div className="container" id="TAG__visible_about">
                <div>
                    <div className="spacer"><hr/></div>
                    <h2>About us</h2>
                    <div>
                        {/* <FadeIn> */}
                            {/* <p>Webbi is a run by Jun Alex Kagaya</p> */}
                            <p>We're a website design & development studio located in <strong>Nelson</strong> on <strong>New Zealand's South Island</strong>. 
                            We're grateful to live in the sunniest place in New Zealand, but it sure makes it hard to stay coding indoors when it's so beautiful outside.
                            </p>
                            {/* and in 2019 experienced over 2500 hours of sunshine. */}

                            <br/><br/>
                            <p>We're comfortable with a variety of technologies and can come up with a design for just about anything. Let us update your website, add a blog page, or create a new brand for your business.</p>
                            {/* Get in touch with us for a quick discussion on what you're after */}
                            {/* Let's work together to help grow your business.  */}
                            <br/><br/>
                            <p>If you work with us, your website will:</p>
                            <br/><br/>
                            <p><strong>Be unique</strong> </p>
                            {/* (Not templated using Wordpress or Shopify themes) */}
                            <p>
                                {/* Our clients want to maintain their own look and branding while having a modern feel.  */}
                            Our clients take pride in having their own brand.
                            We code everything from scratch, writing and rewriting every line of code until it's just right.
                                {/* We do not reproduce templated sites. */}
                            </p>
                            <br/>
                            <p><strong>Communicate your brand</strong></p>
                            <p>Our clients are extremely passionate about their business. We listen carefully and get their message across. We love passionate people and want them to succeed.
                            </p>
                        {/* </FadeIn> */}
                        
                        <div className="minicontact">
                            <hr />
                            <h2>You can contact us directly to get your website built</h2>
                            <div>
                                {/* <FadeIn> */}
                                    <p>Call Jun at: <a href="tel:0220910069">(+64) 0220910069</a></p>
                                    <p>Email us at: <a href="mailto:hello@webbi.co.nz">hello@webbi.co.nz</a></p>
                                {/* </FadeIn> */}
                            </div>
                        </div>
                        {/* around your options and possibilities. */}
                    </div>
                </div>
            </div>
        </div>
    )
}