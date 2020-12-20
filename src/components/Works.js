import React from 'react';
import Work from './Work';

// Works
import justsayheyy from '../assets/works/justsayheyy.png';
import imhired from '../assets/works/imhired.png';
import nzcovid19live from '../assets/works/nzcovid19live.png'; 
import covid19live from '../assets/works/covid19live.png';
import jsignal from '../assets/works/j-signal2.png';
import nzcommute from '../assets/works/nzcommute.png';
import ohmyperson  from '../assets/works/ohmyperson.png';
import processhub  from '../assets/works/processhub.png';
import reeftonhideaway  from '../assets/works/reeftonhideaway.png';
import whowrotethistext from '../assets/works/whowrotethistext.png';

export default function Works({

}){
    return(
        <div 
            //id="ourwork" 
            className="Works">
            <h2>More Works</h2>
            <p className="works-subtitle">Websites in Social Media, Hospitality, Signup/Landing pages, Data Visualization, and AI.</p>
            <div className="container">
                <ul>
                    {
                        WORKS.map((work, i) => (
                            <Work key={"works-"+i}
                                title={work.title}
                                subtitle={work.subtitle}
                                img={work.img}
                                workUrl={work.url}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

const WORKS = [
    {
        title: "Hired!",
        subtitle: "Recruitment concept targeting recent regional graduates.",
        img: imhired,
        url: "https://imhired.co.nz"
    },
    {
        title: "Just Say Heyy",
        subtitle: "Signup page to help users meet people.",
        img: justsayheyy,
        url: "https://justsayheyy.com"
    },
    {
        title: "Reefton Hideaway",
        subtitle: "Accomodation on New Zealand's West Coast.",
        img: reeftonhideaway,
        url: "https://reeftonhideaway.com",

    },
    {
        title: "NZ COVID19 Visualization",
        subtitle: "Visualizing COVID19 in New Zealand.",
        img: nzcovid19live,
        url: "https://nz.covid19live.com"
    },
    {
        title: "Global COVID19 Visualization",
        subtitle: "Visualizing COVID19 in across the globe.",
        img: covid19live,
        url: "https://covid19live.com"
    },
    {
        title: "J-Signal",
        subtitle: "Geolocation website mapping out client locations for safety.",
        img: jsignal,
        url: "https://jtb-newzealand.com/jun"
    },
    {
        title: "NZ Commuter Visualization",
        subtitle: "Map solution visualizing Kiwi's commutes.",
        img: nzcommute,
        url: "https://nzcommute.com"
    },
    {
        title: "Oh My Person",
        subtitle: "Dating site with no pictures",
        img: ohmyperson,
        url: "https://ohmyperson.com"
    },
    {
        title: "ProcessHub",
        subtitle: "Landing Page for Chrome Extension automating online tasks.",
        img: processhub,
        url: "https://process-hub.com"
    },
    {
        title: "Who Wrote This Text",
        subtitle: "Can you discern which text was written by a human?",
        img: whowrotethistext,
        url: "https://whowrotethistext.com"
    }
]
