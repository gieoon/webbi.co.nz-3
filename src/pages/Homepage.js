import React from 'react';
import Top from '../components/Top';
import Title from '../components/Title';
import Intro from '../components/Intro';
import Features from '../components/Features';
import NewWorks from '../components/NewWorks';
import Works from '../components/Works';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Homepage({

}){
    return(
        <div className="Homepage">
            <Title />
            <Top />
            <NewWorks />
            <Intro />
            <Works />
            <About />
            <Features />
            <FAQ />
            <Contact />
        </div>
    )
}