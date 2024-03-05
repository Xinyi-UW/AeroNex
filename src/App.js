import React from 'react';
import './App.css'; // 确保引入了样式文件
import logo from './images/logo.png';
import mainImage from './images/droneimage2.png';
import smallImage1 from './images/funtion1.jpeg';
import smallImage2 from './images/funtion2.jpeg';
import smallImage3 from './images/function3.jpeg';
import rowImage1 from './images/droneimage2.png';
import rowImage2 from './images/droneimage2.png';
import rowImage3 from './images/droneimage2.png';
import team1 from './images/Ravi.jpeg';
import team2 from './images/Ankit.jpeg';
import team3 from './images/Xinyi.jpeg';
import uw from './images/University_of_Washington.png';
import gix_logo from './images/gix_logo.png';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div class="banner">AeroNex</div>
      </header>
      <div class="sub-banner">Aerial Intelligence for Precision Operations
      </div>
      <div className="main-image-container">
        <img src={mainImage} alt="Main" className="main-image" />
        <p className="main-image-description">AeroNex revolutionizes safety and efficiency in hazardous environments like construction sites through its advanced technology. Combining machine learning, computer vision, and drone capabilities, including real-time object detection with YOLO, it offers precise operation and risk minimization in areas unsafe for humans. Its drone control, simulation, and navigation technologies ensure accurate and reliable performance, making AeroNex an essential tool for enhancing operational safety and decision-making in challenging conditions. This innovative solution sets a new standard in using aerial technology to protect lives and optimize processes in dangerous locations.</p>
      </div>
     


      <h2 className="subtitle">Workflow</h2>
      <div className="images-task">
        <div>
          <img src={smallImage1} alt="Row 1" className="task-image" />
          <div className="text-container2">
            <p>Research is defined as the creation of new knowledge and/or the use of existing knowledge in a new.</p>
          </div>
          <a href="http://www.google.com"> <button className="button">Button 1</button> </a>
        </div>
        <div>
          <img src={smallImage2} alt="Row 2" className="task-image" />
          <div className="text-container2">
            <p>Research is defined as the creation of new knowledge and/or the use of existing knowledge in a new.</p>
          </div>
          <button className="button">Button 2</button>
        </div>
        <div>
          <img src={smallImage3} alt="Row 3" className="task-image" />
          <div className="text-container2">
            <p>Research is defined as the creation of new knowledge and/or the use of existing knowledge in a new.</p>
          </div>
          <button className="button">Button 3</button>
        </div>
      </div>





      <h2 className="subtitle">Research & Develop Team</h2>
      <div className="image-team">
        <div className="team">
          <img src={team1} alt="Row 1" className="team-image" />
          <p>Ravi</p>
          <div className="word">
          <p>Research is defined xxxxxx</p>
          </div>
        </div>
        <div className="team">
          <img src={team3} alt="Row 1" className="team-image" />
          <p>Xinyi Zhou</p>
          <div className="word">
          <p>Research is defined xxxxxxx</p>
          </div>
        </div>
        <div className="team">
          <img src={team2} alt="Row 3" className="team-image" />
          <p>Ankit Shaw:</p>
          <div className="word">
          <p>Research is defined xxxxxxx</p>
          </div>
          
        </div>
      </div>

      <img src={uw} className="uw" />


    </div>
  );
}

export default App;