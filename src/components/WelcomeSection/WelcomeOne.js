import { welcomeOne } from "@/data/welcomeSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Title from "../Reuseable/Title";
import VideoModal from "../Reuseable/VideoModal";
import VisibilityCountUp from "../Reuseable/VisibilityCountUp";
import SingleFeatureOne from "./SingleFeatureOne";

const { tagline, title, counter, bg, videoBg, videoId, bottomText, features,logo, logopromo } =
  welcomeOne;

const WelcomeOne = ({ id = "" }) => {
  const [isOpen, setOpen] = useState(false);

  const ref = useActive(id);

  return (
    <>
      <section ref={ref} className="welcome-one" id={id} style={{ textAlign:"center"}}>
        <div
          className="welcome-one-shape"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <Container>
          <div className="welcome-one__top">
            <Row>
              <Col xl={12} lg={12}>
              
                <Image src={logopromo.src} alt="" style={{ width: "211px", marginBottom: "100px;"}} />
               
                <div className="welcome-one__top-left">
                  <Title
                    tagline={tagline}
                    title={title}
                    className="text-left"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="welcome-one__bottom">
            <ul className="list-unstyled welcome-one__feature">
              {features.map((feature) => (
                <SingleFeatureOne key={feature.id} feature={feature} />
              ))}
            </ul>
          </div>
          <div className="welcome-one__find-solutions">
          </div>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId={videoId} />
    </>
  );
};

export default WelcomeOne;
