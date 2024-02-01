import React, { useState } from 'react';
// import SearchBar from './SearchBar'; // Commented out the import statement for SearchBar
import './main page.css'; 

function MainPage() {
  const [testimonials] = useState([
    {
      text: "I absolutely loved exploring the nature of Dahmani! The abundance of springs and lakes, along with the historic Roman and Carthaginian sites, make it truly special.",
      author: "Emily Johnson"
    },

    {
        text: "استمتعت تمامًا باكتشاف طبيعة الكاف! وفرة الينابيع والبحيرات، جنبًا إلى جنب مع المواقع التاريخية الرومانية والكارثاغينية، تجعلها فريدة حقًا.",
        author: "سارة عبد الله"
      },
    {
      text: "The history and mines of Dejrissah fascinated me! Exploring the city's rich mining heritage was a memorable experience.",
      author: "Michael Smith"
    }
  ]);

  return (
    
    
    <div className="background-container">
    <div className="main-page-container">
      <section className="welcome-section">
        <h1>Welcome to Discover SICCA!</h1>
        <p>Explore the best attractions, landmarks, and cultural sites in our city.</p>
      </section>

      {/* <section className="search-section">
        <SearchBar />
      </section> */} 

<section className="featured-places-section">
  <h2>Featured Places</h2>
  <div className="featured-places">
    <div className="featured-place">
      <img src="https://www.nessma.tv/uploads/news/33a1acb019a7161b62259e4d9afefb6147.jpg" alt="Featured Place" />
      <h3>El Kasbah, El Kef</h3>
      <p>Discover the historic El Kasbah in the city of El Kef.</p>
    </div>
    <div className="featured-place">
      <img src="https://www.siccaveneria.com/build/uploads/images/5f2c88b83c70b106583011.jpg" alt="Featured Place" />
      <h3>Ore Mine, Dejrissah</h3>
      <p>Explore the historic ore mine in the city of Dejrissah.</p>
    </div>
    <div className="featured-place">
      <img src="https://www.webdo.tn/uploads/2018/03/Table-de-Jugurtha.jpg" alt="Featured Place" />
      <h3>Jughurtas Table, Kallat Snen</h3>
      <p>Experience the breathtaking Jughurtas Table in the city of Kallat Snen.</p>
    </div>
    <div className="featured-place">
      <img src="https://wildyness.com/uploads/0000/408/2022/05/12/ruines-el-kef-cap-adventurer-wildynesscom.jpg" alt="Featured Place" />
      <h3>Athibrus, Dahmani</h3>
      <p>Discover ancient Berber, Carthaginian, and Roman settlement  of Athibrus in the city of Dahmani.</p>
    </div>
    <div className="featured-place">
      <img src="https://voyage-tunisie.info/wp-content/uploads/2017/11/Barrage-Mell%C3%A8gue-Tunisie-800x500.jpg" alt="Barrage Malleg" />
      <h3>Barrage Malleg, Nebeur</h3>
      <p>Explore the Barrage Malleg, a dam located in the city of Nebeur.</p>
    </div>
  </div>
</section>



      <section className="categories-section">
        <h2>Explore by Category</h2>
        <div className="category-links">
          <a href="/tourism" className="category-link">Tourism</a>
          <a href="/cultural" className="category-link">Cultural</a>
          <a href="/historic" className="category-link">Historic</a>
        </div>
      </section>


      <section className="map-section">
  <h2>Map of El Kef Governorate</h2>
  <div className="map-container">
  <iframe
  title="Map of El Kef Governorate"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102156.61610166756!2d8.498572811839378!3d36.17076587811491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f4c26324f72b0f%3A0xf2e67e2d2c4eeab7!2sEl%20Kef%20Governorate!5e0!3m2!1sen!2stn!4v1643560882387!5m2!1sen!2stn"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>

  </div>
</section>

      <section className="testimonials-section">
        <h2>What People are Saying</h2>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>"{testimonial.text}"</p>
              <p>- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Discover?</h2>
        <p>Start exploring now or sign up for updates!</p>
        <a href="/explore" className="btn btn-primary">Explore Now</a>
      </section>

      <footer className="footer">
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>Email: info@discovermycity.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="social-links">
          <h3>Connect With Us</h3>
          <a href="https://www.facebook.com/discovermycity" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/discovermycity" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/discovermycity" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  </div>
  );
}

export default MainPage;
