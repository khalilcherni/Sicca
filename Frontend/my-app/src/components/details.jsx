import React from 'react';

const ProductDetails = () => {
    // The details would ideally come from the state or props for dynamic content.
    // For demonstration, these are hardcoded.
  
    return (
      <div className="product-details">
        <div className="product-image">
          <img src="https://imgs.search.brave.com/DOUwBNMjSvLwz7zJPr4G8OpQpvz0I0bTr8Wbqbb7VY4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/MDc3NTIzNS9waG90/by90d28tY2F0cy1z/aXR0aW5nLW9uLWEt/Y2F0LXRyZWUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW5i/VnU3MHRGWnh4eHha/TXdDU0VqWGxtNDd4/ZGp6QmFuNmVKYjdB/UXV1VWs9" alt="Luxury Cat Tree" />
        </div>
        <div className="product-info">
          <h1></h1>
          <p>Give your cat the ultimate place to climb, scratch, and rest with our luxury cat tree.</p>
          <h2>Price : $129.99</h2>
          <button>Add to Cart</button>
        </div>
        
      </div>
    );
}

export default ProductDetails;
