import React from 'react';

const HeaderBanner = () => {
    return (
   
        
            <div style={{ backgroundColor: '#e8d7cb', height: '32px', display: 'flex', alignItems: 'center' }}>
                <marquee behavior="scroll" direction="left" scrollamount="10" className=" tracking-wide">
                   <h6 style={{ fontSize: '15px', fontWeight: 400, margin: 0, lineHeight: '32px' }}>Serving Clients Across INDIA, UAE, UK </h6>
                </marquee>
            </div>
        
    );
};

export default HeaderBanner;
