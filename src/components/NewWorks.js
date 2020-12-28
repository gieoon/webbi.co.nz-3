import React from 'react';
import {Link} from 'react-router-dom';
import resolve from '../assets/works/resolve.png';
import historinz from '../assets/works/historinz.png';
import bush_and_beyond from '../assets/works/bush_and_beyond.png'

export default function NewWorks({

}){
    return(
        <div className="NewWorks" id="ourwork">
            <h2>Recent work</h2>
            {/* <p className="header-subtitle">Some businesses in Nelson we helped.</p> */}
            <div className="recent-works">
                {
                    NEW_WORKS.map((work, i) => (
                        <div className="recent-work" key={"new-work-"+i}>
                            <Link to={work.url}>
                            
                                <img src={work.img} alt={work.title} className="thumbnail" />
                                <div className="companylogo-wrapper">
                                    {/* <img src={companyLogo} alt={title} className="companyLogo" /> */}
                                    <span className="title">{work.title}</span>
                                    <span className="subtitle">{work.subtitle}</span>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}

const NEW_WORKS = [
    {
        title: "Resolve Financial",
        subtitle: "Receive pertinent financial advice in Nelson.",
        img: resolve,
        url: "/case-studies/resolve",
    },
    {
        title: "Historinz",
        // subtitle: "Writing histories of people and things in New Zealand as well as a plethora of other editorial and research projects.",
        subtitle: "Histories of people and things in New Zealand.",
        img: historinz,
        url: "/case-studies/historinz"
    },
    {
        title: "Bush & Beyond",
        subtitle: "Guided walks in Kahurangi National Park, at the top of New Zealand's South Island.",
        img: bush_and_beyond,
        url: "/case-studies/bush-and-beyond"
    }
]