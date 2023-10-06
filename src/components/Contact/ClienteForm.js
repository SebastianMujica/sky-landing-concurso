import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';


const ClienteForm = ({
  inputs = [],
  dataCiudades = [],
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

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
      <Col  xl={6}>
        <div className={inputClassName}>
          <Form.Select 
                        name = "ciudad" 
                        id = "ciudad" 
                        {...register("ciudad", {pattern: /[a-zA-Z]/i } )}
                        >
            <option key={ 0 } value=" "></option>
            {dataCiudades.map(({ciudades,id_estado}) => (
                  
                  ciudades.map((value)=>(
                    <option key={ id_estado+value } value={value}> {value} </option>
                  ))          

                  ))}
          </Form.Select>
            { errors["ciudad"] && (
                <label htmlFor={"ciudad"} className="error">
                  Elije una Ciudad
                </label>
            )}{
              console.log(errors)

            }
          </div>
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
