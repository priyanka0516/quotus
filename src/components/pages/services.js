import React from "react";
const Service = () => {
  return (
    <>   
     <div className="single-room">
      <div className="section-intro">
        <h2 className="section-intro-title">Services</h2>
      </div>     
    </div>   
    <div className="section" id="call-to-action">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="cta-content">
                        <h2>Don’t <em>think</em>, begin <em>today</em>!</h2>
                        <p>Quotus Software Solutons, that has been offering best IT services to you. At Quotus, we go beyond helping businesses transform through technology. We help them make a meaningful difference; to their customers, and to the communities they serve.</p>
                        {/* <div className="main-button scroll-to-section">
                            <button className="bt-service">Become a member</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="languages">
    <div className="container">
      <div className="row">
            <h2>Our Technologies</h2>
            
        <div className="col-md-3 col-sm-6 text-center">
        <div className="languages-items">
          <div className="icon-wrapper">
          <img src={require('./../images/react-icon.png')} alt="service1"/>
          </div>
          <div className="project-name">
            <p>React</p>
          </div>
        </div>
        <div className="languages-items">
          <div className="icon-wrapper">
          <img src={require('./../images/html.png')} alt="service1"/>
          </div>
          <div className="project-name">
            <p>UI/UX</p>
          </div>
        </div>
       </div>
  <div className="col-md-3 col-sm-6 text-center">
  <div className="languages-items">
    <div className="icon-wrapper">
    <img src={require('./../images/machine-learnings.png')} alt="ml"/><br/>
    </div>
    <div className="project-name">
      <p>ML</p>
    </div>
  </div>
  <div className="languages-items">
    <div className="icon-wrapper">
    <img src={require('./../images/ai.png')} alt="ai"/><br/>
    </div>
    <div className="project-name">
      <p>AI</p>
    </div>
  </div>
  </div>
  <div className="col-md-3 col-sm-6 text-center">
  <div className="languages-items">
    <div className="icon-wrapper">
    <img src={require('./../images/blockchain2.png')} alt="blockchain"/><br/>
    </div>
    <div className="project-name">
      <p>BlockChain</p>
    </div>
  </div>  
  <div className="languages-items">
    <div className="icon-wrapper">
    <img src={require('./../images/java-logo.png')} alt="java"/><br/>
    </div>
    <div className="project-name">
      <p>Java</p>
    </div>
  </div>  
  </div>
  <div className="col-md-3 col-sm-6 text-center">
  <div className="languages-items">
    <div className="icon-wrapper">
    <img src={require('./../images/web-30.png')} alt="web"/><br/>
    </div>
    <div className="project-name">
      <p>Web 3.0</p>
    </div>
  </div>  
  <div className="languages-items">
    <div className="icon-wrapper">
    <img src={require('./../images/android.png')} alt="android"/><br/>
    </div>
    <div className="project-name">
      <p>Android</p>
    </div>
  </div>  
  </div>
  </div>
</div>
    </div>
  <div id="inner-services">
      <div className="container">
      <div className="header">
            <h1 className="inner-service-heading">Services We Are Offering</h1>
                  <div className="main-heading-domain-border-1 text-center">
        <div></div>
        <div></div>
      </div>
  </div>
  <div className="row1-container">
    <div className="box box-down cyan">
      <h2 className="inner-heading">UI/UX Designing</h2>
      <p className="inn-heading">We develop dynamic websites that help you connect with your customers.</p>
      <img className="box-img" src={require('./../images/design.png')} alt="design"/>
    </div>
    <div className="box red">
      <h2 className="inner-heading">Web Development</h2>
      <p className="inn-heading">We will help you develop the best web application.</p>
      <img className="box-img" src={require('./../images/coding.png')} alt="coding"/>
    </div>
        <div className="box box-down blue">
          <h2 className="inner-heading">Mobile Development</h2>
          <p className="inn-heading">we provide our clients with top-class Mobile App development services.</p>
          <img className="box-img" src={require('./../images/app-development.png')} alt="app-development"/>
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2 className="inner-heading">BlockChain</h2>
          <p className="inn-heading">We are a blockchain dapps company India provides a decentralized secure application for client</p>
          <img className="box-img" src="https://assets.codepen.io/2301174/icon-karma.svg" alt="www"/>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};
  
export default Service;