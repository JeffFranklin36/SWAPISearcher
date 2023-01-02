import React from 'react';
import './home.css'
import logo from '../images/CocoJeff.jpg'

const Homepage = () => (
 <div className="homepage">
   <div className="picture">
     <img src={logo} alt="Me and my Dog Coco" />
   </div>
   <div className="bio">
     <p>
       Hi there! My name is Jeffrey and I am a coder who is learning and experimenting with web development. I love Star Wars, so creating this app was an easy combination for me to try out some new skills. I hope you enjoy using it!
     </p>
   </div>
 </div>
);

export default Homepage;
