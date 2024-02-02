import React, { useState } from 'react';
import axios from 'axios';
import './Add.css'
function Add() {
  const [name, setname] = useState('');
  const [contact_info, setcontact_info] = useState('');
  const [description, setdescription] = useState('');
  const [image_url, setimage_url] = useState('');
  const [location, setlocation] = useState('');
  const [tourism_category, settourism_category] = useState('');
  const [activities, setactivities] = useState('');
  const handle = () => {
    const newprod = {
      name: name,
      contact_info: contact_info,
      description: description,
      image_url: image_url,
      location:location,
      tourism_category:tourism_category,
activities:activities,


    };

    console.log(newprod);

    axios
      .post(`http://localhost:3001/tourism/add`, newprod)
      .then((res) => {
        console.log(res.data);
        setname('');
        setcontact_info('');
        setdescription('');
        setimage_url('');
        setlocation('')
settourism_category('')
setactivities("")

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Place</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            value={image_url}
            onChange={(e) => setimage_url(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">contact_info:</label>
          <input
           placeholder='contact_info'
            className="form-control"
            value={contact_info}
            onChange={(e) => setcontact_info(e.target.value)}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">location:</label>
          <input
          placeholder='location'
            className="form-control"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>
          
        <div className="mb-3">
          <label className="form-label">tourism_category:</label>
          <input
          placeholder='tourism_category'
            className="form-control"
            value={tourism_category}
            onChange={(e) => settourism_category(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">activities:</label>
          <input
         placeholder='activities'
            className="form-control"
            value={activities}
            onChange={(e) => setactivities(e.target.value)}
          />
        </div>



        <button className='button-55' type="button"  onClick={handle}>
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
