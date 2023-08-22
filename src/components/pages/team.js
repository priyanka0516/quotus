import React from 'react'
export default function Team() {
  return (
      <>
       <div className="team">
        <div className="section-intro">
          <h2 className="section-intro-title">Our Team</h2>
        </div>     
          </div>
 <div className='all-tech'>
    <div className='container'>
      <div className='row'>
            <div className='col-md-12'>
                <div className='all-tech-sec'>
                <h3>React / MERN / Python</h3>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                   <img src={require('./../images/science.png')}  alt="service4"/>
                    </div>
                    <p>React</p>
                </div>
               <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/python1.png')} alt="python technology-banner"/>
                    </div>
                    <p>Python</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../images/MERN-logo.png')} alt="node technology-banner"/>
                    </div>
                    <p>MERN</p>
                </div>
                          </div>
            <div className='details'>
                <h3>Combined 18 Years of experience of the resources</h3>
                <p><b>Skills:</b> Web2, ReactNative, UI-UX Design, MERN, Photoshop, Figma, Python, Django.</p>
            </div>
            </div>
      </div>
      <div className='row'>
            <div className='col-md-12'>
                <div className='all-tech-sec'>
                <h3>Blockchain (WEB 3.0)</h3>
                
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/etherum.png')} alt="node technology-banner"/>
                    </div>
                    <p>Ethereum</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../images/chain.png')} alt="php technology-banner"/>
                    </div>
                    <p>BlockChain</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../images/cardano_logo.png')} alt="mongo-db technology-banner"/>
                    </div>
                    <p>Cardano</p>
                </div>
            
                          </div>
                           <div className='details'>
                <h3> Combined 15 Years of experience of the resources.</h3>
                <p><b>Skills:</b> Web3, Blockchain, Ethereum, Cardano, Plutus, Solidity, MeshJS, Marlowe. 
Atala prism.</p>
            </div>
            </div>
      </div>
      <div className='row'>
            <div className='col-md-12'>
                <div className='all-tech-sec'>
                <h3>JAVA / Spring Boot</h3>       
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/java1.png')} alt="Java technology-banner"/>
                    </div>
                    <p>Java</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                    <img src={require('./../assets/spring.png')} alt="Spring technology-banner"/>
                    </div>
                    <p>Spring</p>
                </div>  
            </div>
            <div className='details'>
                <h3>  Combined 47 Years of experience of Resources.</h3>
                <p><b>Skills:</b> JAVA, Servlet, Spring Boot, Bigdata, Hadoop</p>
            </div>
            </div>
      </div>
    </div>
    </div>
      </>
  )
}
