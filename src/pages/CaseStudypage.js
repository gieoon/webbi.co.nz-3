import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import bush_and_beyond from '../assets/works/bush_and_beyond.png';
import bush_and_beyond_b4 from '../assets/works/bush_and_beyond_b4.png';
import historinz from '../assets/works/historinz.png';
import historinz_b4 from '../assets/works/historinz_b4.png';
import resolve from '../assets/works/resolve.png';
import ScrollTo from '../components/ScrollTo';
import {GApageView} from '../analytics';

export default function CaseStudypage({

}){
    const {projectName} = useParams();

    useEffect(()=>{
        GApageView("case-study/" + projectName);
    }, []);

    const obj = LIVE_URLS[projectName];
    return(
        <>{
            LIVE_URLS[projectName]
            ? <div className="CaseStudypage container">
                <h2>{obj.projectName}</h2>
                <div className="details">
                    <div dangerouslySetInnerHTML={{__html: obj.description}}></div>
                    <div className="before-after">
                        <div className="header">
                            <p className="before">Before</p>
                            <p className="after">After</p>
                        </div>
                        <div className="contents">
                            <div className={!obj.beforeImg.length ? "blank" : ""}>
                                <p className="before">Before</p>
                                <img src={obj.beforeImg} alt="" />
                            </div>
                            <div>
                                <p className="after">After</p>
                                <img src={obj.img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="visit-site-btn">
                        <a href={obj.url} target="_blank" rel="noreferer noopener">View Live Website</a>
                    </div>

                    <div className="other-case-studies">
                        <h2>More case studies</h2>
                        {
                            (Object.keys(LIVE_URLS).filter((k) => k !== projectName)).map((item, i) => (
                                <div key={"project-"+i} className="link">
                                    <a href={LIVE_URLS[item].localUrl}>{LIVE_URLS[item].projectName}</a>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
                <ScrollTo />
            </div>
            : <></>
        }
        </>
    )
}

const LIVE_URLS = {
    resolve: {
        url: "https://freelance-resolve-finance.web.app",
        localUrl: "/case-studies/resolve",
        description: "<p>Resolve Financial was running their business without a website, just an email address. We worked closely to solidify a brand image as well as communicate their important ideas of financial freedom and safety across to visitors of varying age groups and financial situations.</p><br/><br/><p>Given a preferred colour, we designed a logo, implemented a font, as well as coded transitions that would suit the overall theme and feel of the website.</p>",
        completed: ["logo", "theme", "font", "design"],
        img: resolve,
        beforeImg: "",
        projectName: "Resolve Finanical"
    },
    historinz: {
        url: "https://historinz.co.nz",
        localUrl: "/case-studies/historinz",
        description: "<p>Historinz already had a live website but they wanted a more modern look. They needed to be able to make regular updates to add news feeds and publications. We included a CMS to allow them to add and edit their content whenever they needed.<br/><br/>We also created a logo and used a cute cursive font that felt like it was handwritten. We also experimented with different ways of presenting information, including what kind of copywriting to use, and fun interactive ways of presenting the data to visitors.</p>",
        beforeImg: historinz_b4,
        img: historinz,
        projectName: "Historinz"
    },
    "bush-and-beyond": {
        url: "https://freelance-bush-and-beyond.web.app",
        localUrl: "/case-studies/bush-and-beyond",
        description: "<p>Bush & Beyond's existing site was out of date, and they needed something that pulled visitors in convincingly. We used large high resolution images and videos to show the beauty of the scenery. We designed the website and logo with sleek attributes to enhance and complement the images to create a uniform theme.<br/><br/>Short and succinct copywriting was leveraged since online real-estate was so valuable and kept text to a minimum to not distract from the images, yet made visitors feel at ease and excited to experience a new adventure.</p>",
        img: bush_and_beyond,
        beforeImg: bush_and_beyond_b4,
        projectName: "Bush & Beyond"
    },
}