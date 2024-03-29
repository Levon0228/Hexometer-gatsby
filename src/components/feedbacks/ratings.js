import React from "react"
import { Col, Row } from "react-bootstrap"
import { ratingSrc } from "../../data/ratingsData"
import ratingStarSrc from "../../images/ratingStar.svg"
import "./feedbacks.css"

const Ratings = () => {
  return (
    <Row>
      {ratingSrc.map(current => (
        <Col md={6} sm={12} className="rating-block" key={current.id}>
          <div className="out" key={current.id}>
            <img className="rating-logo" alt={" logo"} src={current.src} />
            <span className="ratting-val">{current.rate}</span>
            <div className="statrsContent">
              <img src={ratingStarSrc} alt="star" />
              <img src={ratingStarSrc} alt="star" />
              <img src={ratingStarSrc} alt="star" />
              <img src={ratingStarSrc} alt="star" />
              <img src={ratingStarSrc} alt="star" />
            </div>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default Ratings
