// Tourism.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import video from "../video/El Kef Tunisia تونس الكاف (1).mp4";
import './tourism.css';
import StarRating from './StarRating'; // Adjust the path based on your file structure

function Tourism() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/tourism/getAll')
      .then(res => {
        console.log(res.data); // Log the data to check its structure
        setData(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  const handleRatingClick = (clickedRating, placeId) => {
    // Update the rating in your data based on placeId
    setData(prevData => prevData.map(e => (e.place_id === placeId ? { ...e, rating: clickedRating } : e)));
  };
  return (
    <div className="background-container">
      <video id="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
       
      </video>
      <div>
        <div className="card-container">
        {data.map(e => (
            <div key={e.place_id} className="card-wrapper">
              <Card style={{ width: '18rem' }} className="custom-card">
                <Card.Img variant="top" src={e.image_url} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>{e.description}</Card.Text>
                  <StarRating rating={e.rating} onRatingClick={(clickedRating) => handleRatingClick(clickedRating, e.place_id)} />
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tourism;
