import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import MainPage from './main page';
import WeatherInfo from './weather';
import Tourism from './tourism';
import Places from './Culture';
import Historic from './historic';
import Add from './Add';
import ContactForm from './Book';
import axios from 'axios';
import './Navbar.css';

function BasicExample() {
  const [activeTab, setActiveTab] = useState('home');
  const [name, setName] = useState('');
  const [data, setData] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false); // New state variable

  const handleSearch = () => {
    axios
      .get(`http://localhost:3001/tourism/${name}`)
      .then((response) => {
        console.log('API Response:', response.data);
        setData(response.data);
        setSearchClicked(true); // Set searchClicked to true when data is received
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setData(null);
        setSearchClicked(true); // Set searchClicked to true even if there's an error
      });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  console.log('Current Data State:', data);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img className='op' src="https://cdn-icons-png.flaticon.com/128/7006/7006898.png" alt="" height="30" />
            Sicca Veneria
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="èbasic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => handleTabClick('home')}>
                Home
              </Nav.Link>
              <Nav.Link href="#weather" onClick={() => handleTabClick('Weather')}>
                Weather
              </Nav.Link>
              <Nav.Link href="#Tourism" onClick={() => handleTabClick('Tourism')}>
                Tourism
              </Nav.Link>
              <Nav.Link href="#Culture" onClick={() => handleTabClick('Culture')}>
                Culture
              </Nav.Link>
              <Nav.Link href="#Historic" onClick={() => handleTabClick('Historic')}>
                Historic
              </Nav.Link>
              <NavDropdown title="Details" id="basic-nav-dropdown">
                <NavDropdown.Item href="#ContactForm" onClick={() => handleTabClick('Book')}>
                  Book
                </NavDropdown.Item>
                <NavDropdown.Item href="#Add" onClick={() => handleTabClick('Add')}>
                  Add
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button variant="outline-success" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />

      {/* Render the received data only if searchClicked is true */}
      {searchClicked && data && (
        <div>
          <img src={data.image_url} alt="Place" />
          <div>Name: {data.name}</div>
          <div>Description: {data.description}</div>
          <div>Contact Info: {data.contact_info}</div>
          {/* Include other details you want to display */}
        </div>
      )}

      {/* Render components based on activeTab */}
      {activeTab === 'home' && <MainPage />}
      {activeTab === 'Weather' && <WeatherInfo />}
      {activeTab === 'Tourism' && <Tourism />}
      {activeTab === 'Culture' && <Places />}
      {activeTab === 'Historic' && <Historic />}
      {activeTab === 'Add' && <Add />}
      {activeTab === 'Book' && <ContactForm />}
    </div>
  );
}

export default BasicExample;
