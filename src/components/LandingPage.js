import React from 'react';
import './LandingPage.css'; // Optional: Create a CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to the Coding Course Material</h1>
        <p>Your journey to becoming a coding expert starts here!</p>
      </header>

      <section className="course-materials">
        <h2>Course Materials</h2>
        <div className="course">
          <h3>1. HTML & CSS</h3>
          <ul>
            <li><a href="#html-intro">Introduction to HTML</a></li>
            <li><a href="#css-intro">Introduction to CSS</a></li>
            <li><a href="#html-css-project">Project: Build a Web Page</a></li>
          </ul>
        </div>
        <div className="course">
          <h3>2. JavaScript</h3>
          <ul>
            <li><a href="#js-basics">JavaScript Basics</a></li>
            <li><a href="#js-dom">Manipulating the DOM</a></li>
            <li><a href="#js-project">Project: Interactive Website</a></li>
          </ul>
        </div>
        <div className="course">
          <h3>3. React</h3>
          <ul>
            <li><a href="#react-basics">React Basics</a></li>
            <li><a href="#react-hooks">Understanding Hooks</a></li>
            <li><a href="#react-project">Project: Todo App</a></li>
          </ul>
        </div>
        <div className="course">
          <h3>4. Node.js</h3>
          <ul>
            <li><a href="#node-intro">Introduction to Node.js</a></li>
            <li><a href="#express">Building APIs with Express</a></li>
            <li><a href="#node-project">Project: RESTful API</a></li>
          </ul>
        </div>
      </section>
      
      <footer className="footer">
        <p>&copy; 2024 Coding Course. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
