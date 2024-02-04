import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Details({ switchView, place }) {
  return (
    <div>
      <Card style={{ width: '18rem' }} className="custom-card">
        <Card.Img
          onClick={() => switchView('Culture')}     
          variant="top"
          src={place.image_url}
        />
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Text>{place.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Details;