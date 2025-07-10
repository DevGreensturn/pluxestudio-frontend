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



class Home6 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider6 />
                    <About1 />
                    <Statistics1 />
                    <WhatWeDo1 />
                    <SimilarProjects alignment="separator-center" title="Similar Project" />
                    <Projects5 />
                    
                    <Services1 />
                    <ClientsLogo2 bgcolor="bg-white" />

                    <Testimonials2 separatoralignment="separator-center" />
                    <Faq />
                </div>

                <FooterMain />
            </>
        );
    };
};

export default Home6;