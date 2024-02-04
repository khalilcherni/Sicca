import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function Details() {
  return (
    <div>
        <Card style={{ width: '18rem' }} className="custom-card">
                <Card.Img variant="top" src={e.image_url} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>{e.description}</Card.Text>
                  
                  </Card.Body>
              </Card>
    </div>
  )
}

export default Details