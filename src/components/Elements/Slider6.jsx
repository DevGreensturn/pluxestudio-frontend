import React from 'react';


class Slider6 extends React.Component {
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

        loadScript('./assets/js/rev-script-6.js');

    };
   
    render() {
        return (
            <>
                <style>{`
                    #welcome_wrapper.fullscreen-container {
                        height: 320px !important;
                        max-height: 320px !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        background: transparent !important;
                        overflow: hidden !important;
                    }
                    #slider-video.fullscreenbanner {
                        height: 320px !important;
                        max-height: 320px !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .rev_slider_wrapper {
                        margin: 0 !important;
                        padding: 0 !important;
                        background: transparent !important;
                    }
                    #slider-video_forcefullwidth {
                        height: 320px !important;
                        max-height: 320px !important;
                    }
                    #slider-video_forcefullwidth .tp-fullwidth-forcer {
                        height: 320px !important;
                        max-height: 320px !important;
                    }
                    #slider-video #slide-901-layer-2 {
                        position: absolute !important;
                        top: 50% !important;
                        
                        height: 100% !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    #slide-901-layer-2 > div {
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        text-align: center !important;
                        width: 100% !important;
                        margin:'auto !important'
                    }   
                `}</style>
                    <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{ background: 'transparent', padding: 0, margin: 0, height: '380px', maxHeight: '380px', overflow: 'hidden' }}>
                        <div id="slider-video" className="rev_slider fullscreenbanner" style={{ display: 'none', height: '380px', maxHeight: '380px', margin: 0, padding: 0 }} data-version="5.4.3.1">
                            <ul>
                                {/* SLIDE 1 */}
                                <li data-index="rs-901" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* <img src={require('./../../assets/media/images/video1.jpg')} alt="" data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina style={{ display: 'block' }} /> */}
                                    <div className="rs-background-video-layer" data-forcerewind="on" data-volume="mute" data-videowidth="100%" data-videoheight="100%" data-videomp4="/assets/media/images/kitchen.mp4" data-videopreload="auto" data-videoloop="loop" data-aspectratio="16:9" data-autoplay="true" data-autoplayonlyfirsttime="false" />
                                    {/* LAYERS */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                      {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                      ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.05)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    {/* LAYER NR. 4 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-901-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['54','54','54','34']" data-lineheight="['64','64','64','44']" data-width="['700','700','700','90%']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-typewriter="{&quot;lines&quot;:&quot;Making dreams Come To life , From Concept To Creation&quot;,&quot;enabled&quot;:&quot;on&quot;,&quot;speed&quot;:&quot;200&quot;,&quot;delays&quot;:&quot;1%7C100&quot;,&quot;looped&quot;:&quot;on&quot;,
&quot;cursorType&quot;:&quot;one&quot;,&quot;blinking&quot;:&quot;on&quot;,&quot;word_delay&quot;:&quot;off&quot;,&quot;sequenced&quot;:&quot;on&quot;,&quot;hide_cursor&quot;:&quot;off&quot;,
&quot;start_delay&quot;:&quot;500&quot;,&quot;newline_delay&quot;:&quot;1000&quot;,&quot;deletion_speed&quot;:&quot;20&quot;,&quot;deletion_delay&quot;:&quot;1000&quot;,
&quot;blinking_speed&quot;:&quot;500&quot;,&quot;linebreak_delay&quot;:&quot;60&quot;,&quot;cursor_type&quot;:&quot;one&quot;,&quot;background&quot;:&quot;off&quot;}" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+790&quot;,&quot;speed&quot;:1500,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 600, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                                        {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>Welcome To Pluxe Studio</div> */}
                                    </div>
                                </li>
                            </ul>
                            <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
                        </div>
                    </div>
            </>
        );
    }
};

export default Slider6;