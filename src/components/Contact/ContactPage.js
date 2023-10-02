import { contactPage } from "@/data/contact";

import React,{ useState } from "react";
import { Col, Container, FormCheck, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import ClienteForm from "./ClienteForm";
import VendedorForm from "./VendedorForm";
import headerData from "@/data/headerData";
import { Image } from "react-bootstrap";



const { logopromo } = headerData;

const { tagline, title, inputsVendedor,inputsCliente, title2 } = contactPage;

const ContactPage = ({ isTitleTwo = false }) => {
  const newTitle = isTitleTwo ? title2 : title;
  const [cliente, setCliente] = useState(false)

  return (
    <section className="contact-page">
      <Container>
        <div style={{ textAlign:"center", marginBottom:"50px"}}>
          <Image src={logopromo.src} alt="" style={{ width:"150px"}} />
        </div>
        <Row>
          <Col xl={12}>
            <h2>¿Eres Vendedor?</h2>
            <FormCheck
                    type="switch"
                    id="custom-switch"
                    label="Vendedor"                   
                    onChange={ () => {
                      setCliente(!cliente);
                      console.log(cliente);
                    }}
                    style={{ marginBottom:"25px", marginTop: "25px"}}
            />
            <h2 style={{ marginBottom:"25px" }} >Llena el formulario para participar</h2>

            <div className="contact-page__form">
              { !cliente &&
                <ClienteForm inputs={inputsCliente} />
              }
              { cliente &&
                <VendedorForm inputs={inputsVendedor} />
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
