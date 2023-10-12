import React from "react";
import { Link } from 'react-router-dom';
const Naturopura = () => {
    const openGitHubPage = () => {
    window.open('https://github.com/Naturopura/NaturopuraV1/wiki/Technical-Design', '_blank');
  };
    return ( 
    <>
    <div className="naturopura">
        <div className="section-intro">
            <h2 className="section-intro-title">Naturopura</h2>
        </div>     
    </div> 
    <div className="section" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src={require('./../images/air-cargo.png')} className="rounded img-fluid d-block mx-auto" id="naturo-image"alt="App"/>
                </div>
                <div className="right-text col-lg-7 col-md-12 col-sm-12 mobile-top-fix">
                    <div className="left-heading">
                    <h1 className="why-us" style={{ textAlign: 'left' }}>About<span className="content-text"> Naturopura</span></h1>
                    <div className="main-heading-domain-border-1 text-left">
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                    <div className="left-text">
                        <p>Introducing a hassle-free platform for farmers and consumers in India's agricultural market. This platform transforms the unorganized supply chain into a stable, transparent network. Using technology, farmers, and consumers can easily buy and sell products. It facilitates real-time information, sustainable resource use, streamlined trading, diversified markets, secure partnerships, and an efficient supply chain. Empowering farmers and promoting fair trade, contributes to the growth of India's agricultural sector.</p>
                    </div>
                    <button onClick={openGitHubPage} id="gitbutton">Read More</button>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="section" id="our-classes">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="classes">
                    <h1 className="why-us">Work<span className="content-text"> Flow</span></h1>
                        <img src="assets/images/line-dec.png" alt=""/>
                        <p>Our workflow is inclusive for all, from conceptualization to post production we follow an agile and iterative development approach to provide you with solutions that will boost your business development.</p>
                    </div>
                </div>
            </div>
            <div className="row" id="tabs">
              <div className="col-lg-5">
                <ul>
                  <li><span><img className="our-plan" src={require('./../images/strategy.png')} alt=""/>Strategy & Planning</span></li>
                  <li><span><img  className="our-plan" src={require('./../images/ui-design.png')} alt=""/>Website Designing</span></li>
                  <li><span><img  className="our-plan" src={require('./../images/agile.png')}  alt=""/>Development</span></li>
                  <li><span><img  className="our-plan" src={require('./../images/test.png')}  alt=""/>Manual Testing</span></li>
                  <div className="main-rounded-button"><span>Start a Project with us</span></div>
                </ul>
              </div>
              <div className="col-lg-7">
                <div className='tabs-content'>
                  <div id='tabs-1'>
                  <img src={require('./../images/about2.png')} alt=""/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div> */}
        <section className="flutter-hr">
              <div className="container">
            <h3>Solutions for a diverse range of businesses</h3>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="flutter-healthcare" id="fadeInLeft">
                        <h5>User Module</h5>
                        <p>User Registration: Allows new users to create an account by providing necessary information such as username, email address, and password. May include additional fields based on user requirements.</p>
                        <Link to="/innernaturopura">Read More...</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="flutter-healthcare" id="fadeInUp">
                        <h5>Farmer Module</h5>
                        <p>Product Listing: Farmers can list their agricultural products for sale, showcasing the variety, quantity, and quality of their produce. They can provide detailed descriptions, images, and pricing information to attract potential buyers.</p>
                        <Link to="/innernaturopura">Read More...</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="flutter-healthcare" id="fadeInRight">
                        <h5>Agricultural Products Module</h5>
                        <p>Product Creation: Users can create new entries for agricultural products within the module. This involves filling out the necessary fields and providing accurate information about the product. The creation process ensures that all essential data is captured for each product entry.</p>
                        <Link to="/innernaturopura">Read More...</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="flutter-healthcare" id="fade-right">
                        <h5>Equipment Manufacturers & Suppliers Module</h5>
                        <p>Equipment Listing and Showcase: Suppliers can create listings for their agricultural equipment, including detailed information such as equipment type, specifications, pricing, availability, and any other relevant details. This feature allows suppliers to showcase their products to potential buyers within the system.</p>
                        <Link to="/innernaturopura">Read More...</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="flutter-healthcare" id="fadeInUp">
                        <h5>Cold Storages, Distributors & Retailers Module</h5>
                        <p>Availability Showcase: Cold storage providers, distributors, and retailers can list their available storage units, distribution networks, and retail outlets within the module. They can provide details such as location, storage capacity, temperature control capabilities, transportation facilities, and any other relevant information to showcase their offerings.</p>
                        <Link to="/innernaturopura">Read More...</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="flutter-healthcare" id="fade-right">
                        <h5>Processing Industries Module</h5>
                        <p>Industry Showcase: Processing industries can create profiles within the module to showcase their capabilities, processing capacities, product offerings, certifications, and any other relevant information. This feature allows them to highlight their expertise and attract potential farmers and distributors for collaboration.</p>
                        <Link to="/innernaturopura">Read More...</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="flutter-healthcare" id="fade-right">
                        <h5>Consultants & Institutions Module</h5>
                        <p>Consultant and Institution Profiles: Consultants and agricultural institutions can create profiles within the module, showcasing their expertise, qualifications, experience, and services offered. This feature allows farmers to browse through profiles and select consultants or institutions that best match their requirements.</p>
                        <Link to="/innernaturopura">Read More...</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="flutter-healthcare"id="fadeInUp">
                        <h5>Consumer Model</h5>
                        <p>Transparency and Informed Decision-Making: The Consumer Model promotes transparency by providing consumers with essential information about farmers, farming practices, farming chemicals, storage duration, and product age and expiry. This empowers consumers to make informed decisions, align their choices with their values, and have a deeper understanding of the products they purchase.</p>
                        <Link to="/innernaturopura">Read More...</Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="flutter-healthcare" data-aos="fade-left">
                        <h5>Exporters & Marketing Agencies Model</h5>
                        <p>Product Listing and Search: Marketing agencies can browse and search for available agricultural products from various international suppliers. The system provides a user-friendly interface to view detailed product information, including product name, description, images, origin, quality standards, and pricing.</p>
                        <Link to="/innernaturopura">Read More...</Link>
                    </div>
                </div>
                </div>
                </div>
        </section>
</>
  );
};
export default Naturopura;