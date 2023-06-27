import React from "react";
const Gallery = () => {
  return (
    <>
    <div className="single-room">
        <div className="section-intro">
            <h2 className="section-intro-title">           
               Gallery
            </h2>
        </div>     
    </div> 
    <div className="gallery-section">
    <div className="container">
  <div className="row">
  <div id="gallerybox"data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
      <img src={require('./../images/gallery1.jpg')} alt="gallery4" className="img-fluid rounded"/>
    </div>
    <div id="gallerybox" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
      <img src={require('./../images/gallery2.jpg')} alt="gallery5"className="img-fluid rounded"/>
    </div>
    <div id="gallerybox"data-gallery="gallery" className="col-md-4">
      <img src={require('./../images/gallery3.jpg')} alt="gallery6" className="img-fluid rounded"/>
    </div>
  </div>
  <div className="row">
    <div id="gallerybox" data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
      <img src={require('./../images/gallery2.jpg')} alt="gallery4" className="img-fluid rounded"/>
    </div>
    <div id="gallerybox"  data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
      <img src={require('./../images/gallery5.jpg')} alt="gallery5"className="img-fluid rounded"/>
    </div>
    <div id="gallerybox" data-gallery="gallery" className="col-md-4">
      <img src={require('./../images/gallery6.jpg')} alt="gallery6" className="img-fluid rounded"/>
    </div>
  </div>
</div>
    </div>

    </>
  );
}; 
export default Gallery;