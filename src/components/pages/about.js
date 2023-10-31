import React from "react";
const About = () => {
return ( 
    <>
    <div className="single-room">
        <div className="section-intro">
            <h2 className="section-intro-title">About Us</h2>
        </div>     
    </div> 
    <div className="section" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src={require('./../images/aboutpage.png')} className="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
                <div className="right-text col-lg-6 col-md-12 col-sm-12 mobile-top-fix">
                    <div className="left-heading">
                        <h1 className="why-us">Why<span className="content-text"> Choose </span>us?</h1>
                        <div className="main-heading-domain-border-1 text-center">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="left-text">
                        <p>Quotus Software Solutions Private Limited is a software product developing company where we endeavor on highly proficient, propitious and cost-effective software products. Quotus have highly skilled personnel's offering software products using the best innovative minds, skills and using cutting-edge technologies.<br/><br/> Quotus aspire to provide software solutions to all those are not having a digital presence. In a short period, Quotus Software Solutions Private Limited has developed a business relationship with reputed clients all over India.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="section" id="our-classes">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-lg-3">
                <div className="classes">
                    <h1 className="why-us">Work<span className="content-text"> Flow</span></h1>
                        <div className="main-heading-domain-border-1 text-center">
                            <div></div>
                            <div></div>
                        </div>
                        <img src="./../images/about-pic.f975e7e9.png" alt=""/>
                    <p>Our workflow is inclusive for all, from conceptualization to post production we follow an agile and iterative development approach to provide you with solutions that will boost your business development.</p>
                </div>
            </div>
        </div>
        <div className="row" id="tabs">
            <div className="col-lg-5">
                <ul>
                    <li><span><img className="our-plan" src={require('./../images/strategy.png')} alt=""/>Strategy & Planning</span></li>
                    <li><span><img className="our-plan" src={require('./../images/ui-design.png')} alt=""/>Website Designing</span></li>
                    <li><span><img className="our-plan" src={require('./../images/agile.png')}  alt=""/>Development</span></li>
                    <li><span><img className="our-plan" src={require('./../images/test.png')} alt="" />Manual Testing</span></li>
                    <li><span><img className="our-plan" src={require('./../images/success1.png')} alt=""/>Successful Result</span></li>
                </ul>
            </div>
            <div className="col-lg-7">
                <div className='tabs-content'>
                    <div id='tabs-1' className="paging">
                        <img src={require('./../images/about-pic.f975e7e9.png')} alt="" style={{ padding: '50px' }}/>
                    </div> 
                </div>
            </div>  
        </div>
    </div> 
    </div>
    </>
  );
};
export default About; 