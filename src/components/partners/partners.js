import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Slider from "./slider"
import "./partners.css"

const Partners = () => (
  <Container>
    <Row>
      <Col>
        <h2 className="part-header">
          Trusted by 15,000+ businesses & compatible with over 100+ platforms
        </h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Slider />
      </Col>
    </Row>
  </Container>
)

export default Partners
