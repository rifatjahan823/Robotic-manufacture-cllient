import React from 'react';
import './MyPortfolio.css'

const MyPortfolio = () => {
    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-10 mx-auto d-block shadow p-3 mb-5 bg-body rounded text-center'>
              <div className='portfolio'>
              <h1>I am Rifat Jahan</h1>
                    <p>Email:rifatjahan833@gmail.com</p>
                    <p>Education Bacground</p>
                    <p>H.S.C</p>
                    <h2>Skills</h2>
                    <p><span style={{fontWeight:"bold"}}>Expert:</span> React, React Bootstrap, Router, React Hook, REST API, Firebase, HTML, CSS, Bootstrap</p>
                    <p><span style={{fontWeight:"bold"}}>Comfortable:</span> JavaScript, ES6, MongoDB, Express, Node.js, Tailwind CSS, DaisyUI. </p>
                    <p><span style={{fontWeight:"bold"}}>Tools:</span> VS Code, Figma, Photoshop, Chrome Dev Tools, Heroku, Netlify, GitHub.</p>
                    <h2>My Projects</h2>
                    <div className='url'>
                    <p><a href="https://car-world-db4d0.web.app/" target="_blank" rel="noopener noreferrer">Car-Word</a></p>
                   <p><a href="https://heath-coach.web.app/" target="_blank" rel="noopener noreferrer">Heath-Coach</a></p>
                   <p><a href="https://project-03-bootstrap.netlify.app/" target="_blank" rel="noopener noreferrer">Wedding</a></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;