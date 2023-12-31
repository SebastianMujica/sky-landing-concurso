import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const SingleSlideOne = ({ slider = {}, showShape = false }) => {
  const { bg, title, subtitle, href } = slider;

  return (
    <>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${
            require(`@/images/backgrounds/${bg}`).default.src
          })`,
        }}
      ></div>

      {showShape && (
        <>
          <div className="main-slider-shape-1"></div>
          <div className="main-slider-shape-2"></div>
          <div className="main-slider-shape-3"></div>
        </>
      )}

      <Container>
        <Row>
          <Col xl={showShape ? 7 : 12}>
            <div className="main-slider__content">
              <h2>
                {  }
              </h2>
              <h3 style={{color: "red", fontSize: "3.75rem"}}>
                {  }
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleSlideOne;
