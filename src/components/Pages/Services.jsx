import React from 'react';
import Header from './../Common/Header3';
import FooterMain from './../Common/Footer4';
import Banner from './../Elements/Banner';
import Services1 from './../Elements/Services1';
import WhatWeDo6 from './../Elements/WhatWeDo6';
import Services7 from './../Elements/Services7';
import FooterSection from './../Common/FooterSection';
import ServiceDetailSection from './../Elements/ServiceDetailSection';


var bnrimg = '/assets/media/images/services.jpg';

export default function Services() {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner 
          title="Our Services" 
          pagename="Services" 
          description="At Pluxe Studio, we offer a curated suite of luxury interior design services that combine refined aesthetics, modern functionality, and exceptional craftsmanship. Each project is tailored to create a harmonious, elegant, and personalised living experience." 
          bgimage={bnrimg} 
        />
     <ServiceDetailSection />
        {/* <Services1 />
        <WhatWeDo6 />
        <Services7 /> */}
      </div>
      {/* <FooterMain id="Contact" />
      <FooterSection /> */}
    </>
  );
}
