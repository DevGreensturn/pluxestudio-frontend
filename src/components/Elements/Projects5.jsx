import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Bedroom", filter: ".cat-1" },
    { label: "Kitchen", filter: ".cat-2" },
    { label: "Living", filter: ".cat-3" },
    { label: "Bath", filter: ".cat-4" },
      { label: "Landscape", filter: ".cat-5" },
        { label: "Commerical", filter: ".cat-6" }
];

const projects = [
    {
        image: require('./../../images/projects/portrait/1.jpg'),
        title: 'Life style building',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/square/1.jpg'),
        title: 'Modern Bathroom',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/square/2.jpg'),
        title: 'Dream House',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/portrait/2.jpg'),
        title: 'Bellevue Projects',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/square/3.jpg'),
        title: 'Modish Interior',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/square/4.jpg'),
        title: 'Chair',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/portrait/3.jpg'),
        title: 'Dream Home',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/square/5.jpg'),
        title: 'Vilters',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/square/6.jpg'),
        title: 'Modern Bathroom',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/projects/portrait/4.jpg'),
        title: 'Queens Museum',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/square/7.jpg'),
        title: 'Life style building',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/projects/square/8.jpg'),
        title: 'Dream House',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/6.jpg'),
        title: 'Hotel Shears',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/projects/square/9.jpg'),
        title: 'Life style building',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/square/10.jpg'),
        title: 'Life style building',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/7.jpg'),
        title: 'Hotel Shears',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/square/11.jpg'),
        title: 'Life style building',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/projects/square/12.jpg'),
        title: 'Life style building',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/projects/portrait/8.jpg'),
        title: 'Hotel Shears',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/square/13.jpg'),
        title: 'Life style building',
        filter: 'cat-6'
    },
    {
        image: require('./../../images/projects/square/14.jpg'),
        title: 'Life style building',
        filter: 'cat-6'
    }
];


var bgimg1 = require('./../../images/background/cross-line2.png');
var bgimg2 = require('./../../images/background/cross-line.png');

class Projects5 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };
    render() {
        return (
            <>
                <div className="section-full p-tb80 column-grid-4 inner-page-padding">
                        {/* GALLERY CONTENT START */}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">All Projects</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* Filter Nav START */}
                            <div className="filter-wrap p-b30 text-center">
                                <ul className="filter-navigation masonry-filter clearfix">
                                    <li className="active"><NavLink to={"#"} className="btn from-top" data-filter="*" data-hover="All">All</NavLink></li>
                                    {filters.map((item, index) => (
                                        <li key={index}><NavLink to={"#"} className="btn from-top" data-filter={item.filter} >{item.label}</NavLink></li>
                                    ))}
                                </ul>
                            </div>
                            {/* Filter Nav END */}
                            {/* GALLERY CONTENT START */}
                            <ul id="load-more-item-5" className="masonry-outer mfp-gallery work-grid row clearfix list-unstyled grid-5">
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-12 m-b30`}>
                                        <div className="project-mas hover-shadow">
                                            <div className="image-effect-one">
                                                <img src={item.image} alt="" />
                                                <div className="figcaption">
                                                    <a className="mfp-link" href={item.image}>
                                                        <i className="fa fa-arrows-alt" />
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <div className="project-info p-a20 bg-gray">
                                                <h4 className="sx-tilte m-tb0"><NavLink to={"/project-detail1"}>{item.title}</NavLink></h4>
                                                <NavLink to={"#"}><i className="link-plus bg-primary" /></NavLink>
                                            </div> */}
                                        </div>
                                    </div>
                                ))}
                            </ul>
                            {/* GALLERY CONTENT END */}
                            <div className="text-center load-more-btn-outer" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                <button id="loadMorebtn-5" className="site-button-secondry btn-half"><span>Enquire Now</span></button>
                            </div>
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
            </>
        );
    }
};

export default Projects5;