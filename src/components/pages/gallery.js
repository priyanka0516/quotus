import React from "react";
const Gallery =  ({ overlayText })  => {
  return (
    <>
    <div className="galleryarea">
        <div className="section-intro">
            <h2 className="section-intro-title">           
               Gallery
            </h2>
        </div>     
    </div> 
    <div className="gallery-section">
      <div className="container">
        <div className="row col-lg-12 ">
          <header className="ribbon-container">
            <h2 className="ribbon">
              <p className="ribbon-content">Annual Stakeholders Meet 2023 at Vivanta</p>
            </h2>
          </header>
          <div id="gallerybox"data-toggle="lightbox" data-gallery="gallery" className="col-lg-4 col-md-4">
            <img src={require('./../images/an1.jpg')} alt="gallery4" className="img-fluid1 rounded" />
          </div>
          <div id="gallerybox" data-toggle="lightbox" data-gallery="gallery" className="col-lg-4 col-md-4">
            <img src={require('./../images/an2.jpg')} alt="gallery5" className="img-fluid1 rounded" />
          </div>
          <div id="gallerybox"data-gallery="gallery" className="col-lg-4 col-md-4">
            <img src={require('./../images/an3.jpg')} alt="gallery6" className="img-fluid1 rounded" />
            </div>
          <div id="gallerybox" data-toggle="lightbox" data-gallery="gallery" className="col-lg-4 col-md-4">
            <img src={require('./../images/an4.jpg')} alt="gallery4" className="img-fluid1 rounded" />
          </div>
          <div id="gallerybox"  data-toggle="lightbox" data-gallery="gallery"className="col-lg-4 col-md-4">
            <img src={require('./../images/an5.jpg')} alt="gallery5" className="img-fluid1 rounded" />
          </div>
          <div id="gallerybox" data-gallery="gallery" className="col-lg-4 col-md-4">
              <img src={require('./../images/an6.jpg')} alt="gallery6" className="img-fluid1 rounded" />
            </div>       
          <div id="gallerybox" data-gallery="gallery" className="col-lg-4 col-md-4">
            <img src={require('./../images/an7.jpg')} alt="gallery6" className="img-fluid1 rounded" />
          </div>
          <div id="gallerybox" className="col-lg-4 col-md-4" data-toggle="lightbox" data-gallery="gallery" >
            <img src={require('./../images/an8.jpg')} alt="gallery4" className="img-fluid1 rounded" />
          </div>
          <div id="gallerybox" data-toggle="lightbox" data-gallery="gallery" className="col-lg-4 col-md-4">
            <img src={require('./../images/an9.jpg')} alt="gallery4" className="img-fluid1 rounded" />
          </div>
          </div>
          <div className="row col-lg-12">
            <header className="ribbon-container"> 
              <h2 className="ribbon">
                <p className="ribbon-content">Campus Drive at MITM College</p>
              </h2>
            </header>
          <div id="gallerybox"data-toggle="lightbox" data-gallery="gallery" className="col-lg-4 col-md-4">
            <img src={require('./../images/gallery3.jpg')} alt="gallery4" className="img-fluid1 rounded"/>
          </div>
          <div id="gallerybox" data-toggle="lightbox" data-gallery="gallery" className="col-lg-4 col-md-4">
            <img src={require('./../images/gallery4.jpg')} alt="gallery5" className="img-fluid1 rounded" />
          </div>
          <div id="gallerybox"data-gallery="gallery" className="col-lg-4 col-md-4">
            <img src={require('./../images/gallery5.jpg')} alt="gallery6" className="img-fluid1 rounded" />
          </div>
          </div>
        </div>
    </div>
    </>
  );
}; 
export default Gallery;