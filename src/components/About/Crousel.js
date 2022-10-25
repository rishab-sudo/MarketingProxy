import React from 'react'


const Crousel = () => {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div style={{backgroundColor:"#022C44"}} class="d-block w-100" ></div>
      </div>
      <div class="carousel-item">
        <img style={{background:"#022C44"}}src={""} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img style={{background:"#022C44"}}src={""} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Crousel