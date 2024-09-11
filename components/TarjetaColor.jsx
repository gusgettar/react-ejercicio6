import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup,Row,Col,Container } from 'react-bootstrap';
import ItemColor from './ItemColor';

const TarjetaColor = ({color,borrarColor}) => {

 
    return (

      <ListGroup>{
        
        color.map((item,posicionColor)=> <ItemColor key={posicionColor} color={item} borrarColor={borrarColor}></ItemColor>)
      }
      </ListGroup>
     
      
    );
};

export default TarjetaColor;