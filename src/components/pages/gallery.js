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
  <div class="row">
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
  <div class="row">
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
  {/* <div className="container">
    <div className="row">
    <div className="gallery">
    <div className="col-sm-6 col-md-4 sub_gallery zoom_effect">
    <div className="gallery-item">
        <img className="gallery-image" src={require('./../images/gallery1.jpg')} alt="gallery1"/>
    </div>
    </div>
    <div className="col-sm-6 col-md-4 sub_gallery zoom_effect">
    <div class="gallery-item">
    <img className="gallery-image" src={require('./../images/gallery2.jpg')} alt="gallery2"/>
    </div>
    </div>
    <div className="col-sm-6 col-md-4 sub_gallery zoom_effect">
    <div className="gallery-item">
    <img className="gallery-image" src={require('./../images/gallery3.jpg')} alt="gallery3"/>
    </div>
    </div>
    <div className="col-sm-6 col-md-4 sub_gallery zoom_effect">
    <div className="gallery-item">
    <img className="gallery-image" src={require('./../images/gallery4.jpg')} alt="gallery4"/>
    </div>
    </div>
    <div className="col-sm-6 col-md-4 sub_gallery zoom_effect">
    <div className="gallery-item">
    <img className="gallery-image" src={require('./../images/gallery5.jpg')} alt="gallery5"/>
    </div>
    </div>
    <div className="col-sm-6 col-md-4 sub_gallery zoom_effect">
    <div className="gallery-item">
    <img className="gallery-image" src={require('./../images/gallery6.jpg')} alt="gallery6"/>
    </div>
    </div>
    </div>
    </div>
    </div> */}
    </div>

    </>
  );
}; 
export default Gallery;