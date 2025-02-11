import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {ReactTyped} from 'react-typed';

import './index.css';

function App() {

  // Dark Mode and Light Mode
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="app">

      {/* Navbar */}
      {/* <nav className='navbar'>
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> */}
      
      <div className="main-container">

        <div className="header">
          <h1>Welcome to my Portfolio</h1>
          {/* Button for Dark Mode and Light Mode */}
          <button onClick={toggleTheme}>
            {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          </button>
        </div>

        <div className="animation-typing">
          <ReactTyped
          strings={[
            "Hi, my name is Mubeen Khan",
            "I am a Computer Science Student",
            "No... I am not related to KhanAcademy",
          ]}
          typeSpeed={30}
          backSpeed={50}
          backDelay={2000}
          loop
          />
        </div>

        {/* About-Me */}
        <div className='about-me'>

          <h2>About Me</h2>
          <div className='about-me-content'>
            {/* another container to keep the circle shape of the image */}
            <div className="about-me-image-container">
              <img src="./images/profile2.png" alt="Mubeen Khan" className="about-me-image" />
            </div>

            <p>
              I am a Computer Science student at Concordia University. I am passionate about learning new technologies and building software applications. I am currently learning web development and looking for internships to gain experience.
            </p>
          </div>

        </div>


      </div>
      

      {/* Education */}
      <div id="education" className='education'>
        <h2>Education</h2>
        <div className='education-item'>
          <h3>Concordia University</h3>
          <p>Bachelor of Computer Science</p>
          <p>2024 - Present</p>
        </div>
        <div className='education-item'>
          <h3>Vanier College</h3>
          <p>Computer Science and Technology</p>
          <p>2021 - 2024</p>
        </div>
      </div>

      {/* Skills */}
      <div id="skills" className='skills'>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>Flutter</li>
          <li>Dart</li>
          <li>Python</li>
          <li>C#</li>
          <li>Java</li>
          <li>React</li>
        </ul>
      </div>
      
      <div id="projects" className='projects'>
          <h2>Projects</h2>
          <div className='projects-grid'>
            <div className='project-item'>
              <h3>Web-based IoT Dashboard</h3>
              <p>Developed a web-based dashboard to monitor and control IoT devices in real-time using Python and C++.</p>
              <div className="project-image-container">
                <img src="./images/profile.png" alt="Project" className="project-image" />
              </div>
            </div>

            <div className='project-item'>
              <h3>Inventory Management Website</h3>
              <p>Created an inventory management system with a user-friendly interface and robust backend using PHP, HTML, CSS, and JavaScript.</p>
              <div className="project-image-container">
                <img src="./images/profile.png" alt="Project" className="project-image" />
              </div>
            </div>

            <div className='project-item'>
              <h3>Project</h3>
              <p>Description.</p>
              <div className="project-image-container">
                <img src="./images/profile.png" alt="Project" className="project-image" />
              </div>
            </div>

            <div className='project-item'>
              <h3>Project</h3>
              <p>Description.</p>
              <div className="project-image-container">
                <img src="./images/profile.png" alt="Project" className="project-image" />
              </div>
            </div>
            
          </div>
        </div>


      {/* Contact */}
      <div id="contact" className='contact'>
        <h2>Contact</h2>
        <p><strong>Email:</strong> mubkhan01@gmail.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mubeen-khan-75b48511a" target="_blank" rel="noopener noreferrer">linkedin.com/in/mubeen-khan</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Mubeenkh" target="_blank" rel="noopener noreferrer">github.com/Mubeenkh</a></p>
      </div>


    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
