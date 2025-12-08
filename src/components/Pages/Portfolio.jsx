import React from 'react';
import Header from './../Common/Header3';
import FooterMain from './../Common/Footer4';
import Banner from './../Elements/Banner';
import FooterSection from './../Common/FooterSection';
import PortfolioSections from './../Elements/PortfolioSections';



var bnrimg = '/assets/media/images/delhi_villa.jpg';

export default function Portfolio() {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner 
          title="Our Work" 
          pagename="Portfolio" 
          description="A curated showcase of refined, contemporary interiors — from real homes to global concept spaces — designed with intention, craftsmanship, and elegance." 
          bgimage={bnrimg} 
        />
        <PortfolioSections />
        </div>
        <FooterMain id="Contact" />
        <FooterSection />
      </>
    );
  }
