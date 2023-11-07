import React from 'react';
import NavBar from './NavBar'; // Assuming you have a NavBar component

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container1">
        <div className="row stuff">
          <div className="col-lg-6">
            <img
              src="/public/Yandex Music Logo (PNG1080p) - Vector69Com.png"
              alt="Your Logo"
            />
          </div>
          <div className="col-lg-6 welcome-content">
            
              <h1>Welcome to Album Reviews</h1>
              <p>
                Discover and review the latest music albums. Join our
                community to share your thoughts and connect with music lovers
                around the world.
              </p>
              <p>Sign up to get started!</p>
              {/* Add a sign-up button or link here */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
