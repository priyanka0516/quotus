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
                        <img src={require('./../images/web-2.png')}  alt="service4"/>
                    </div>
                    <p>Web 2</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/science.png')}  alt="service4"/>
                    </div>
                    <p>React JS/Native</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/ux.png')}  alt="UI/UX"/>
                    </div>
                    <p>UI/UX</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/mern.png')} alt="node technology-banner"/>
                    </div>
                    <p>MERN</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/photoshop.png')} alt="Photoshop"/>
                    </div>
                    <p>Photoshop</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/figma.png')} alt="Django"/>
                    </div>
                    <p>Figma</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../assets/python1.png')} alt="python technology-banner"/>
                    </div>
                    <p>Python</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/django.png')} alt="Django"/>
                    </div>
                    <p>Django</p>
                </div>
                </div>
               
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <div className='all-tech-sec'>
                <h3>Blockchain (WEB 3.0)</h3>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/web3-logo1.png')} alt="php technology-banner"/>
                    </div>
                    <p>Web 3</p>
                </div>             
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/chain.png')} alt="php technology-banner"/>
                    </div>
                    <p>BlockChain</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../assets/etherum.png')} alt="node technology-banner"/>
                    </div>
                    <p>Ethereum</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/cardano_logo.png')} alt="mongo-db technology-banner"/>
                    </div>
                    <p>Cardano</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/lputus.png')} alt="mongo-db technology-banner"/>
                    </div>
                    <p>Plutus</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/solidity.png')} alt="mongo-db technology-banner"/>
                    </div>
                    <p>Solidity</p>                   
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/logo-mesh.png')} alt="mongo-db technology-banner"/>
                    </div>
                    <p>Mesh Js</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../images/marlowe.png')} alt="mongo-db technology-banner"/>
                    </div>
                    <p>Marlowe</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../assets/atla.png')} alt="mongo-db technology-banner"/>
                    </div>
                    <p>Atala Prism</p>
                </div>
                </div>
              
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
            <div className='all-tech-sec'>
                <h3>JAVA / Spring Boot</h3>       
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../assets/java1.png')} alt="Java"/>
                    </div>
                    <p>Java</p>
                </div>
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../assets/spring.png')} alt="Spring"/>
                    </div>
                    <p>Spring</p>
                </div> 
                <div className='all-tech_box'>
                    <div className="all-tech_box_img">
                        <img src={require('./../assets/hadoop.png')} alt="Hadoop"/>
                    </div>
                    <p>Hadoop</p>
                </div>  
            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
