import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import diagramSrc from "../../images/Dash-Screen.png"
import "./content.css"
import Typewriter from "typewriter-effect"

const Content = () => (
  <Container className="mainContent">
    <Row>
      <Col>
        <h1 className="mainHeader">
          Beyound
          <Typewriter
            options={{
              strings: [
                "website uptime monitoring",
                "page speed checking",
                "error & broken pages alerts",
              ],
              autoStart: true,
              loop: true,
            }}
            className="typeWriter"
          />
        </h1>
      </Col>
    </Row>
    <Row>
      <Col md={6} sm={12}>
        <div className="prototype_content_home">
          <h2>
            Meet Hexometer, your AI sidekick that works
            <br />
            24/7 to catch problems before they affect
            <br />
            your business.
          </h2>
          <p>
            {" "}
            Every day your website can face an increasing range of threats.
            Server problems, slow landing pages, broken links, frustrating
            mobile experiences, embarrassing spelling mistakes, changing SEO
            rules, 3rd party services breaking, or security issues that put your
            business at risk.
          </p>
          <p>
            To make matters worse, these issues can linger unnoticed, wasting
            your ad-budget and costing your business lost sales.
          </p>
          <p>
            Hexometer monitors your website 24/7, to catch Availability,
            Performance, User experience, SEO, Health and Security problems,
            before they affect your customers.
          </p>
          <button className="getStared">Get started with our free plan</button>
        </div>
      </Col>
      <Col md={6} sm={12}>
        <img src={diagramSrc} alt="Main Giagram" />
      </Col>
    </Row>
  </Container>
)

export default Content
