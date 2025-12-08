import React from 'react';
import Header from './../Common/Header3';
import FooterMain from './../Common/Footer4';
import Banner from './../Elements/Banner';
import FooterSection from './../Common/FooterSection';
import NriSection from './../Elements/NriSection';



var bnrimg = '/assets/media/images/NRI_Global.jpg';

export default function GlobalNRI() {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner 
          title="Designing Homes Across the World" 
          pagename="NRI" 
          description="Pluxe Studio offers a seamless, luxury-first online design experience for global clients. Our work spans Dubai, London, Singapore, and beyond — delivering sophisticated interiors that blend global trends with personal comfort." 
          bgimage={bnrimg} 
        />
        <div>
            <NriSection />
        </div>
      </div>
      <FooterMain id="Contact" />
      <FooterSection />
    </>
  );
}
