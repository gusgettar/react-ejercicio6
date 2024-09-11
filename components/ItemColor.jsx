import React from 'react';
import { Card,Form,ListGroupItem,Button } from 'react-bootstrap';

const ItemColor = ({color,borrarColor}) => {
    return (
        

        <ListGroupItem className='w-25 d-flex'>
          
              
        <Card className='w-100'>
        <Card.Img variant="top" style={{backgroundColor: color}} />
        <Card.Body>
          <Card.Title style={{color: color}}>COLOR: {color} </Card.Title>
          <Form.Control as="textarea" placeholder="" style={{backgroundColor: color}} />
          <Card.Text>
            Esta es una tarjeta de color: {color}
          </Card.Text>
          <Button className='btn-danger' onClick={()=>borrarColor(color)}>Borrar</Button>
          
        </Card.Body>
      </Card>
     
      
      </ListGroupItem>
      
    );
};

export default ItemColor;