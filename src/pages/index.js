import BenefitsOne from "@/components/Benefits/BenefitsOne";
import CaseOne from "@/components/CaseSection/CaseOne";
import CtaOne from "@/components/CtaSection/CtaOne";
import FreeConsultation from "@/components/FreeConsultation/FreeConsultation";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsSection/NewsOne";
import OurMission from "@/components/OurMission/OurMission";
import TeamOne from "@/components/TeamSection/TeamOne";
import TestimonialOne from "@/components/TestimonialSection/TestimonialOne";
import TrustedOne from "@/components/TrustedSection/TrustedOne";
import WelcomeOne from "@/components/WelcomeSection/WelcomeOne";
import WorkTogether from "@/components/WorkTogether/WorkTogether";
import { mainSlider } from "@/data/mainSlider";
import React from "react";
import ContactDetails from "@/components/Contact/ContactDetails";
import ContactPage from "@/components/Contact/ContactPage";
import { Col, Container, Row } from "react-bootstrap";


const Home = () => {
  return (
    <Layout pageTitle="Viaja con Sky">
      <Header />
      <MainSlider sliders={mainSlider}  />
      <WelcomeOne />
      <ContactPage isTitleTwo />
      <CtaOne />
    </Layout>
  );
};

export default Home;
