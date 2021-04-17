import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import FeedbacksSlider from "./feedbacksSlider"
import Ratings from "./ratings"
import "./feedbacks.css"

const Feedbacks = () => (
  <Container>
    <Row>
      <Col>
        <Ratings />
      </Col>
      <Col>
        <FeedbacksSlider />
      </Col>
    </Row>
  </Container>
)
export default Feedbacks
