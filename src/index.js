import React from 'react';
import ReactDOM from 'react-dom/client';
import {ReactTyped} from 'react-typed';

import './index.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Welcome to my Portfolio</h1>
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

      {/* Education */}
      <div className='education'>
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
      <div className='skills'>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Flutter</li>
        </ul>
      </div>

      {/* Contact */}
      <div className='contact'>
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
