import React from "react";
import './style.css';
import './responsive.css';
// import ParticleBackground from "../particleBackground";
// import Particles, { ISourceOptions } from "react-tsparticles";
import Slider from 'react-slick';
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

    return (
        <>
            <div className="banner">
             <div className="container">          
                <div className="row">
                   <div className="col-lg-7 col-12 fr-mb-padding">
                   <h1 className="banner-text-1">We are Experienced <br/><span className="banner-text"></span><br/>For Your Business Success.</h1>
                   </div>
                   <div className="col-lg-5 col-12">       
                    <div className="slide-left">
                    <div className="about_img">
                      <img src={require('./../images/banner-back.png')} alt="banner-back"/>
                      </div>
                      </div>               
                   </div>
                </div>
             </div>         
      </div>
    <div className="second-banner">
    <div className="container">
    <div className="grid">  
	  <div className="content item1">
		<h1>Why<span className="content-text"> us?</span></h1>
		<p>Quotus Software Solutions is an ISO certified software development and web development company based in India.</p>
    <br/> 
    <p>Quotus aspire to provide software solutions to all those are not having a digital presence. In a short period, Quotus Software Solutions Private Limited has developed a business relationship with reputed clients all over India.</p> 
	</div>
	<div className="card item2">
		<h2>Mobile Devlopment</h2>
	</div>
	<div className="card item3">
    <h2>Machine Learning / AI</h2>
  </div>
	<div className="card item4">
  <h2>DataScience</h2>
  </div>
	<div className="card item5">
			<h2>Web 3.0 Developmentt</h2>
	</div>
	<div className="card item7"><h2>Python</h2></div>
	<div className="card item8">
			<h2>Website Designing</h2>
	</div>
	<div className="card item9">
  <h2>IOT</h2>
  </div>
	<div className="card item10">
  <h2>MERN</h2>
  </div>
	<div className="card item11">
		<h2>BlockChain Development</h2>
	</div> 
    </div> 
    </div>
    </div>
    <div className="h-trustedcmpny trustedcmpny">
  <div className="container"  data-aos="fade-up">  
    <h2>Our EXPERTISE IN THIS INDUSTRY</h2>
    <ul id="counter">
      <li>
        <h2 className="counter-value" id="million" data-count="5">5+</h2>
        <p> Development hours in building<br/> innovative & creative products/apps</p>
      </li>
      <li>
        <h2 className="counter-value" id="million"data-count="1000">1000+</h2>
         <p>Websites designed & developed <br/> for rapid busines growth</p>
      </li>
      <li>
        <h2 className="counter-value"id="million" data-count="800">800+</h2>
        <p>Mobile apps built to meet the <br/>ever-changing user behaviour</p>
      </li>
    </ul>
  </div>
    </div>
    <section className="mission">
      <div className="container">
        <div className="row">
          
        </div>
      </div>
    </section>
      <div className="section-bg" id="services">
         <div className="container">  
      <div className="wrapper">
            <div className="row">
            <div className="col-lg-8  text-center">
              <h2 className="uuu">THE SERVICES WE’RE OFFERING</h2>
              <div className="button-jittery" >
              <button className="bt-home"> <a href="#footer">I'm intrested</a></button>
            {/* <div class="name">Subtlety</div> */}
            </div>
            </div>
          <div className="col-6 col-md-2 text-center">
            <div className="rrr">
            {/* <h6>Frontend</h6> */}
          <img src={require('./../images/react-icon.png')} alt="react"/><br/>
          <p>React</p>
          <div className="rrr-y">
          <img src={require('./../images/web-30.png')} alt="web"/><br/>
          <p>Web 3.0</p>       
          </div>
          <div className="rrr-x">
          <img src={require('./../images/android.png')} alt="android"/><br/>
          <p>Android/IOS</p>         
          </div>
          </div>
          </div>
          <div className="col-6 col-md-2 text-center">
          <div className="rrr">
          <img src={require('./../images/blockchain2.png')} alt="blockchain"/><br/> 
          <p>BlockChain</p>
          <div className="rrr-y">
          <img src={require('./../images/machine-learnings.png')} alt="ml"/><br/>
          <p>AI/ML</p>
          </div>
          <div className="rrr-x">
          <img src={require('./../images/java-logo.png')} alt="java"/><br/>
          <p>Java</p>
          </div>
          </div>
          </div>
            </div>
            </div>
         </div>
      </div>  
      <div id="clients" className="wow fadeInUp">
      <div className="container">
        <header className="section-header">
          <h3>Our<span className="content-text">  Clients</span></h3>
        <Slider {...settings}>
          <div className="">
           <img src={require('./../images/odisha.png')} alt="ohodisha_logo"/>
          </div>
          <div>
          <img src={require('./../images/Cloud10.png')}alt="cloud10_logo"/>
          {/* <img src={require('./../images/cloud_black.png')}/> */}
          </div>
          <div>
          <img src={require('./../images/bima_logo.png')}alt="bima_logo"/>
          {/* <img src={require('./../images/bima_black.png')}/> */}
          </div>
          <div>
          <img src={require('./../images/cardano-black.png')} alt="cardano_logo"/>
          </div>
          
          <div>
          <img src={require('./../images/erevmart.png')} alt="rex_logo"/>
          </div>
          <div>
          <img src={require('./../images/cycle_logo.png')} alt="cycleworld_logo"/>
          {/* <img src={require('./../images/cycle_blacklogo.png')}/> */}
          </div>
          <div>
          <img src={require('./../images/uirtus.png')} alt="uirtus_logo"/>
          {/* <img src={require('./../images/uirtus_black.png')}/> */}
          </div>
          <div>
          <img src={require('./../images/jaganath_logo.png')} alt="heriatage_logo"/>
          </div>
        </Slider>
        </header>
      </div>
      </div>         
      <div className="client-area">
      <div className="container">   
      <div className="wrapper">
        <div className="row">
        <div className="col-lg-6  text-center">
            <h2 className="uuu">Client <span className="content-text">bASED</span> cOUNTRIES</h2>
          </div>
        <div className="col-lg-6 text-center">
          <div className="client-area-country">
            <img src={require('./../images/countires.png')} alt="country_logo"/>
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
      </>
    );
}
export default Home;