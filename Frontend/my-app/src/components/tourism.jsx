import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import video from "../video/El Kef Tunisia تونس الكاف (1).mp4";
import './tourism.css';
import StarRating from './StarRating';
import Button from 'react-bootstrap/Button';

function Tourism() {
  const [data, setData] = useState([]);
  const [editingPlaceId, setEditingPlaceId] = useState(null);
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedImageUrl, setUpdatedImageUrl] = useState('');
  const [updatedContact, setUpdatedContact] = useState('');
  const [updatedTourismCategory, setUpdatedTourismCategory] = useState('');
  const [updatedActivities, setUpdatedActivities] = useState('');
  const [updatedLocation, setUpdatedLocation] = useState('');
  const [updatedEntryFee, setUpdatedEntryFee] = useState('');
  const [updatedOpeningHours, setUpdatedOpeningHours] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/tourism/getAll')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDeleteClick = async (placeId) => {
    try {
      await axios.delete(`http://localhost:3001/tourism/delete/${placeId}`);
      setData(prevData => prevData.filter(e => e.place_id !== placeId));
    } catch (error) {
      console.error('Error deleting place:', error);
    }
  };

  const handleUpdateClick = (placeId) => {
    setEditingPlaceId(placeId);
    const placeToUpdate = data.find(e => e.place_id === placeId);

    setUpdatedDescription(placeToUpdate.description);
    setUpdatedImageUrl(placeToUpdate.image_url);
    setUpdatedContact(placeToUpdate.contact_info);
    setUpdatedLocation(placeToUpdate.location);
    setUpdatedTourismCategory(placeToUpdate.tourism_category);
    setUpdatedActivities(placeToUpdate.activities);
    setUpdatedEntryFee(placeToUpdate.entry_fee);
    setUpdatedOpeningHours(placeToUpdate.opening_hours);
  };

  const handleUpdateSubmit = (placeId) => {
    axios
      .put(`http://localhost:3001/tourism/update/${placeId}`, {
        image_url: updatedImageUrl,
        description: updatedDescription,
        location: updatedLocation,
        contact_info: updatedContact,
        tourism_category: updatedTourismCategory,
        activities: updatedActivities,
        entry_fee: updatedEntryFee,
        opening_hours: updatedOpeningHours
      })
      .then((response) => {
        console.log(response.data);
        const updatedData = data.map((item) =>
          item.place_id === placeId
            ? {
                ...item,
                image_url: updatedImageUrl,
                description: updatedDescription,
                location: updatedLocation,
                contact_info: updatedContact,
                tourism_category: updatedTourismCategory,
                activities: updatedActivities,
                entry_fee: updatedEntryFee,
                opening_hours: updatedOpeningHours
              }
            : item
        );
        setData(updatedData);
        setEditingPlaceId(null);
      })
      .catch((err) => console.error('Error updating place:', err));
  };

  const handleCancelUpdate = () => {
    setEditingPlaceId(null);
  };

  const handleRatingClick = (clickedRating, placeId) => {
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
                        <label htmlFor="newImage">New Image URL:</label>
                        <input
                          type="text"
                          id="newImage"
                          value={updatedImageUrl}
                          onChange={(e) => setUpdatedImageUrl(e.target.value)}
                        />
                        <label htmlFor="newDescription">New Description:</label>
                        <input
                          type="text"
                          id="newDescription"
                          value={updatedDescription}
                          onChange={(e) => setUpdatedDescription(e.target.value)}
                        />
                        <label htmlFor="newLocation">New Location:</label>
                        <input
                          type="text"
                          id="newLocation"
                          value={updatedLocation}
                          onChange={(e) => setUpdatedLocation(e.target.value)}
                        />
                        <label htmlFor="newActivities">New Activities:</label>
                        <input
                          type="text"
                          id="newActivities"
                          value={updatedActivities}
                          onChange={(e) => setUpdatedActivities(e.target.value)}
                        />
                        <label htmlFor="newCategory">New Tourism Category:</label>
                        <input
                          type="text"
                          id="newCategory"
                          value={updatedTourismCategory}
                          onChange={(e) => setUpdatedTourismCategory(e.target.value)}
                        />
                        <label htmlFor="newEntryFee">New Entry Fee:</label>
                        <input
                          type="text"
                          id="newEntryFee"
                          value={updatedEntryFee}
                          onChange={(e) => setUpdatedEntryFee(e.target.value)}
                        />
                        <label htmlFor="newOpeningHours">New Opening Hours:</label>
                        <input
                          type="text"
                          id="newOpeningHours"
                          value={updatedOpeningHours}
                          onChange={(e) => setUpdatedOpeningHours(e.target.value)}
                        />
                      </div>
                    ) : (
                      <div>
                        <Button variant="primary" className='button-89' onClick={() => handleDeleteClick(e.place_id)}>Delete</Button>
                        <Button variant="secondary" className='button-89' onClick={() => handleUpdateClick(e.place_id)}>Update</Button>
                      </div>
                    )}
                  </div>
                  {editingPlaceId === e.place_id && (
                    <div>
                      <Button variant="success" className='button-89' onClick={() => handleUpdateSubmit(e.place_id)}>Update</Button>
                      <Button variant="danger" className='button-89' onClick={handleCancelUpdate}>Cancel</Button>
                    </div>
                  )}
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
