import React, { useState, useEffect } from 'react';
 import axios from 'axios';
import Card from 'react-bootstrap/Card'; 
// import data from '../data.json'
import './Culture.css'
function Places() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cultural/getAll')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <div className="card-container">
        {data.map(e => (
          <div key={e.id} className="card-wrapper">
            <Card style={{ width: '18rem' }} className="custom-card">
              <Card.Img variant="top" src={e.imageUrl} />
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>{e.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;
