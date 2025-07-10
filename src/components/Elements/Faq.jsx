import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

class Faq extends React.Component {
    render() {
        return (
            <>
                        <div className="container">
                            <div className="faq-1">
                                {/* TITLE START */}
                                <div className="section-head">
                                    <div className="sx-separator-outer separator-left">
                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                            <h3 className="sep-line-one">FAQ</h3>
                                        </div>
                                    </div>
            <div className="sx-accordion acc-bg-gray" id="accordion5">
                                            <div className="panel sx-panel">
                                                <div className="acod-head acc-actives">
                                                    <h4 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                            How do we work?
                                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne5" className="acod-body collapse show">
                                                    <div className="acod-content p-a15">
                                                        <p>Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel sx-panel">
                                                <div className="acod-head">
                                                    <h4 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                            What services do we offer?
                                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseTwo5" className="acod-body collapse">
                                                    <div className="acod-content p-a15"><p>Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities.</p></div>
                                                </div>
                                            </div>
                                            <div className="panel sx-panel">
                                                <div className="acod-head">
                                                    <h4 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                           Do you have a purchasing fee on the product?
                                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseThree5" className="acod-body collapse">
                                                    <div className="acod-content p-a15"><p>Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities.</p></div>
                                                </div>
                                            </div>
                                            <div className="panel sx-panel">
                                                <div className="acod-head">
                                                    <h4 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseFour5" className="collapsed" data-parent="#accordion5">
                                                            How long will it take to to design and build my project?
                                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseFour5" className="acod-body collapse">
                                                    <div className="acod-content p-a15"><p>Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities..</p></div>
                                                </div>
                                            </div>
                                            <div className="panel sx-panel">
                                                <div className="acod-head">
                                                    <h4 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseFive5" className="collapsed" data-parent="#accordion5">
                                                            What should I have at our first meeting for my project?
                                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseFive5" className="acod-body collapse">
                                                    <div className="acod-content p-a15">
                                                    <p>Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
            </>
        )}}

        export default Faq;