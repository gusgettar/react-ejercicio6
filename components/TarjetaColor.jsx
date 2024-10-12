import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup,Row,Col,Container } from 'react-bootstrap';
import ItemColor from './ItemColor';

const TarjetaColor = ({listaColores,  borrarAPI}) => {

 
    return (

      <ListGroup className=' d-flex flex-row flex-wrap gap-1 my-4 mx-2 align-content-between container-fluid'>{
        
        listaColores.map((item,posicionColor)=> <ItemColor key={posicionColor} listaColores={item} borrarAPI={borrarAPI}></ItemColor>)
      }
      </ListGroup>
     
      
    );
};

export default TarjetaColor;