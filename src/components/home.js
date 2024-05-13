import React from 'react';
import "../css/Home.css";

export default function Home() {
  return (
    <div style={{marginBottom:100}} className=""> {/* Centering container */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="img d-block mx-auto" src="images\Homepage\Option (1).jpg" style={{width: "700px", height: "300px"}} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="img d-block mx-auto" src="images\Homepage\Option (2).jpg" style={{width: "700px", height: "300px"}} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="img d-block mx-auto" src="images\Homepage\Option (3).jpg" style={{width: "700px", height: "300px"}} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="img d-block mx-auto" src="images\Homepage\Option (4).jpg" style={{width: "700px", height: "300px"}} alt="Second slide" />
          </div>  <div className="carousel-item">
            <img className="img d-block mx-auto" src="images\Homepage\Option (5).jpg" style={{width: "700px", height: "300px"}} alt="Second slide" />
          </div>
        </div>
        <a style={{color:"black"}} className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-iconn" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-iconn" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
