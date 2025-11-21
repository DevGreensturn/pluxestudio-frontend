import React from 'react';

const featuredProjects = [
    {
        image: require('./../../images/projects/square/1.jpg'),
        title: 'Gurugram Villa',
        name: 'Gurugram Villa'
    },
    // {
    //     image: require('./../../'),
    //     title: 'Commercial Gym',
    //     name: 'Commercial GYM'
    // },
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
                            <h3 className="sep-line-one">Featured Project</h3>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <div className="row">
                        {featuredProjects.map((project, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-12 m-b30">
                                <div className="project-mas hover-shadow">
                                    <div className="image-effect-one">
                                        <img src={project.image} alt={project.title} />
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
