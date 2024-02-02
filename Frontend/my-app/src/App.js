import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/main page';
import ContactForm from './components/Book';
import Historic from './components/historic';
import Tourism from './components/tourism';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/historic" element={<Historic />} />
          <Route path="/add" element={<Add />} />
          <Route path="/tourism" element={<Tourism />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
