import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Optional CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">🎒 College Lost & Found</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/report">Report Lost</Link>
          <Link to="/found">Report Found</Link>
          <Link to="/items">Browse Items</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Lost Something? Found Something?</h1>
        <p>Connect with your college community to return or retrieve lost belongings.</p>
        <div className="hero-buttons">
          <Link to="/report" className="btn">Report Lost Item</Link>
          <Link to="/found" className="btn btn-outline">Report Found Item</Link>
        </div>
      </section>

      {/* Preview of Lost & Found Items */}
      <section className="items-preview">
        <h2>Recent Lost & Found</h2>
        <div className="item-cards">
          {/* Replace with dynamic items from DB */}
          <div className="item-card">
            <img src="/images/lost-wallet.jpg" alt="Lost Wallet" />
            <h3>Black Leather Wallet</h3>
            <p>Lost near Library - Aug 18</p>
            {/* <Link to="/items/1" className="btn-sm">View</Link> */}
          </div>
          <div className="item-card">
            <img src="/images/found-id.jpg" alt="Found ID" />
            <h3>Found Student ID</h3>
            <p>Found in Cafeteria - Aug 20</p>
            {/* <Link to="/items/2" className="btn-sm">View</Link> */}
          </div>
          {/* Add more cards dynamically */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} College Lost & Found | Made with ❤️</p>
      </footer>
    </div>
  );
};

export default HomePage;
