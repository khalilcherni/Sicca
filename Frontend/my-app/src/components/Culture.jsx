import React, { useState, useEffect } from 'react';
 import axios from 'axios';
import Card from 'react-bootstrap/Card'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
//  import data from '../data.json'
import video from "../video/El Kef Tunisia تونس الكاف (1).mp4";
import './Culture.css'
function Places() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cultural/getAll')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="background-container">
      <video id="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <div className="card-container">
          {data.map(e => (
            <div key={e.id} className="card-wrapper">
              <Card style={{ width: '18rem' }} className="custom-card">
                <Card.Img variant="top" src={e.image_url} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>{e.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Places;