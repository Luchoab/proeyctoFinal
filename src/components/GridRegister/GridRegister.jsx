import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCheck  } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
// import { useEffect } from 'react';


// //aqui puso la url como una constante pero esta en el home

// const [users,setUsers] = useState([]);

// useEffect(()=> {
//   addUsers();
// },[])

// async function addUsers(){
//   try {
//     const userDB = await axios.post(`${URL}/users`);
//     console.log(userDB.response)
//   } catch (error) {
//     console.log(error.response)
//   }
// }




export const GridRegister = () => {

  //HOOKS 
  const [name,setName]=useState('')
  const [lastname,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')

  //CREO UNA VARIABLE PARA CREAR USUARIO(SGUN VDEO YT)
  // function AddNewUsers(){
  //   var usuario = {
  //     name: name,
  //     lastname: lastname,
  //     email: email,
  //     password: password,
  //     confirmPassword: confirmPassword
  //   }
  // }



  async function AddNewUsers (evt){
    try {
    
      evt.preventDefault();
      
      const el = evt.target.elements;

      if(el.password.value !== el.confirmPassword.value) {
        alert('Las contraseñas no coinciden')
        return
      }

      console.log(evt);
      const data = {
        name: el.name.value,
        lastName: el.lastName.value,
        email: el.email.value,
        password: el.password.value
      }
      // const { nameInput, surInput, emailInput, passwordInput, passwordRepeatInput} = data;
      const registerData = await axios.post(`http://localhost:3001/users`, data);
      console.log(registerData)
      //aqui hace un local storage con el json del registro

      evt.target.reset()
    } catch (error) {
      console.log(error)
    }
    
  }

// async function AddNewUsers(e){

//     console.log(`agregar usuario nuevo`, nameInput.current.value, surInput.current.value, emailInput.current.value, passwordInput.current.value, passwordRepeatInput.current.value)
// }


  return (
    <Container fluid > 
      <Row>
      <h1 className="titleRegister offset-2"> Registrate </h1>
        {/* <Col sm={8} className = "formRegistro"> */}
        
    {/* //FORMULARIO DE REGISTRO// */}
    <Form className="formRegisto w-50 p-4" onSubmit={AddNewUsers} >
      <Row>
      <Col xs={12} lg={6}>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Ingrese su nombre"  name='name' maxLength={20} minLength={3}/>
      </Form.Group>
      </Col>
      <Col  xs={12} lg={6}>
    <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control value={lastname} onChange={(e)=>{setLastName(e.target.value)}} type="text" placeholder="Ingrese su apellido" name='lastName' maxLength={20} minLength={3}/>
      </Form.Group>
      </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Direccion de correo electronico</Form.Label>
        <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}}  type="email" placeholder="Ingrese email" name='email' maxLength={30}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Ingrese contraseña" name='password' maxLength={10}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" placeholder="Confirme su contraseña" name='confirmPassword' maxLength={10}/>
      </Form.Group>
  
      <Button className="button-reg" variant="outline-dark" type="submit">
        Registrarme
      </Button>
    </Form>
    
        {/* </Col> */}
        <Col sm={6} className="itemsRegistro">
          
          <Row className='rowItems'>
          
          <h4> <FaCheck style={{color: 'brown', fontSize: '30px'}} />  Recibi los menus diarios a tu mail</h4>
          </Row>

          <Row className='rowItems'>
          
            <h4> <FaCheck style={{color: 'brown', fontSize: '30px'}}/> Obtené descuentos especiales para suscriptores</h4>
          </Row>

            <Row className='rowItems'>
         
            <h4>  <FaCheck style={{color: 'brown', fontSize: '30px'}}/> Envios gratis</h4>
          </Row>

          <Row className='rowItems'>
          
            <h4 > <FaCheck style={{color: 'brown', fontSize: '30px'}}/> Envios prioritarios</h4>
          </Row>
        
        </Col>
      </Row> 
      
    </Container>
  );
}

