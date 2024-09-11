import React from 'react';
import { Card,Form,InputGroup,Button, CardTitle,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import TarjetaColor from '../components/TarjetaColor';



const App = () => {
  
 const colorLocalStorage = JSON.parse(localStorage.getItem('colores') || [])
  const [color, setColor] = useState()
 const [listaColores, setListaColores] =  useState(colorLocalStorage)

 
 useEffect(()=>{
  
  localStorage.setItem('colores', JSON.stringify(listaColores))
 
}, [listaColores])

 const borrarColor = (color)=>{
  const coloresActualizados = listaColores.filter((item)=>item!==color)
  setListaColores(coloresActualizados)
 


 }
 


  const handleColors = (e)=>{
   e.preventDefault()
  
    setListaColores([...listaColores, color])
    localStorage.setItem('colores', JSON.stringify(listaColores))
    
  }

  
  
  return (
    <>
    <Container className='d-flex w-50 justify-content-center'>
    <div>
      
      
    <Card>
      <CardTitle className='text-center'>Administrador de colores</CardTitle>
      <Form.Control as="textarea" placeholder="" style={{backgroundColor: color}} />
      <Card.Body>
      <InputGroup className="mb-3">
        
        <Form.Control
          placeholder="Color"
          aria-label="Color"
          aria-describedby="basic-addon1"
          onChange={(e)=>setColor(e.target.value)}
          />
        </InputGroup>
        <Button variant="primary" onClick={handleColors}>Guardar</Button>
        <Card.Text>
          Aqui puedes elegir un color para guardar una paleta de colores.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          </Container>
    <TarjetaColor color={listaColores} borrarColor={borrarColor}></TarjetaColor>
    </>
  );
};

export default App;