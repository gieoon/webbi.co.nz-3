import React from 'react';
import {CheckCircle, Check, CheckSquare} from 'react-feather';
import time from '../assets/time.svg';
import rocket from '../assets/rocket.svg';
import different from '../assets/different.svg';
import piggybank from '../assets/piggybank.svg';
import witch from '../assets/witch.svg';
import shield from '../assets/shield.svg';

export default function Features({

}){
    return(
        <div className="Features">
            <h2>Own an integrated solution</h2>
            <h4>Different designs, copywriting, ease of use, security concerns, as well as plans for upscaling.</h4>
            <div className="Features-wrapper">
                <div className="container">
                    <div className="Feature-wrapper">
                        <img src={time} alt="picture of clock" />
                        <div>
                            <h3>Performance</h3>
                            <p>How your site is perceived.</p>
                            <ul>
                                <ListItem text="HTTPS/SSL secure" />
                                <ListItem text="Connecting to a custom domain" />
                                <ListItem text="Proximity hosting via NZ/AUS servers for rapid loading" />
                                <ListItem text="SEO - Analytics of market segments and keywords" />
                            </ul>
                        </div>
                    </div>
                    
                    <div className="Feature-wrapper">
                        <img src={witch} alt="User friendly witch" />
                        <div>
                            <h3>User Friendly</h3>
                            <p>Instantly relay your message</p>
                            <ul>
                                <ListItem text="Enhanced UI/UX experience" />
                                <ListItem text="Easily update/remove content at any time" />
                                <ListItem text="Compliant with modern web development standards" />
                            </ul>
                        </div>
                    </div>
                    <div className="Feature-wrapper">
                        <img src={different} alt="Unique image" />
                        <div>
                            <h3>Unique</h3>
                            <p>Displaying your competitive edge</p>
                            <ul>
                                <ListItem text="In-house custom design" />
                                <ListItem text="Unique digital experience tailored to your business" />
                            </ul>
                        </div>
                    </div>

                    <div className="Feature-wrapper">
                        <img src={shield} alt="Security" />
                        <div>
                            <h3>Security</h3>
                        
                            <p>Managing risks</p>
                            <ul>
                                <ListItem text="Regular backups" />
                                <ListItem text="Revert to a past release" />
                                <ListItem text="Cloudflare surge protection" />
                            </ul>
                        </div>
                    </div>

                    <div className="Feature-wrapper">
                        <img src={rocket} alt="Scaling" />
                        <div>
                            <h3>Scaling</h3>
                            <p>If you need to grow</p>
                            <ul>
                                <ListItem text="Animations &amp; VFX" />
                                <ListItem text="Add a blog page or a shopping cart" />
                                <ListItem text="Database / Server additions in the cloud" />
                                <ListItem text="Machine Learning (Computer vision, Recommender systems, Forecasting, etc)" />
                                <ListItem text="Load Balancing / CDN &amp; handling large traffic" />
                                <ListItem text="Scheduled deployments across multiple regions" />
                            </ul>
                        </div>    
                    </div>                        
                </div>
            </div>
        </div>
    )
}

function ListItem({
    text
}){
    return(
        <li>
            <Check color="rgb(24, 180, 24)" style={{marginBottom:"-7px",marginRight:"6px"}} />
            {text}
        </li>
    )
}