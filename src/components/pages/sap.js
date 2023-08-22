import React from 'react'
export default function Sap() {
  return (
      <>
        <div className="sap">
            <div className="section-intro">
                <h2 className="section-intro-title"></h2>
            </div>     
          </div>
        <div className="section" id="about">
            <div className="container">
                <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src={require('./../assets/sap1.png')} className="slide-right" id="naturo-image"alt="App"/>
                </div>
                <div className="right-text col-lg-7 col-md-12 col-sm-12 mobile-top-fix">
                    <div className="left-text">
                    <h3 className='sap-content'><blockquote>Optimizing Business Potential:Elevate your Operations with Expert Data Management Consulting using SAP solutions.</blockquote></h3>
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
                    <h1 className="why-us">Data <span className="content-text"> Migration</span></h1>
                    <div className="main-heading-domain-border-1 text-center">
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-sm-4">
                <div className='slide-left'> <img src={require('./../assets/migration1.png')} id="naturo-image"alt="App"/>    </div>                          
                </div>
                <div className="col-sm-8">
                    <p>Quotus Software Solutions  data migration experts help enterprises successfully move their data to better navigate the digital landscape and create strategic solutions that deliver tangible business results.
                    Data migration and can be a risky proposition to undertake, but is most definitely a critical part of any program that involves change. The need to migrate data happens all the time, whether due to M&A, system technology landscape upgrade, so its imperative enterprise level entities are sure about their chosen solutions provider.
                    <br/><br/> Our vast experience has shown that a smooth migration is an important part to the success of any project, usually requiring collaboration among different stakeholders. We can take care of the entire migration process from strategy, design, development and deployment for on premise, cloud and hybrid implementation. Our experience has shown that these are important part for the success of the project.<br/><br/> These aspects usually require collaboration among different groups, while always maintaining the branding and message consistency across sites - which can impact the  workload required.
                    No matter the data format (file, database, cloud, etc.) or the location of it, Our data migration consultants can help with getting your organization’s data where it needs to go. Our experts use proven methodologies that include industry specific best practices and adhere to legal requirements and data privacy standards. Data migrations performed by our professionals are executed quickly and seamlessly, always prioritizing security and certainly at the top of the requirements list, as well as ensuring non-disruption and flexibility as a core part of the process. 
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="section" id="our-classes">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="classes">
                    <h1 className="why-us">Data<span className="content-text"> Integration</span></h1>
                    <div className="main-heading-domain-border-1 text-center">
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-10">
                    <p>Enterprises are facing unforeseen challenges to establish seamless integration process to exchange data across multiple enterprise applications usually used for reporting and data analysis and transactional business operations. Quotus Software Solution's data management  consultants can help your enterprise better manage and integrate its data, by providing a more powerful, scalable and robustly architected environment to handle the growth in variety, volume, integrity and velocity of data.
                    Specifically, we can help with the modernization of your data management solutions by improving performance and ease of use for end users, enhancing functionality, decreasing total cost of ownership while making it possible for like real-time data synchronization.
                    In total, our full suite of services includes helping enterprises with data profiling, data standardization, data acquisition, data transformation and finally integration.
                    </p>
                </div>
                <div className="col-sm-2">
                    <div className='slide-left'>
                    <img src={require('./../assets/integration.png')}  id="naturo-image"alt="App"/>               
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
                    <h1 className="why-us">Data<span className="content-text"> Quality</span></h1>
                    <div className="main-heading-domain-border-1 text-center">
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2">
                <div className='slide-left'><img src={require('./../assets/update.png')} id="naturo-image"alt="App"/>   </div>
                </div>
                <div className="col-sm-10">
                    <p>Our experts have a lot of experience working with companies to help them execute business solutions using data gathered through digital channels. Quotus Software Solutions  can help your business’s bottom line and help you plan ahead to personalize insights to suit you and your business needs, which we do by using a highly collaborative approach to apply complex technologies, allowing us to gain invaluable business knowledge.
                    Our data analytics consultants leverage and utilize proven methodologies, best practices and tools to analyze row data asset and convert to trust worthy information. Our aim is to deliver the right solutions designed to solve your business challenges and drive growth. Our minimum requirement is your maximum benefit, making us a data analysis consulting firm driven by innovation and success.
                    </p>
                </div>
            </div>
        </div>
    </div>      
    </>
  )
}
