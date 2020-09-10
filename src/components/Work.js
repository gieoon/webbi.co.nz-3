import React from 'react';

export default function Work({
    title,
    subtitle,
    img,
    workUrl,
    companyLogo,
}){
    return(
        <li className="Work">
            <a href={workUrl} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={title} className="thumbnail" />
                <div className="companylogo-wrapper">
                    {/* <img src={companyLogo} alt={title} className="companyLogo" /> */}
                    <span className="title">{title}</span>
                    <span className="subtitle">{subtitle}</span>
                </div>
                {/* <div className="overlay" /> */}
            </a>
        </li>
    )
}