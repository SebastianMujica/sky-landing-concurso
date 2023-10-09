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
  const [cliente, setCliente] = useState(null)
  
  return (
    <section className="contact-page">
      <Container>

        <Row>
          <Col xl={12}>
            <h2>Selecciona el tipo de participante( Vendedor o Comprador)</h2>
            <FormCheck
                    reverse
                    type="radio"
                    id="custom-switch-si"
                    name="group1"
                    label="Comprador"                   
                    onChange={ () => {
                      setCliente(true);
                    }}
                    style={{ marginBottom:"25px", marginTop: "25px"}}
            />
            <FormCheck
                    reverse
                    type="radio"
                    id="custom-switch-no"
                    name="group1"
                    label="Vendedor"                   
                    onChange={ () => {
                      setCliente(false);
                    }}
                    style={{ marginBottom:"25px", marginTop: "25px"}}
            />
            <h2 style={{ marginBottom:"25px" }} >Llena el formulario para participar</h2>

            <div className="contact-page__form">
              { !cliente &&
                <ClienteForm inputs={inputsCliente} dataCiudades = { ciudades } vendedor = { cliente } />
              }
              { cliente &&
                <ClienteForm inputs={inputsVendedor} dataCiudades = { ciudades } vendedor = { cliente }/>
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
