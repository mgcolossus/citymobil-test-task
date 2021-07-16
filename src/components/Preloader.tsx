import React from 'react'
import loadingCircle from "../assets/preloader.svg";

export const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loadingCircle} alt="loading" />
    </div>
  )
}
