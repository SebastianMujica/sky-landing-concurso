import React from "react";
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ciudades } from "@/data/contact";


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
    reset,
    resetField,
    formState: { errors },
  } = useForm();
  
    const [ipAddress, setIPAddress] = useState('')
  
    useEffect(() => {
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => setIPAddress(data.ip))
        .catch(error => console.log(error))
    }, []);
    
    const [estadoState, setEstadoState] = useState(null)
    const MySwal = withReactContent(Swal)

  const onSubmit = async (data) => {

      

      
  //  if (dataCiudades.find( x => x.ciudades.find( y => y === data.ciudad.trim()) )){
      data.ip = ipAddress;
      if (vendedor !== null){
        if (vendedor){
          const codigos = data.code.split(',')
          const response = null
          if (codigos.length  > 1)
            { 
              console.log('insertando varios codigos')
              const consulta_array = []
              codigos.forEach( codigo => {
                const consulta = ''
                const data_strip = data
                data_strip.code = codigo 
                const response = fetch("https://apiviajacon.skylubricantes.com/api/talonario/register", {
                                method: "POST",
                                body: JSON.stringify(data_strip),
                                headers: {
                                    "Content-Type": "application/json",
                                  },
                                });
          
                if (response.status == 201){
                  consulta_array.push('Exito al insertar el ticket '+ codigo)
                  //console.log('Exito al insertar el ticket '+ codigo )

                }else{
                  consulta_array.push('Error al insertar el ticket '+ codigo)
                  //console.log('Error!!  al insertar el ticket '+ codigo )
                }
              });

              console.log(consulta_array)
              MySwal.fire({
                title: <strong>Registro Multiple</strong>,
                html: <i>Resultado { consulta_array.map( elemento => <h3 key={elemento}> {elemento} </h3> ) }</i>,
                icon: 'success'
              })
            }else{
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
                html: <i>Ese cupon ya esta registrado</i>,
                icon: 'error'
              })
            }
            }
          /*
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
                html: <i>Ese cupon ya esta registrado</i>,
                icon: 'error'
              })
            }*/
          }else{

            const codigos = data.code.split(',')
            const response = null
            if (codigos.length  > 1)
              { 
                console.log('insertando varios codigos')
                const consulta_array = []
                for (const codigo of codigos){
                  const consulta = ''
                  const data_strip = data
                  data_strip.code = codigo 
                  const response = await fetch("https://apiviajacon.skylubricantes.com/api/cupones/create", {
                                  method: "POST",
                                  body: JSON.stringify(data_strip),
                                  headers: {
                                      "Content-Type": "application/json",
                                    },
                                  });
                  console.log(response)
                  if (response.status == 201){
                    consulta_array.push('Exito al insertar el ticket '+ codigo)
                    //console.log('Exito al insertar el ticket '+ codigo )
  
                  }else{
                    consulta_array.push('Error al insertar el ticket '+ codigo)
                    //console.log('Error al insertar el ticket '+ codigo )
                  }
                };
                console.log(consulta_array)

                MySwal.fire({
                  title: <strong>Registro Multiple</strong>,
                  html: <i>Resultado { consulta_array.map( elemento => <h3 key={elemento}> {elemento} </h3> ) }</i>,
                  icon: 'success'
                })
                
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
              reset()
            }else{
              MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Ese cupon ya esta registrado</i>,
                icon: 'error'
              })
            }
        }}
      }else {
        MySwal.fire({
          title: <strong>Error</strong>,
          html: <i>Debes decir si eres Vendedor o Cliente</i>,
          icon: 'error'
        })
      }
    /*}else{
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>Debes seleccionar una ciudad valida</i>,
        icon: 'error'
      })
    }*/
  }

  return (
    <form
      onSubmit={ handleSubmit(onSubmit) }
      className={`${formClassName} contact-form-validated`}
    >
      <Row>
        {inputs.map(({ name, placeholder, type, required, xl }) => (
          <Col key={name} xl={ xl}>
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
          <input type="text" list="data-estado"  className={inputClassName}  
                        name = "estado" 
                        id = "estado" 
                        placeholder="Escribe y selecciona un estado"
                        {...register("estado",true)}
                        onChange={  (value)=>{
                                              setEstadoState(value.target.value)
                                              resetField("ciudad")  
                                            } }
                        />
          <datalist id="data-estado">
          {dataCiudades.map(({estado}) => (
                  
                    <option key={ estado } value={estado} > {estado} </option>

                  ))}
          </datalist>
          { errors["estado"] && (
                <label htmlFor={"estado"} className="error">
                  Este campo es obligatorio
                </label>
              )}
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <input type="text" list="data-ciudad"  className={inputClassName}  
                        name = "ciudad" 
                        id = "ciudad" 
                        placeholder="Escribe y selecciona una ciudad"
                        {...register("ciudad",true)}
                        />
          <datalist id="data-ciudad">
             {
              dataCiudades.filter(({estado})=>(estadoState === estado )).map((value)=>(
                value.ciudades.map((ciudades) =>(         
                     <option key={ estado + ciudades } value={ ciudades }> {ciudades} </option>
                  ))))             
            } 

{/*           {dataCiudades.map(({estado, ciudades, id_estado}) => (

                  ciudades.map((value)=>(
                    <option key={ id_estado+value } value={value}> {value} </option>
                  ))          

                  ))}
                  */}          
          </datalist>
          { errors["ciudad"] && (
                <label htmlFor={"ciudad"} className="error">
                  Este campo es obligatorio
                </label>
              )}
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
