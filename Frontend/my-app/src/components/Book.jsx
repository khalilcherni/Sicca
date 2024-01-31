import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../index.css';
import './book.css';

const ContactForm = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [arriver, setArriver] = useState('');
  const [depar, setDepar] = useState('');
  const [numberofpeople, setNumberofpeople] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');

  const sendMail = () => {
    const params = {
      name: fullname,
      email,
      arriver,
      depar,
      numberofpeople,
      message,
      date,
    };

    const serviceID = 'service_7y7ld3g'; // Replace with your EmailJS service ID
    const templateID = 'template_p5w2pcz'; // Replace with your EmailJS template ID
    const userID = '8OXmTdhTFKKhNB6mz'; // Replace with your EmailJS user ID

    emailjs
      .send(serviceID, templateID, params, userID)
      .then((res) => {
        setFullname('');
        setEmail('');
        setArriver('');
        setDepar('');
        setNumberofpeople('');
        setMessage('');
        setDate('');
        document.getElementById('alert').classList.add('alert');
        console.log(res);
        alert('Your message sent successfully!!');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contact-form-container">
      <div id="alert" className="alert">
        <h1>Book khnow</h1>
      </div>

      <label htmlFor="Fullname" className="form-label">
        Full Name:
      </label>
      <input
        className="form-input"
        placeholder="Your Full Name"
        id="Fullname"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />

      <label htmlFor="email_id" className="form-label">
        Email:
      </label>
      <input
        className="form-input"
        placeholder="Your Email"
        id="email_id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="arriver" className="form-label">
        Arrival Location:
      </label>
      <input
        className="form-input"
        placeholder="Arrival Location"
        id="arriver"
        value={arriver}
        onChange={(e) => setArriver(e.target.value)}
      />

      <label htmlFor="depar" className="form-label">
        Departure Location:
      </label>
      <input
        className="form-input"
        placeholder="Departure Location"
        id="depar"
        value={depar}
        onChange={(e) => setDepar(e.target.value)}
      />

      <label htmlFor="numberofpeople" className="form-label">
        Number of People:
      </label>
      <input
        className="form-input"
        placeholder="Number of People"
        id="numberofpeople"
        value={numberofpeople}
        onChange={(e) => setNumberofpeople(e.target.value)}
      />

      <label htmlFor="date" className="form-label">
        Date:
      </label>
      <input
        className="form-input"
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="message" className="form-label">
        Message:
      </label>
      <textarea
        className="form-textarea"
        id="message"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button className="button-89" onClick={sendMail}>
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
