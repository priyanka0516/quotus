import React from 'react';
export default function Cardanopython() {
    return (
    <>
    <div className='Cardanopython-banner'>
        <div className='container'>
            <div className='row'></div>
        </div> 
    </div>
    <div className="pycardano">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src={require('./../assets/cardano-python.png')}className="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
                <div className="right-text col-lg-7 col-md-12 col-sm-12 mobile-top-fix">
                    <div className="left-heading">
                        <h1 className="why-us" style={{textAlign:'left',fontWeight:'700'}}>About <span className="content-text">PyCardano</span></h1>
                    </div>
                    <div className="left-text">
                        <p>PyCardano is a standalone Cardano client written in Python.The library is able to create and sign transactions without depending on third-party Cardano serialization tools, such as cardano-cli and cardano-serialization-lib, making it a light-weight library that is easy and fast to set up in all kinds of environments.</p>
                    </div>
                </div>
            </div>  
        </div>
        </div>
    <section className="why-pycardano">
        <div className="container">
            <h2 className="domain_heading">Python Cardano <span className="content-text">BlockChain Package</span> </h2>
            <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
            </div>
            <div className="row mt-2 wow fadeInUp">
                <div className="col-md-12">
                    <p className="paragraph">PyCardano is a powerful Python package that revolutionizes the way developers interact with the Cardano blockchain and provides a convenient interface for interacting with the Cardano . It allows you to perform various tasks and a convenient and secure way to create Cardano transactions and off-chain code.</p><br/>
                    <p className="paragraph">Previously developers who wanted to create Cardano applications had to use the Cardano CLI, which is a command-line tool that can be difficult to use and insecure. Lucid Cardano provides a high-level API that makes it easy to interact with Cardano data, and it can be run pretty much anywhere. This makes it a much more convenient and secure way to develop Cardano applications.</p><br/>
                    <p className="paragraph">Enter Lucid Cardano, which addresses these issues head-on. By providing a high-level API, it offers a more intuitive and streamlined way to interact with Cardano data. With Lucid Cardano, developers can focus on building their applications without getting caught up in the intricacies of low-level commands and protocols.</p><br/>
                    <p className="paragraph">One of the key advantages of Lucid Cardano is its versatility. It can be seamlessly integrated into various environments, empowering developers to run their applications on different platforms. Whether you are working on a local development setup, deploying to a cloud infrastructure, or even experimenting with blockchain technology on your personal machine, Lucid Cardano remains a reliable and accessible tool.</p><br/>
                    <p className="paragraph">By leveraging Lucid Cardano's capabilities, developers gain a convenient and secure means to create Cardano transactions and execute off-chain code. The package abstracts away the complexities of the underlying blockchain, allowing developers to focus on building innovative and robust applications.</p>
                </div>      
            </div>
        </div>
    </section>
    <section className='features'>
        <div className='container'>
            <div className='row'>
                <h3>Features</h3>
                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <div className='featurebox'>
                        <img src={require('./../images/wallet.png')} alt="wallet"/>
                        <h4>Wallet Management</h4>
                        <p>Generate wallet addresses, manage private keys, and check wallet balances.</p>
                    </div>
                </div>  
                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <div className='featurebox'>
                        <img src={require('./../images/tokens.png')} alt="tokens"/>
                        <h4>Token Minting</h4>
                        <p>Create and manage custom tokens on the Cardano blockchain.</p>
                    </div>
                </div>    
                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <div className='featurebox'>
                        <img src={require('./../images/reward.png')} alt="Transaction"/>
                        <h4>Transaction Creation</h4>
                        <p>Build and sign transactions to send ADA and custom tokens.</p>
                    </div>
                </div>  
                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <div className='featurebox'>
                        <img src={require('./../images/metadata.png')} alt="Metadata"/>
                        <h4>Metadata Attachment</h4>
                        <p>Attach metadata to transactions for additional information.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                    <div className='featurebox'>
                        <img src={require('./../images/privacy-policy.png')} alt="Policy"/>
                        <h4>Policy Management</h4>
                        <p>Define and manage minting policies for token creation.</p>
                    </div>
                </div> 
            </div>        
        </div>        
    </section>     
    </>
  )
}
