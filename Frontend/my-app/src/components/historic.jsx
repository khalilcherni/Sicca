import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import video from "../video/El Kef Tunisia تونس الكاف (1).mp4";
import './historic.css';
import StarRating from './StarRating';

function Historic() {
  const [data, setData] = useState([]);
  const [editingPlaceId, setEditingPlaceId] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedImageUrl, setUpdatedImageUrl] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/historic/getAll')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleUpdateClick = (placeId) => {
    setEditingPlaceId(placeId);
    const placeToUpdate = data.find(e => e.place_id === placeId);
    setUpdatedName(placeToUpdate.name);
    setUpdatedDescription(placeToUpdate.description);
    setUpdatedImageUrl(placeToUpdate.image_url);
  };

  const handleDeleteClick = async (placeId) => {
    try {
      await axios.delete(`http://localhost:3001/historic/delete/${placeId}`);
      setData(prevData => prevData.filter(e => e.place_id !== placeId));
    } catch (error) {
      console.error('Error deleting place:', error);
    }
  };

  const handleUpdateSubmit = async () => {
    try {
      await axios.put(`http://localhost:3001/historic/update/${editingPlaceId}`, {
        name: updatedName,
        description: updatedDescription,
        image_url: updatedImageUrl,
      });

      // Fetch updated data after successful update
      const updatedData = await axios.get('http://localhost:3001/historic/getAll');
      setData(updatedData.data);
      setEditingPlaceId(null);
    } catch (error) {
      console.error('Error updating place:', error);
    }
  };

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
                  <div>
                    {editingPlaceId === e.place_id ? (
                      <div>
                        <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
                        <input type="text" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
                        <input type="text" value={updatedImageUrl} onChange={(e) => setUpdatedImageUrl(e.target.value)} />
                        <button onClick={handleUpdateSubmit}>Submit Update</button>
                      </div>
                    ) : (
                      <div>
                        <button onClick={() => handleUpdateClick(e.place_id)}>Update</button>
                        <button onClick={() => handleDeleteClick(e.place_id)}>Delete</button>
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Historic;
