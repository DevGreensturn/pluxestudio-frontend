import React from 'react';
import Header from './../Common/Header3';
import FooterMain from './../Common/Footer4';
import Banner from './../Elements/Banner';
import Services1 from './../Elements/Services1';
import WhatWeDo6 from './../Elements/WhatWeDo6';
import Services7 from './../Elements/Services7';
import FooterSection from './../Common/FooterSection';

var bnrimg = require('./../../images/banner/6.jpg');

export default function Services() {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner 
          title="Our Services" 
          pagename="Services" 
          description="Comprehensive interior design solutions that transform spaces into extraordinary experiences, blending luxury with sustainability." 
          bgimage={bnrimg} 
        />
        <Services1 />
        <WhatWeDo6 />
        <Services7 />
      </div>
      <FooterMain id="Contact" />
      <FooterSection />
    </>
  );
}
