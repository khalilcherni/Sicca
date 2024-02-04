import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; // Add this import

import video from "../video/El Kef Tunisia تونس الكاف (1).mp4";
import './Culture.css';
import StarRating from './StarRating';

function Places() {
  const [data, setData] = useState([]);
  const [editingPlaceId, setEditingPlaceId] = useState(null);
 
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedImageUrl, setUpdatedImageUrl] = useState('');
  const [updatecategory,setcategory]=useState("")
  const[updatelocation,setloc]=useState("")
  const[updatecontac,setcona]=useState("")

  useEffect(() => {
    axios.get('http://localhost:3001/cultural/getAll')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDeleteClick = async (placeId) => {
    try {
      await axios.delete(`http://localhost:3001/cultural/delete/${placeId}`);
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
    setcategory(placeToUpdate.cultural_category)
  setcona(placeToUpdate.contact_info)
  setloc(setloc.location)
  };

  const handleUpdateSubmit = (placeId) => {
    axios
      .put(`http://localhost:3001/cultural/update/${placeId}`, {
       
        image_url: updatedImageUrl,
        description: updatedDescription,
        cultural_category: updatecategory,
        location:updatelocation,
        contact_info:updatecontac

      })
      .then((response) => {
        console.log(response.data);
        const updatedData = data.map((item) =>
          item.place_id === placeId
            ? {
                ...item,
             image_url: updatedImageUrl,
        description: updatedDescription,
        cultural_category: updatecategory,
        location:updatelocation,
        contact_info:updatecontac
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
  }
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
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                  />
                  <label htmlFor="newDescription">New Description:</label>
                  <input
                    type="text"
                    id="newDescription"
                    value={updatedImageUrl}
                    onChange={(e) => setUpdatedImageUrl(e.target.value)}
                  />
                    <label htmlFor="newDescription">New Description:</label>
                  <input
                    type="text"
                    id="newDescription"
                    value={updatelocation}
                    onChange={(e) => setloc(e.target.value)}
                    
                  />
                    <label htmlFor="newDescription">New Description:</label>
                  <input
                    type="text"
                    id="newDescription"
                    value={updatecategory}
                    onChange={(e) => setcategory(e.target.value)}
                  />
                    <label htmlFor="newDescription">New Description:</label>
                  <input
                    type="text"
                    id="newDescription"
                    value={updatecontac}
                    onChange={(e) => setcona(e.target.value)}
                  />
               
                </div>
                
              ) : (
                <Card.Text>{e.description}</Card.Text>
              )}
          
              {editingPlaceId === e.place_id ? (
                <div>
                  <Button variant="success" id='button-89' onClick={() => handleUpdateSubmit(e.place_id)}>Update</Button>
                  <Button variant="danger"  id='button-89' onClick={handleCancelUpdate}>Cancel</Button>
                </div>
              ) : (
                <div>
                  <Button variant="primary"  id='button-89' onClick={() => handleDeleteClick(e.place_id)}>Delete</Button>
                  <Button variant="secondary"  id='button-89' onClick={() => handleUpdateClick(e.place_id)}>Update</Button>
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

export default Places;
