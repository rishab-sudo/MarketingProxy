import React from "react";
import "./Slider.css";
import Vector from "./icons/Vector.png";


export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? Vector : Vector} />
    </button>
  );
}