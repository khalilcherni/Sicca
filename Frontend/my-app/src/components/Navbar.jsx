import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import MainPage from './main page';
import WeatherInfo from './weather';


// Replace with your actual logo path

function BasicExample() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here using the searchTerm state
    console.log('Search Term:', searchTerm);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src="" alt="" height="30" />
            Tunisian Press
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => handleTabClick('home')}>
                Home
              </Nav.Link>
              <Nav.Link href="#weather" onClick={() => handleTabClick('Weather')}>
                Weather
              </Nav.Link>
              <Nav.Link href="#sports" onClick={() => handleTabClick('sports')}>
                Sports
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => handleTabClick('politics')}>
                Politics
              </Nav.Link>
              <Nav.Link href="#music" onClick={() => handleTabClick('music')}>
                Music
              </Nav.Link>
              <Nav.Link href="#radio" onClick={() => handleTabClick('radio')}>
                Radio
              </Nav.Link>
              <Nav.Link href="#tv" onClick={() => handleTabClick('tv')}>
                TV
              </Nav.Link>

              <NavDropdown title="Details" id="basic-nav-dropdown">
                <NavDropdown.Item href="#ContactForm" onClick={() => handleTabClick('contact')}>
                  Contact us
                </NavDropdown.Item>
                <NavDropdown.Item href="#Add" onClick={() => handleTabClick('Add')}>
                  Add
                </NavDropdown.Item>
                <NavDropdown.Item href="#Aboutus" onClick={() => handleTabClick('Aboutus')}>
                  About Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />

      {activeTab === 'home' && <MainPage />}
      {activeTab === 'Weather' && <WeatherInfo />}
    
    </div>
  );
}

export default BasicExample;