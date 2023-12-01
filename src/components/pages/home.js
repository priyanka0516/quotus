import React, { useEffect } from "react";
import './style.css';
import './responsive.css';
const Home = () => {
  // const navigate = useNavigate();
  // Function to navigate to another page when the button is clicked

    return (
    <>
    <div className="banner1"id="home-company">
      <div className="section-intro">
        <div className="container">          
        <div className="row">
          <div className="col-lg-7 col-12 fr-mb-padding">
            <h1 className="banner-text-1">We are Experienced <br /><span className="banner-text"></span><br />For Your Business Success.</h1>
            <p>Developing company where we endeavor on highly proficient,
            propitious and cost-effective software products. Quotus have highly
            skilled personnel's offering software products using the best
            innovative minds, skills and using cutting-edge technologies.</p>
          </div>
          <div className="col-lg-5 col-12">       
            <div className="about_img">
              <img src={require('./../images/banner.png')} alt="banner-back"/>
            </div>
          </div>
        </div>
      </div>  
    </div>   
    </div>
    <div className="second-banner">
      <div className="container">
        <div className="row">  
          <div className="col-md-12">
            <div className="section-heads"><h3>Why<span className="content-text"> Us?</span></h3></div>
              <div className="main-heading-domain-border-1 text-center"><div></div><div></div></div>  
                  {/* <p style={{padding:'20px 0px'}}>Quotus Software Solutions Private Limited is a software product
                  developing company where we endeavor on highly proficient,
                  propitious and cost-effective software products. Quotus have highly
                  skilled personnel's offering software products using the best
                  innovative minds, skills and using cutting-edge technologies.<br/> 
                  <br/> Quotus aspire to provide software solutions to all those are not
                  having a digital presence. In a short period, Quotus Software
                  Solutions Private Limited has developed a business relationship
                  with reputed clients all over India.</p> */}
              </div>
              <div className="row mt-4">
                <div className="col-md-3">
                  <div className="left-column">
                    <p style={{padding:'20px 0px',color:'#fff'}}>Quotus Software Solutions Private Limited is a software product
                    developing company where we endeavor on highly proficient,
                    propitious and cost-effective software products. Quotus have highly
                    skilled personnel's offering software products using the best
                    innovative minds, skills and using cutting-edge technologies.<br/> 
                    <br/></p> 
                  </div>
                </div>
              <div className="col-md-9">
                <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="boxcard shape-4">
                  <h2>Domain Expertise</h2>
                  <p className="gp">With multiple projects done on Travel, Healthcare, Ecommerce, Utilities and more. We know the trends well.</p>
                  </div>
                </div>
                 <div className="col-lg-4 col-md-4">
                  <div className="boxcard shape-2">
                    <h2>Data Management</h2>
                    <p className="gp">SAP HANA Cloud is a modern database as a service powering the next generation of intelligent data applications.</p>
                  </div>
                </div>
                 <div className="col-lg-4 col-md-4">
                  <div className="boxcard shape-4">
                    <div className="flex-box">
                      <h2>Well Balanced Team</h2>
                      {/* <img src={require('./../images/team1.png')} alt="team1" /> */}
                    </div>
                    <p className="gp">With a deep understanding of the IoT & IIoT ecosystem, we have delivered many successful projects.</p>
                  </div>
                </div>
                 <div className="col-lg-4 col-md-4">
                  <div className="boxcard shape-2">
                    <h2>Workflow</h2>
                    <p className="gp">With regular milestone tracking, reporting & adherence to best project management practices.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="boxcard shape-4">
                     <h2>Spring Integration</h2>
                      <p className="gp">Spring Integration provides a wide selection of channel adapters & gateways to communicate with external systems.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="boxcard shape-2">
                    <h2>We Add Value</h2>
                    <p className="gp">We provide solution to our clients to help them across the life cycle of the organisation.</p>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
               </div> 
            </div>
        </div>
    {/* <div className="h-trustedcmpny trustedcmpny">
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
          <p>Company was commenced to understand the strategic challenges acquired to solve it.<br/></p>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-4">
          <img src={require('./../assets/year2.png')} alt="banner-back"/>
          <h2 className="counter-value"id="million"data-count="1000">Value the Company</h2>
          <p>Company is highly skilled personnel's offering the best innovative minds, skills and using cutting-edge technologies.</p>   
        </div>
         <div className="col-md-4 col-sm-4 col-xs-4">
         <img src={require('./../assets/year3.png')} alt="banner-back"/>
          <h2 className="counter-value"id="million"data-count="800">Roadmap for Future</h2>
          <p>Quotus intents to perceive the customer's requirements and expectations and deliver the software products which are prerequisite tools for their growth.</p>
        </div>    
      </div>
    </div>
    </div> */}
    <section className="h-trustedcmpny trustedcmpny">
      <div className="container">
      <div className="row"><div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div className="section-heads">  <h3>Quotus<span className="content-text"> Timeline</span></h3></div></div></div>
      <div className="main-heading-domain-border-1 text-center">
        <div></div>
        <div></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline5">
            <div className="timeline">
              <div className="timeline-icon"><span className="year">2021</span></div>
                <div className="timeline-content">
                  <h3 className="title">An overview of Quotus</h3>
                    <p className="description">
                      A Company was commenced to understand the strategic challenges acquired to solve your problems. We promise to help you.
                    </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon"><span className="year">2022</span></div>
                  <div className="timeline-content">
                    <h3 className="title">Value the Company</h3>
                    <p className="description">
                      Company is highly skilled personnel's offering the best innovative minds, skills and using cutting-edge technologies.
                    </p>
                  </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon"><span className="year">2023</span></div>
                  <div className="timeline-content">
                    <h3 className="title">Roadmap for Future</h3>
                    <p className="description">
                      Quotus intents to perceive the customer's requirements and expectations and deliver the software products which are prerequisite tools for their growth.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="mission-area">
      <div className='container'>
        <div className='row'>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 aos-init aos-animate">
            <div className="technology1">
              <div className="impactIcon">
                <img src={require('./../images/target.png')} id="tech-logo" alt="java"/>
              </div>
                <h3>Our Mission</h3>
                <p className="paragraph">Quotus want to provide every business a digital platform hence growth by using our innovation, ideas, creativity and technology. Quotus will create a change for the technically unprivileged businesses in the meantime help them achieve a global presence. We believe in the value & opportunities available for us & our esteemed customers. Quotus intents to perceive the customer's requirements & expectations and deliver the software products which are prerequisite tools for their growth.</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 aos-init aos-animate">
            <div className="technology1">
              <div className="impactIcon">
                <img src={require('./../images/vision.png')}  id="tech-logo" alt="python"/>
              </div>
                <h3>Our Vision</h3>
                <p className="paragraph">To Adding Value to Enterprises by providing innovative software products. Quotus Software Solutions is one of the
                prominent software product developing companies that helps in promoting other enterprises to transform them into
                digitally-enabled businesses. Quotus clearly perceives the landscape of different kind of customers. So Quotus sourcing
                methodology encompasses a clear solution especially crafted to address the customer requirements and solve their problems.</p>
            </div>
          </div>
        </div>
        </div>
    </div> 
    <div className='client_logo-block client_logo_block_home1 experties'>
      <div className='container'>
        <div className="row mb-4">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="tech-desc">
              <div className="section-heads">
                <h3 style={{textAlign:'left'}}>Our<span className="content-text"> Technologies</span></h3></div>
                <div className="main-heading-domain-border-1 text-left">
                  <div></div>
                  <div></div>
                </div>
                <p mt-2>Whether you are a startup or an established business, be it a Food Delivery App or Marketplace, be it because of the current market situation or natural business growth, be it “Mobile-only” or “Mobile First”, If you want your app to be developed, We can help you by brainstorming the concept, application requirement and help you bring your thoughts on paper and app.</p>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 ">
            <div className="hexagon our_client"><img src={require('./../assets/android-logo.png')} alt="android" className="img-responsive" /> <span>Android</span> </div>
                <div className="hexagon our_client"><img src={require('./../assets/java-logo.png')} alt="android" className="img-responsive" /> <span>Java</span> </div>
                <div className="hexagon our_client"><img src={require('./../assets/machine-learning.png')} alt="android" className="img-responsive" /> <span>ML</span> </div>
                <div className="hexagon our_client"><img src={require('./../assets/flutter-logo.png')} alt="android" className="img-responsive" /> <span>Flutter</span> </div>
                <div className="hexagon our_client"><img src={require('./../assets/cardano.png')} alt="android" className="img-responsive" /> <span>Cardano</span> </div>
                <div className="hexagon our_client"><img src={require('./../assets/ios-logo.png')} alt="android" className="img-responsive" /> <span>IOS</span> </div>
                <div className="hexagon our_client"><img src={require('./../assets/mern-logo.png')} alt="android" className="img-responsive" /> <span>MERN</span> </div>
                {/* <div className="hexagon our_client "> <img src={require('./../assets/angular-logo.png')} alt="android" class="img-responsive" /> <span>Angular</span> </div> */}
          <div className="secndrow">
            <div className="hexagon our_client"><img src={require('./../assets/Azure-logo.png')} alt="android" class="img-responsive" /><span>Azure</span></div>
          <div className="hexagon our_client"><img src={require('./../assets/spring-logo.png')} alt="android" class="img-responsive" />
            <span>Spring</span>
          </div>
          <div className="hexagon our_client "> <img src={require('./../assets/HTML5-logo.png')} alt="android" class="img-responsive" />
            <span>Html5</span>
          </div>
          <div className="hexagon our_client ">  <img src={require('./../assets/ISO_C_logo.png')} alt="android" class="img-responsive" />
            <span>Web3</span>
          </div>
          <div className="hexagon our_client ">  <img src={require('./../assets/nodejs-logo.png')} alt="android" class="img-responsive" /><span>Node jS</span> </div>
          <div className="hexagon our_client ">  <img src={require('./../assets/PHP-logo.png')} alt="android" className="img-responsive" />
            <span>PHP</span>
          </div>
             <div className="hexagon our_client"><img src={require('./../assets/Python-logo.png')} alt="android" className="img-responsive"/><span>Python</span></div>
        </div>
          {/* <div className="lst-box">
          <div className='row'>     
            <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../assets/cardano.png')} alt="service3"/></div><h4>Cardano</h4></div>
            <div className="keyfeature-card"><div className="box-transparent" ><img src={require('./../assets/java-logo.png')} alt="service1"/></div><h4>Java</h4></div>
            <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/python.png')} alt="service2"/></div><h4>Python</h4></div>   
            <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../assets/React-logo.png')} alt="service4"/></div><h4>React Native</h4></div>
            <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/MERN-logo.png')} alt="service5" style={{ height: '60px' }} /></div><h4>MERN</h4></div>
            <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/iot.png')} alt="service6"/></div><h4>IOT</h4></div>
            <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../images/haskell1.png')} alt="service5"/></div><h4>Haskell</h4> </div>
            <div className="keyfeature-card"><div className="box-transparent"><img src={require('./../assets/machine-learning.png')} alt="service6"/></div><h4>AI/ML</h4></div>
          </div>
          </div> */}    
        <div className=" thrddrow">
          <div className="hexagon our_client "> <img src={require('./../assets/AI.png')} alt="android" className="img-responsive" /> <span>AI</span> </div>
          <div className="hexagon our_client ">  <img src={require('./../assets/CSS3_logo.png')} alt="android" className="img-responsive" /><span>CSS3</span> </div>
          <div className="hexagon our_client ">  <img src={require('./../assets/React-logo.png')} alt="android" className="img-responsive" /><span>React Js</span> </div>
          <div className="hexagon our_client ">  <img src={require('./../assets/mean-logo.png')} alt="android" className="img-responsive" /> <span>MEAN Stack</span> </div>
          <div className="hexagon our_client ">  <img src={require('./../assets/ethereum-logo.png')} alt="android" className="img-responsive" /> <span>Ethereum</span> </div>
          <div className="hexagon our_client ">  <img src={require('./../assets/haskell-logo.png')} alt="android" className="img-responsive" /><span>Haskell</span></div>
  <div className="hexagon our_client "> <img src={require('./../assets/iot-logo.png')} alt="android" class="img-responsive" /> <span>IOT</span> </div>
        
        </div>
        <div className=" secndrow">
          <div className="hexagon our_client ">  <img src={require('./../assets/atla.png')} alt="android" className="img-responsive"/><span>Atala</span></div>
          <div className="hexagon our_client "> <img src={require('./../assets/blockchain-logo.png')} alt="android" className="img-responsive" />
            <span>BlockChain</span>
          </div>
          <div className="hexagon our_client ">  <img src={require('./../images/hadoop.png')} alt="android" className="img-responsive" />
            <span>Hadoop</span>
          </div>
          <div className="hexagon our_client ">  <img src={require('./../assets/plutus-logo.png')} alt="android" className="img-responsive" />
            <span>Plutus</span>
          </div>
          <div className="hexagon our_client "> <img src={require('./../assets/marlowe-logo.png')} alt="android" className="img-responsive" /> <span>Marlowe</span> </div>
          <div className="hexagon our_client ">  <img src={require('./../assets/django-logo.png')} alt="android" className="img-responsive" />
            <span>Django</span>
          </div>
          <div className="hexagon our_client ">  <img src={require('./../assets/angular-logo.png')} alt="android" className="img-responsive" />
            <span>Angular</span>
          </div>
        </div>
        <div className="thrddrow">
          <div className="hexagon our_client"><img src={require('./../assets/mesh-logo.png')} alt="android" className="img-responsive"/><span>Mesh Js</span></div>
          <div className="hexagon our_client"><img src={require('./../images/solidity.png')} alt="android" className="img-responsive"/><span>Solidity</span></div>
          <div className="hexagon our_client"><img src={require('./../assets/typescript-logo.png')} alt="android" className="img-responsive"/><span>Typescript</span></div>
          <div className="hexagon our_client"><img src={require('./../assets/java-script.png')} alt="android" className="img-responsive"/><span>Js</span></div>
          <div className="hexagon our_client"><img src={require('./../assets/next-js-logo.png')} alt="android" className="img-responsive"/><span>Next Js</span></div>
          <div className="hexagon our_client"><img src={require('./../assets/native.png')} alt="android" className="img-responsive"/><span>React Native</span></div>
          <div className="hexagon our_client"><img src={require('./../assets/sap-logo.png')} alt="android" className="img-responsive"/><span>SAP</span></div>
        </div>
        </div>
      </div>
          </div>
          </div>
      <div className="client-area">
        <div className="container-fluid">   
          <div className="wrapper">
            <div className="row">
              <div className="col-lg-6  text-center" style={{backgroundColor:'#041a38'}}>
                <div className="colored">
                  <h2 className="uuu">Client <span className="content-text">Based<br/></span> Countries</h2>
                </div>          
              </div>
              <div className="col-lg-6 text-center" style={{ backgroundColor: '#0c5991' }}>
                <div className="colored">
                <div className="client-area-country">
                  <img src={require('./../images/countires.png')} alt="country_logo"/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="clients" className="wow fadeInUp">
        <div className="container">
          <div className="row"><div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div className="section-heads mt-0"><h3>Our<span className="content-text"> Clients</span></h3></div></div></div>
            <div className="main-heading-domain-border-1 text-center">
              <div></div>
              <div></div>
            </div>
            <div className="our_partners">
            <ul className="bronzee margin-t">
              <li className="cntr_li">
								<a target="_blank">
								  <img src={require('./../images/mjunction_logo.png')} alt="heriatage_logo"/>
								</a>
              </li>
              <li className="cntr_li">
								<a target="_blank" >
								  <img src={require('./../images/cardano-logo.png')} alt="cardano_logo"/>
								</a>
							</li>
							<li className="cntr_li">
								<a target="_blank">
								<img src={require('./../images/odisha.png')} alt="ohodisha_logo"/>
								</a>
							</li>
							<li className="cntr_li">
								<a target="_blank">
								<img src={require('./../images/Cloud10.png')}alt="cloud10_logo"/>
								</a>
							</li>
							<li className="cntr_li">
								<a>
							  <img src={require('./../images/bima.png')} alt="bima_logo"/></a>
							</li>
							<li className="cntr_li">
								<a href="http://www.cycleworld.net.in/" target="_blank">
							  <img src={require('./../images/cycle_logo.png')} alt="cycleworld_logo"/></a>
              </li>
              <li className="cntr_li">
								<a href="https://www.erevmax.com/" target="_blank">
							    <img src={require('./../images/erevmax.png')} alt="rex_logo"/>
								</a>
              </li>
              <li className="cntr_li">
                <a href="https://www.uirtus.in/" target="_blank">
							  <img src={require('./../images/uirtus.png')} alt="uirtus_logo"/>
							  </a>
              </li>
              <li className="cntr_li">
								<a target="_blank">
								  <img src={require('./../images/Shree_Jagannath.png')} alt="heriatage_logo"/>
								</a>
							</li>
              </ul>
            </div>  
            {/* <header className="section-header"> 
            <Slider {...settings}>
              <div className="">
                <img src={require('./../images/odisha.png')} alt="ohodisha_logo"/>
              </div>
              <div>
                <img src={require('./../images/Cloud10.png')}alt="cloud10_logo"/>
              </div>
              <div>
                <img src={require('./../images/bima.png')}alt="bima_logo"/>
              </div>
              <div>
                <img src={require('./../images/cardano-logo.png')} alt="cardano_logo"/>
              </div>
              <div>
                <img src={require('./../images/logo-base.png')} alt="rex_logo"/>
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
              <div>
                <img src={require('./../images/mjunction_logo.png')} alt="heriatage_logo"/>
              </div>
            </Slider>
            </header>*/}
          </div>
        </div> 
      </>
    );
}
export default Home;