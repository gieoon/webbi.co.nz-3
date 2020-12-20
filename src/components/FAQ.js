import React from 'react';
import { HelpCircle } from 'react-feather';
export default function FAQ({

}){
    return(
        <div id="faq" className="FAQ">
            <div className="container">
                <h2>FAQ</h2>
                <div className="row">
                    {/* <div className="col"> */}
                        <FAQObj 
                            q="How long does it take?"
                            a="We typically spend one week on a custom website, but depending on the number of pages and your need for custom functionality, this timeframe may be extended."
                        />
                        <FAQObj 
                            q="What if I need to edit something?"
                            a="Just let us know beforehand, we have an inhouse system that lets you edit any part of your website to keep it up to date."
                        />
                        <FAQObj
                            q="What if all of my clients are local?"
                            a="It pays to have a convincing digital presence to reach new audiences and grow your business even if your operations are based on local sources."
                         />
                    {/* </div> */}
                    {/* <div className="col"> */}
                        {/* <FAQObj 
                            q="What if I need a completely new look?"
                            a="Typically businesses don't need a full overhaul, but if they do, we are able to negotiate a new rate based on the scale of the changes."
                        /> */}
                        {/* <FAQObj
                            q="How much do you cost?"
                            a="Our pricing is competitive. We'll make sure to deliver quality at affordable and reasonable rates."
                        /> */}
                        <FAQObj 
                            q="Do you use templates?"
                            a="Our mission is to create unique websites at affordable rates. This means we do not use templates, and we dedicate a lot of time to making your website a unique experience for visitors."
                        />
                        <FAQObj 
                            q="What do you use to build websites?"
                            a="We use native Javascript frameworks. We try not to rely on Wordpress, Shopify or other Website Builders unless we really have to. This gives us more freedom in customization as well as cutting hosting fees."
                        />
                        <FAQObj
                            q="Why do I need a website?"
                            a="More and more businesses are moving online. It's important that you portray a powerful image to potential clients who find you online. It's also advantageous to move early."
                        />
                    {/* </div> */}
                </div>
                
                <p className="noanswer">Couldn't find your answer? <a href="mailto:hello@webbi.co.nz">Email us</a> directly.</p>
            </div>
        </div>
    )
}

function FAQObj({
    q,
    a,
}){
    return(
        <div>
            <h5>
                <HelpCircle color="rgb(24, 180, 24)" style={{marginBottom:"-4px",marginRight:"10px"}} />
                {q}
            </h5>
            <p>{a}</p>
        </div>
    )
}
