import React from "react";
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ClienteForm = ({
  inputs = [],
  dataCiudades = [],
  vendedor,
  formClassName = "comment-one__form",
  inputClassName = "comment-form__input-box",
  messageClassName = "text-message-box",
  btnBoxClassName = "btn-box",
  btnClassName = "comment-form__btn",
  btnText = "Enviar codigo",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
    const [ipAddress, setIPAddress] = useState('')
  
    useEffect(() => {
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => setIPAddress(data.ip))
        .catch(error => console.log(error))
    }, []);
  
  const MySwal = withReactContent(Swal)

  const onSubmit = async (data) => {
    
      data.ip = ipAddress;
      if (vendedor !== null){
        if (vendedor){
          const response = await fetch("https://apiviajacon.skylubricantes.com/api/talonario/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
              },
            });
            if (response.status ==201){
              MySwal.fire({
                title: <strong>Exito</strong>,
                html: <i>El cupon se ha registrado</i>,
                icon: 'success'
              })
            }else{
              MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Hubo un Error al registrar el cupon</i>,
                icon: 'error'
              })
            }
          }else{
          const response = await fetch("https://apiviajacon.skylubricantes.com/api/cupones/create", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            });
            if (response.status ==201){
              MySwal.fire({
                title: <strong>Exito</strong>,
                html: <i>El cupon se ha registrado</i>,
                icon: 'success'
              })

            }else{
              MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Hubo un Error al registrar el cupon</i>,
                icon: 'error'
              })
            }
        }
      }else{
        MySwal.fire({
          title: <strong>Error</strong>,
          html: <i>Debes decir si eres Vendedor o Cliente</i>,
          icon: 'error'
        })
      }
  }

  return (
    <form
      onSubmit={ handleSubmit(onSubmit) }
      className={`${formClassName} contact-form-validated`}
    >
      <Row>
        {inputs.map(({ name, placeholder, type, required }) => (
          <Col key={name} xl={6}>
            <div className={inputClassName}>
              <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                {...register(name, { required })}
              />
              {required && errors[name] && (
                <label htmlFor={name} className="error">
                  Este campo es obligatorio
                </label>
              )}
            </div>
          </Col>
        ))}
      </Row>

      <Row>
        <Col xl={12}>
          <input type="text" list="data"  className={inputClassName}  
                        name = "ciudad" 
                        id = "ciudad" 
                        placeholder="Escribe y selecciona una ciudad"
                        {...register("ciudad",true)}
                        />
          <datalist id="data">
          {dataCiudades.map(({ciudades,id_estado}) => (
                  
                  ciudades.map((value)=>(
                    <option key={ id_estado+value } value={value}> {value} </option>
                  ))          

                  ))}
          </datalist>
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <div className={btnBoxClassName}>
            <button type="submit" className={`thm-btn ${btnClassName}`}>
              {btnText}
            </button>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default ClienteForm;
