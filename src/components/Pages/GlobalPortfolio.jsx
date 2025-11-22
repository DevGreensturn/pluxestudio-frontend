import React from 'react';

const featuredProjects = [
    {
        image: require('./../../images/projects/square/1.jpg'),
        title: 'Gurugram Villa',
        name: 'Gurugram Villa'
    },
    {
        image: '/assets/media/images/gym-photo.jpg',
        title: 'Commercial Gym',
        name: 'Commercial GYM'
    },
    {
        image: require('./../../images/projects/square/3.jpg'),
        title: 'London Home',
        name: 'London Home'
    },
    {
        image: require('./../../images/projects/square/4.jpg'),
        title: 'Dubai Flat',
        name: 'Dubai Flat'
    }
];

var bgimg1 = require('./../../images/background/cross-line2.png');

export default function GlobalPortfolio() {
    return (
        <div className="section-full mobile-page-padding p-t80" style={{ backgroundColor: '#e7e5e3' }}>
            <div className="container">
                <div className="section-head">
                    <div className="sx-separator-outer separator-center">
                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundColor:'#e7e5e3' }}>
                            <h3 style={{ border: 'none' , padding:"10px"}} className="">Featured Project</h3>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {featuredProjects.map((project, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-12 m-b30" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className="project-mas hover-shadow" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div className="image-effect-one" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <div className="figcaption">
                                            <h4 style={{ fontSize: '20px', marginBottom: '10px', color: '#FFF' }}>{project.title}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-t20 text-center">
                                    <h4 className="m-b0">{project.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
