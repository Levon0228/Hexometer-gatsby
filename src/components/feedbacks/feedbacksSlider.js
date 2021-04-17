import React from "react"
import { feedbcksSrc } from "../../data/feednackSliderData"
import "./feedbacks.css"

import { Carousel } from "3d-react-carousal"

const FeedbackSlider = () => (
  <>
    <Carousel
      slides={feedbcksSrc.map(current => (
        <img src={current.src} alt="Feedbacks" />
      ))}
      autoplay={true}
      interval={4000}
    />
  </>
)

export default FeedbackSlider
