import { contactPage } from "@/data/contact";

import React,{ useState } from "react";
import { Col, Container, FormCheck, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import ClienteForm from "./ClienteForm";
import headerData from "@/data/headerData";
import { Image } from "react-bootstrap";



const { logopromo } = headerData;

const { tagline, title, inputsVendedor, inputsCliente, title2, ciudades, } = contactPage;

const ContactPage = ({ isTitleTwo = false }) => {
  const newTitle = isTitleTwo ? title2 : title;
  const [cliente, setCliente] = useState(false)

 
  const saveCupon = async () => {
    const response = await fetch("http://apiviajacon.skylubricantes.com/api/cupones/create", {
        method: "POST",
        body: JSON.stringify(cliente),
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response)
};
  return (
    <section className="contact-page">
      <Container>

        <Row>
          <Col xl={12}>
            <h2>¿Eres Vendedor?</h2>
            <FormCheck
                    reverse
                    type="radio"
                    id="custom-switch-si"
                    name="group1"
                    label="Si"                   
                    onChange={ () => {
                      setCliente(!cliente);
                    }}
                    style={{ marginBottom:"25px", marginTop: "25px"}}
            />
            <FormCheck
                    reverse
                    type="radio"
                    id="custom-switch-no"
                    name="group1"
                    label="No"                   
                    onChange={ () => {
                      setCliente(!cliente);
                    }}
                    style={{ marginBottom:"25px", marginTop: "25px"}}
            />
            <h2 style={{ marginBottom:"25px" }} >Llena el formulario para participar</h2>

            <div className="contact-page__form">
              { !cliente &&
                <ClienteForm inputs={inputsCliente} dataCiudades = { ciudades }/>
              }
              { cliente &&
                <ClienteForm inputs={inputsVendedor} dataCiudades = { ciudades }/>
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
