import React from "react";
import './style.css';
import './responsive.css';
import Slider from 'react-slick';
const Home = () => {
   var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 1
    
  // };

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
                
            <p>Quotus Software Solutions Private Limited is a software product
            developing company where we endeavor on highly proficient,
            propitious and cost-effective software products. Quotus have highly
            skilled personnel's offering software products using the best
            innovative minds, skills and using cutting-edge technologies.</p><br/> 
            <p> Quotus aspire to provide software solutions to all those are not
            having a digital presence. In a short period, Quotus Software
            Solutions Private Limited has developed a business relationship
            with reputed clients all over India.</p>
	        </div>
          <div className="card item2"><h2>Mobile Development</h2></div>
          <div className="card item3"><h2>Machine Learning / AI</h2></div>
          <div className="card item4"><h2>DataScience</h2></div>
          <div className="card item5"><h2>Web 3.0 Development</h2></div>
          <div className="card item7"><h2>Python</h2></div>
          <div className="card item8"><h2>Website Designing</h2></div>
          <div className="card item9"><h2>IOT</h2></div>
          <div className="card item10"><h2>MERN</h2></div>
          <div className="card item11"><h2>BlockChain Development</h2></div> 
        </div> 
      </div>
    </div>
    <div className="h-trustedcmpny trustedcmpny">
    <div className="container"data-aos="fade-up">  
      <div className="row"><div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div className="section-heads">  <h3>Quotus<span className="content-text"> Timeline</span></h3></div></div></div>
      <div className="main-heading-domain-border-1 text-center">
        <div></div>
        <div></div>
            </div>
      <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-4">
          <img src={require('./../assets/year1.png')} alt="banner-back"/>
          <h2 className="counter-value" id="million" data-count="5">An overview of Quotus</h2>
          <p>Company was commenced to
            understand the strategic
            challenges acquired to solve it.<br/></p>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4">
          <img src={require('./../assets/year2.png')} alt="banner-back"/>
          <h2 className="counter-value"id="million"data-count="1000">Value the Company</h2>
          <p>Company is highly skilled personnel's offering the best innovative minds, skills and using cutting-edge technologies.</p>   
        </div>
         <div className="col-md-4 col-sm-4 col-xs-4">
         <img src={require('./../assets/year3.png')} alt="banner-back"/>
          <h2 className="counter-value"id="million"data-count="800">Roadmap for Future</h2>
          <p>Quotus intents to perceive the
            customer's requirements and
            expectations and deliver the
            software products which are
            prerequisite tools for their growth.
          </p>
        </div>    
      </div>
    </div>
    </div>
    <div className='all-service'>
    <div className="leverage_left"><img src={require('./../images/lev.png')}alt="Mobile-App-Development-Services"/></div>
      <div className='container'>
        <div className="row"><div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div className="section-heads">  <h3>Our<span className="content-text"> Technologies</span></h3></div></div></div>
          <div className="main-heading-domain-border-1 text-center">
            <div></div>
            <div></div>
          </div>
        <div className='row keyfeature-card-row'>
        <div className='col-lg-3 col-md-6'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/java.png')} alt="service1"/></div><h4>Java</h4><p>Our Java development team
            commenced many projects
            to develop & manage
            various applications</p>
        </div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/python.png')}  alt="service2"/></div><h4>Python</h4><p>Our Team makes the entire
            software development flow,
            from business analysis and
            planning to integrate Python
            with cloud services [AWS].</p></div>
        </div>
        <div className='col-lg-3 col-md-6'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/blockchain-logo.png')}  alt="service3"/></div><h4>BlockChain</h4><p>Our dApp development team
            can help businesses stay on
            the competitive edge in the
            decentralized applications.</p></div>
          </div>
        <div className='col-lg-3 col-md-6'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/science.png')}  alt="service4"/></div><h4>React Native</h4><p>React Native lets you create truly native apps & doesn't compromise your user's experiences that map directly to the platform’s native UI building blocks.</p></div>
          </div>
        <div className='col-lg-3 col-md-6'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/MERN-logo.png')}  alt="service5" style={{width:'165px'}}/></div><h4>MERN</h4><p>Quotus provides Web UI/UX
              development services Odisha
              is the first choice for our cust
              omers. Our creation and inno
              vative ideas to boost the effic
              iency and productivity.</p></div>
          </div>
        <div className='col-lg-3 col-md-6'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/iot.png')}  alt="service6"/></div><h4>IOT</h4><p>Quotus team is one of the
              most exciting developments
              in recent times. It will impact
              all our lives and revolutionize
              the way we interact with the
              world.</p></div>
              </div>
        <div className='col-lg-3 col-md-6'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/coding1.png')}  alt="service5"/></div><h4>AI/ML</h4><p>
            Quotus team implements
            analytics, experimentation
            and ML feature engineering
            and also execute data from
            internet-enabled devices,
            sensors, web platforms.</p></div>
              </div>
        <div className='col-lg-3 col-md-6'>
          <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/flutter.png')} style={{width:'50px'}} alt="service5"/></div><h4>Flutter</h4><p>
            We provides advanced devel
            opment apps to our clients.
            Our expert developers prese
            nt innovative ideas for creati
            ng an innovative application.
            </p></div>
          </div>
        </div>
      </div>
    </div>

        <div className="mission-area">
           <div className='container'>
            <div className='row'>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 aos-init aos-animate">
                <div className="technology1">
                            <div className="impactIcon">
                              <img src={require('./../images/target.png')}  id="tech-logo"  alt="java"/>
                            </div>
                            <h3>Our Mission</h3>
                            <p className="paragraph">Quotus want to provide every business a digital platform
                              hence growth by using our innovation, ideas, creativity and
                              technology. Quotus will create a change for the technically
                              unprivileged Businesses in the meantime help them achieve a
                              global presence. We believe in the value and opportunities
                              available for us and our esteemed customers. Quotus intents to
                              perceive the customer's requirements and expectations and
                              deliver the software products which are prerequisite tools for
                              their growth</p>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 aos-init aos-animate">
                        <div className="technology1">
                            <div className="impactIcon">
                            <img src={require('./../images/vision.png')}  id="tech-logo" alt="python"/>
                            </div>
                            <h3>Our Vision</h3>
                            <p className="paragraph">To Adding Value to Enterprises by providing innovative
                            software products. Quotus Software Solutions is one of the
                            prominent software product developing companies that
                            helps in promoting other enterprises to transform them into
                            digitally-enabled businesses. Quotus clearly perceives the
                            landscape of different kind of customers. So Quotus sourcing
                            methodology encompasses a clear solution especially
                            crafted to address the customer requirements and solve
                            their problems.</p>
                        </div>
                        </div>
            </div>
        </div>
        </div>  
        <div id="clients" className="wow fadeInUp">
          <div className="container">
            <div className="row"><div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div className="section-heads">  <h3>Our<span className="content-text"> Clients</span></h3></div></div></div>
              <div className="main-heading-domain-border-1 text-center">
                <div></div>
                <div></div>
              </div>
            <header className="section-header">
            <Slider {...settings}>
              <div className="">
                <img src={require('./../images/odisha.png')} alt="ohodisha_logo"/>
              </div>
              <div>
                <img src={require('./../images/Cloud10.png')}alt="cloud10_logo"/>
              </div>
              <div>
                <img src={require('./../images/bima_logo.png')}alt="bima_logo"/>
              </div>
              <div>
                <img src={require('./../images/cardano-black.png')} alt="cardano_logo"/>
              </div>
              <div>
                <img src={require('./../images/erevmart.png')} alt="rex_logo"/>
              </div>
              <div>
                <img src={require('./../images/cycle_logo.png')} alt="cycleworld_logo"/>
              </div>
              <div>
                <img src={require('./../images/uirtus.png')} alt="uirtus_logo"/>
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
                <h2 className="uuu">Client <span className="content-text">Based</span> Countries</h2>
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