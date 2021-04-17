import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { partnersScrs } from "../../data/partnersSliderData"
import "./partners.css"
import Slider from "react-slick"

const PartnersSlider = () => {
  let settings = {
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <div className="margin-bottom">
      <Slider {...settings}>
        {partnersScrs.map(current => (
          <div key={current.id}>
            <img
              className="rounded-circle"
              alt={" parter logo"}
              src={current.src}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PartnersSlider
