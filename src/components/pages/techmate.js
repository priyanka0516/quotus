import React from 'react'
export default function Artificial() {
  return (
    <>
    <div className="double-room">
      <div className="section-intro">
        <h2 className="section-intro-title">TechMate</h2>
      </div>     
    </div>
      <div className="section" id="about">
      <div className="leverage_left"><img src={require('./../images/lev.png')}alt="Mobile-App-Development-Services"/></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
            <img src={require('./../images/robot.png')} className="slide-right" id="naturo-image"alt="App"/>
          </div>
          <div className="right-text col-lg-7 col-md-12 col-sm-12 mobile-top-fix">
            <div className="left-heading">
            <h1 className="why-us" style={{ textAlign: 'left' }}>About<span className="content-text"> TechMate</span></h1>
            <div className="main-heading-domain-border-1 text-left">
                <div></div>
                <div></div>
            </div>
            </div>
            <div className="left-text">
              <p>TechMate is a cutting-edge online platform designed exclusively for  Computer Science students. It's more than just a chatbot it's your personalized AI study companion that understands your learning needs and adapts to your individual style of questioning. Whether you're tackling complex algorithms, debugging code or delving into the intricacies of data structures, TechMate is your go-to resource for instant assistance.</p>
            </div>
            {/*<button onClick={openGitHubPage} id="gitbutton">Read More</button> */}
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
                              <img src={require('./../assets/web.png')}  id="tech-logo"  alt="java"/>
                            </div>
                            <h3>Web App Integration</h3>
                            <p className="paragraph">Whether you're studying in your dorm room or at a local coffee shop, TechMate's web app is your virtual  partner. Accessible through your web browser, the TechMate web app brings the complete suite of AI-powered learning features to your laptop or desktop.
                            Explore complex topics with ease by typing in your questions or describing concepts in your own words. TechMate's smart algorithms quickly analyze your input and provide you with in-depth responses, ensuring that you understand the underlying principles. The web app's intuitive interface makes navigating through subjects, accessing resources and interacting with TechMate a breeze.</p>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 aos-init aos-animate">
                        <div className="technology1">
                            <div className="impactIcon">
                            <img src={require('./../images/app-development.png')}  id="tech-logo" alt="python"/>
                            </div>
                            <h3>Mobile App Integration</h3>
                            <p className="paragraph">Life is dynamic and so is your learning journey. With the TechMate mobile app, you carry your personal AI  with you in your pocket. Whether you're commuting, waiting for a class to start or taking a study break, the TechMate mobile app is there to assist you.
                            Ask questions on the go using voice or text input. The mobile app's user-friendly design ensures a seamless experience on screens of all sizes. The integration also extends to notifications, so you never miss an opportunity to explore new concepts, delve into practice problems or engage in insightful discussions with your fellow learners.</p>
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
                    <h1 className="why-us">AI-Powered <span className="content-text">Learning Ecosystem</span></h1>
                    <div className="main-heading-domain-border-1 text-center">
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <p style={{padding:'10px 0px'}}><b>With both web and mobile app integration, TechMate creates a holistic learning ecosystem that adapts to your lifestyle:</b>
                  <br/>
                  <b>1. Convenience : </b>Seamlessly switch between devices without losing your progress. Start researching on your laptop and continue on your smartphone without missing a beat.<br/>
                  <b>2. Accessibility : </b>Break down the barriers of time and location. Access TechMate whenever inspiration strikes, whether you're at home, in a library or waiting in line.
                  <br/>
                  <b>3. Collaboration : </b>Engage with your peers on the platform, share insights and collaborate on challenging problems. TechMate fosters a sense of community among learners pursuing B.Tech and Computer Science.
                  <br/>
                  <b>4. Continuous Learning : </b>Receive notifications, reminders and personalized study suggestions tailored to your learning journey. TechMate's AI integration adapts to your evolving needs, ensuring you're always on the path to improvement.
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
                    <h1 className="why-us">Smarter<span className="content-text"> Learning Journey</span></h1>
                    <div className="main-heading-domain-border-1 text-center">
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <p>TechMate's integration across web and mobile platforms takes your educational experience to the next level. Embrace the convenience of having a dedicated AI study companion by your side, ready to provide you with comprehensive answers, engaging explanations and a deeper understanding of your coursework.
                    Whether you're engaging in a deep dive into programming languages, exploring intricate algorithms or seeking clarification on complex theories, TechMate's AI integration is designed to enhance your learning process. Embrace the future of education with TechMate – where AI-driven knowledge is always within reach, on every device you own.
                </p>
                </div>
            </div>
        </div>
    </div>
    {/* <section className="flutter-hr">
      <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="ai" id="fadeInLeft">
                <img src={require('./../images/human.png')} alt="user-experience"/>
                <span>01</span>
                <h5>Understanding Ai and Trained Models</h5>
                <p><b>Trained Models:</b> Delve into the process of training models, discussing supervised and unsupervised learning, fine-tuning, and the importance of quality datasets.</p> 
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="ai" id="fadeInUp">
                <img src={require('./../images/cs.png')} alt="user-experience"/>
                <span>02</span>
                <h5>Integration Benefits in Computer Science</h5>
                <p><b>Interactive Learning: </b>Discover how integrating ChatGPT with trained CS models can create interactive learning environments, enabling users to ask questions, seek clarifications, and engage in dynamic discussions.</p>
                <p><b>Real-world Problem Solving:</b> Highlight the potential for using integrated models to solve real-world CS problems, such as debugging code, conceptualizing algorithms, and designing systems.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="ai" id="fadeInRight">
                <img src={require('./../images/data.png')} alt="user-experience"/>
                <span>03</span>
                <h5>Training Data and Model Preparation</h5>
                <p><b>Curating Datasets:</b>Discuss the significance of high-quality datasets for training CS models. Address the challenges of data bias, representation, and ethical considerations.</p>
                <p><b>Preprocessing and Augmentation:</b> Explain the preprocessing steps and data augmentation techniques necessary to prepare the data for effective model training.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="ai" id="fadeInUp">
                <img src={require('./../images/analysis.png')} alt="user-experience"/>
                <span>04</span>
                <h5>Model Training and Fine-tuning</h5>
                <p><b>Training Strategies:</b> Cover various model architectures suitable for different CS tasks. Compare and contrast transformer-based models, recurrent neural networks, and convolutional neural networks.</p>
                <p><b>Fine-tuning:</b>Detail the process of fine-tuning pre-existing models to cater to specific CS domains, ensuring optimal performance and accuracy.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="ai" id="fade-right">
                <img src={require('./../images/chart.png')} alt="user-experience"/>
                <span>05</span>
                <h5>Ethical and Social Implications</h5>
                <p><b>Bias and Fairness:</b>Address the potential biases that can arise in trained models and how to mitigate them to ensure fairness and inclusivity.</p>
                <p><b>Privacy Concerns:</b>Discuss the ethical considerations when handling sensitive CS-related data and maintaining user privacy during interactions.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="ai" id="fade-right">
                <img src={require('./../images/user-experience.png')} alt="user-experience"/>
                <span>06</span>
                <h5>User Experience and Interface Design</h5>
                <p><b>Natural Language Interface:</b> Explore the challenges and design considerations when building a natural language interface for CS applications, ensuring intuitive interactions.</p>
                <p><b>Multi-Modal Integration:</b> Touch upon the integration of text with other modalities such as code snippets, diagrams, and visual aids to enhance the learning experience.</p>
              </div>
            </div>

          </div>
      </div>
    </section> */}
  </>
  )
}
