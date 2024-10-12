import React from 'react';
import { Card,Form,ListGroupItem,Button } from 'react-bootstrap';

const ItemColor = ({listaColores,borrarAPI}) => {
    return (
        

        <ListGroupItem className='w-10'>
          
              
        <Card className='w-100'>
        <Card.Img variant="top" style={{backgroundColor: listaColores.nombreColor, width: '21rem'}} />
        <Card.Body>
          <Card.Title style={{color: listaColores.nombreColor}}>COLOR: {listaColores.nombreColor.toUpperCase()} </Card.Title>
          <Form.Control as="textarea" placeholder="" style={{backgroundColor: listaColores.nombreColor}} />
          <Card.Text>
            Esta es una tarjeta de color: {listaColores.nombreColor}
          </Card.Text>
          <Button className='btn-danger' onClick={()=>borrarAPI(listaColores._id)}>Borrar</Button>
          
        </Card.Body>
      </Card>
     
      
      </ListGroupItem>
      
    );
};

export default ItemColor;