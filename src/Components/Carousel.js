import React from 'react'
import "../App.css"

const Carousel = () => {

const carouselImagesUrl = [
    "https://global-uploads.webflow.com/605826c62e8de87de744596e/62b5a9572dab880f81c5d178_ajVzMkY7zNN-cU8hLJlTXR93WXkC09AI_0Dm-VBCfWe-kbHdRAAATBpSlNajuRsW7e0jHYCOVjdcHY1Sf-3X4tAI22KAFbbu31rgYGEmgCSV_WUrLFWhWl09ddXm7EhIITjKG0OggdxALfJeGQ.jpeg",
    "https://www.sencor.com/Sencor/media/content/Products/SLE32S700TCS-2.jpg",
    "https://www.modernfellows.com/wp-content/uploads/2023/01/Luxury-suits-for-men.jpg",
    "https://images8.alphacoders.com/451/451001.jpg",

]

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    {
      carouselImagesUrl.map((_,idx) => {
        return     <button key={idx} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={idx} className="active" aria-current="true" aria-label={`Slide ${idx}`}></button>

      })
    }
  </div>

  <div className="carousel-inner">  
      {
        carouselImagesUrl.map((imgSrc,idx) =>{
          return <div key={imgSrc} className="carousel-item active">
          <img src={imgSrc} className="d-block w-100 carousel-imgs" alt={`carousel-${idx}`} />
          </div>
        })
      }    
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>
  )
}

export default Carousel