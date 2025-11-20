import React from 'react';
import Header from './../Common/Header3';
import FooterMain from './../Common/Footer4';
import Slider6 from './../Elements/Slider6';
import WhatWeDo1 from './../Elements/WhatWeDo1';
import Projects5 from './../Elements/Projects5';
import SimilarProjects from './../Elements/SimilarProjects';
import Services3 from './../Elements/Services3';
import Services1 from './../Elements/Services1';
import ClientsLogo2 from './../Elements/ClientsLogo2';
import About1 from './../Elements/About1';
import Statistics1 from './../Elements/Statistics1';
import Testimonials2 from './../Elements/Testimonials2';
import Faq from './../Elements/Faq';
import HeroSection from './../Elements/HeroSection';
import HeaderBanner from './HeaderBanner';
import IntroPage from './IntroPage';
import FooterSection from './../Common/FooterSection';



class Home6 extends React.Component {
    render() {
        return (
            <>
            <HeaderBanner />
                <Header />
                <div className="page-content">
                    <Slider6 id="Home" />
                    <IntroPage />
              
                    <HeroSection />;
                    <About1 id="About" />
                    <Statistics1 />
                    <WhatWeDo1 id="WhatWeDo"/>
                    {/* <SimilarProjects alignment="separator-center" title="Similar Project"  id="Projects"/> */}
                    <Projects5  />
                    
                    <Services1 />
                    {/* <ClientsLogo2 bgcolor="bg-white" /> */}

                    <Testimonials2 separatoralignment="separator-center" />
                    <Faq Id="Faq" />
                 
                    
                   
                </div>

                <FooterMain id="Contact" />
                <FooterSection />
            </>
        );
    };
};

export default Home6;