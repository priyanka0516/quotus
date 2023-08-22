import React from 'react'
export default function Artificial() {
  return (
    <>
    <div className="double-room">
      <div className="section-intro">
        <h2 className="section-intro-title"></h2>
      </div>     
    </div>
    <div className="section" id="about">
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
              <p>TechMate is a cutting-edge online platform designed exclusively for  Computer Science students. It's more than just a chatbot; it's your personalized AI study companion that understands your learning needs and adapts to your individual style of questioning. Whether you're tackling complex algorithms, debugging code, or delving into the intricacies of data structures, TechMate is your go-to resource for instant assistance.</p>
            </div>
            {/*<button onClick={openGitHubPage} id="gitbutton">Read More</button> */}
            </div>
        </div>
      </div>
      </div>
      <div className="section" id="our-classes">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="classes">
                    <h1 className="why-us">Welcome to<span className="content-text"> TechMate: </span></h1>
                    <div className="main-heading-domain-border-1 text-center">
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p>Are you a curious Computer Science student seeking answers to your educational queries? Look no further, because TechMate is here to revolutionize the way you learn and explore the world of academia. Imagine having a dedicated AI-powered study partner at your fingertips, available 24/7 to assist you with all your educational questions and challenges.
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
                    <h1 className="why-us">How <span className="content-text">TechMate Work?</span></h1>
                    <div className="main-heading-domain-border-1 text-center">
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <p><b>Ask Your Question: </b>Simply type in your question or describe your problem. Whether it's a theoretical concept or a practical coding challenge, TechMate is ready to assist.<br/>
                <b>Receive Comprehensive Answers:</b> TechMate's responses are not just limited to a few keywords. It understands context and provides comprehensive explanations that help you grasp the underlying concepts.<br/>
                <b>Explore Further: </b>TechMate doesn't just stop at answering your question. It can also recommend related resources, suggest practice problems, and even guide you to external sources for deeper exploration.
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
