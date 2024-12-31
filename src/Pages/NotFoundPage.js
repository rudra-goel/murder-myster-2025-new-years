import React from 'react';
import './NotFoundPage.css'; // Import the CSS file

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't seem to exist.</p>
      {/* <a href="/" className="back-to-home">Back to Homepage</a> */}
    </div>
  );
}

export default NotFoundPage;