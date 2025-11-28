import React from 'react'

export default function AboutCore() {
    const values = [
        {
            icon: 'flaticon-sketch',
            title: 'Innovation',
            description: 'Pushing boundaries with cutting-edge design solutions and creative approaches that transform spaces.'
        },
        {
            icon: 'flaticon-stairs',
            title: 'Excellence',
            description: 'Uncompromising quality in every detail, from concept to execution, ensuring perfection in every project.'
        },
        {
            icon: 'flaticon-window',
            title: 'Sustainability',
            description: 'Eco-conscious design practices that create beautiful spaces while respecting our environment.'
        },
        {
            icon: 'flaticon-door',
            title: 'Client Focus',
            description: 'Your vision is our mission. We listen, understand, and deliver spaces that reflect your unique style.'
        }
    ];


    
    var bgimg1 = require('./../../images/background/cross-line2.png');
    var bgimg2 = require('./../../images/background/bg-4.png');


  return (
    <div>
          <div className="section-full mobile-page-padding p-t80 p-b80 bg-white" style={{ backgroundImage: 'url(' + bgimg2 + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom left' }}>
                    <div className="container">
                        <div className="section-head text-center">
                            <div className="sx-separator-outer separator-center">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                <h3 style={{ border: 'none' , padding:"10px", }} className="">What Makes Us Different</h3>
                                </div>
                            </div>
                        </div>
                        <div className="section-content m-t50">
                            <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {values.map((item, index) => (
                                    <div className="col-lg-3 col-md-6 col-sm-12 m-b30" key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div className="sx-icon-box-wraper icon-count-2-outer" style={{ height: '100%' }}>
                                            <div className="icon-count-2 bg-white" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                                <div className="icon-xl inline-icon m-b15 scale-in-center">
                                                    <span className="icon-cell"><i className={item.icon} /></span>
                                                </div>
                                                <div className="icon-content" style={{ flex: 1 }}>
                                                    <h4 className="sx-tilte">{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
