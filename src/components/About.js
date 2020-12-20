import React from 'react';

export default function About({

}){
    return(
        <div id="about" className="About">
            <div className="container">
                <div className="spacer"><hr/></div>
                <h2>About us</h2>
                <p>
                    We're a web design & development studio located in Nelson on New Zealand's South Island. 
                    We're grateful to live in the sunniest place in New Zealand, but it sure makes it hard to stay coding indoors when it's so beautiful outside.
                    {/* and in 2019 experienced over 2500 hours of sunshine. */}

                    <br/><br/>
                    We're comfortable with a variety of technologies and can come up with a design for just about anything. Let us update your website, add a blog page, or create a new brand for your business.
                    {/* Get in touch with us for a quick discussion on what you're after */}
                    {/* Let's work together to help grow your business.  */}
                    <br/><br/>
                    If you work with us, your website will:
                    <br/><br/>
                    <p><strong>Be unique</strong> </p>
                    {/* (Not templated using Wordpress or Shopify themes) */}
                    <p>Our clients want to maintain their own look and branding while having a modern feel. 
                    We code everything from scratch, writing and rewriting every line of code until it's just right.
                        We do not reproduce templated sites.
                    </p>
                    <br/>
                    <p><strong>Communicate your message clearly</strong></p>
                    <p>Our clients are extremely passionate about their business. We listen carefully and try to get their message across because we love passionate people and want them to succeed.
                    </p>
                    
                     {/* around your options and possibilities. */}
                </p>
            </div>
        </div>
    )
}