import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';

import Navbar from './navbar';
import Hamburger from './hamburger';

function App() {

    // Back to Top Button
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            // 300 is too long, so I changed it to 100
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    

    // if the screen size is mobile, then show the hamburger menu. Otherwise, show the navbar.
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Check on initial render
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="app"  id="home">
            {isMobile ? (
                // <h1>The screen size is mobile.</h1>
                <Hamburger />
            ) : (
                // <h1>The screen size is not mobile.</h1>
                <Navbar />
            )}

            <div className="main-container">
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
                <div id='about-me' className='about-me'>

                    <h2>About Me</h2>
                    <div className='about-me-content'>
                        {/* another container to keep the circle shape of the image */}
                        <div className="about-me-image-container">
                            <img src="./images/profile.png" alt="Mubeen Khan" className="about-me-image" />
                        </div>

                        <div>
                            <h3>Mubeen Khan</h3>
                            <p>
                                I am a Computer Science student at Concordia University. I am passionate about learning new technologies and building software applications. I am currently learning web development and eager to explore new technologies.
                            </p>
                        </div>
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
                        <p>The project aims to design a web-based IoT dashboard that integrates course-learned technologies to capture and analyze data.</p>
                        <div className="project-image-container">
                            <img src="./images/projects/iotdashboard.png" alt="Project" className="project-image" />
                        </div>
                        <a className='visit-repo-button' href='https://github.com/Mubeenkh/IoT_Final_Project' target='_blank'>Visit Repo</a>
                    </div>

                    <div className='project-item'>
                        <h3>FitWork</h3>
                        <p>The goal of this project and app is to help users find exercises for specific muscles, learn about healthy foods with important nutrients, and discover stretches and warm-ups to do before and after a workout.</p>
                        <div className="project-image-container">
                            <img src="./images/projects/fitwork.png" alt="Project" className="project-image" />
                        </div>
                        <a className='visit-repo-button' href='https://github.com/Mubeenkh/FitWork' target='_blank'>Visit Repo</a>
                    </div>

                    <div className='project-item'>
                        <h3>Inventory Management Website</h3>
                        <p>Created an inventory management system with a user-friendly interface and robust backend using PHP, HTML, CSS, and JavaScript.</p>
                        <div className="project-image-container">
                            <img src="./images/projects/sweemory.png" alt="Project" className="project-image" />
                        </div>
                        <a className='visit-repo-button' href='https://github.com/Deven8378/TeamProjectW23' target='_blank'>Visit Repo</a>
                    </div>

                    <div className='project-item'>
                        <h3>GUI-based Game Application</h3>
                        <p>Veritas is a GUI-based game where users answer topic-based questions within a set time to earn points. The goal is to test knowledge while keeping players entertained.</p>
                        <div className="project-image-container">
                            <img src="./images/projects/veritas.png" alt="Project" className="project-image" />
                        </div>
                        <a className='visit-repo-button' href='https://github.com/Mubeenkh/VeritasProject' target='_blank'>Visit Repo</a>
                    </div>

                    <div className='project-item'>
                        <h3>Game Programming</h3>
                        <p></p>
                        <div className="project-image-container">
                            <img src="./images/projects/game-prog-project.png" alt="Project" className="project-image" />
                        </div>
                        <a className='visit-repo-button' href='https://github.com/Mubeenkh/VeritasProject' target='_blank'>Visit Repo</a>
                    </div>

                </div>
            </div>


            {/* Contact */}
            <div id="contact" className='contact'>
                <h2>Contact</h2>
                <p><strong>Email:</strong> mubkhan01@gmail.com</p>
                {/* <p><strong>Phone:</strong> (123) 456-7890</p> */}
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mubeen-khan-75b48511a" target="_blank" rel="noopener noreferrer">linkedin.com/in/mubeen-khan</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/Mubeenkh" target="_blank" rel="noopener noreferrer">github.com/Mubeenkh</a></p>
            </div>

            {showButton && (
                // <button onClick={scrollToTop} className='back-to-top'>
                //     ↑
                // </button>
                <a href='#home' onClick={scrollToTop} className='back-to-top'>
                    ↑
                </a>
            )}

        </div>
    )
}

export default App;