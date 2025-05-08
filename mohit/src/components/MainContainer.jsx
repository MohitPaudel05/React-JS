import React from "react";
import "./MainContainer.css";

const MainContainer = () => {
  return (
    <div className="Main">
      
      <div className="leftContainer">
        <h2>Heading1</h2>
        <p>content</p>
        <img src="\images\TrafficLight.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, similique esse, expedita, assumenda dolor magni vel exercitationem vero dignissimos nostrum illum laudantium ipsa explicabo magnam libero itaque.</p>
      </div>
      <div className="rightContainer">
        <h2>HeadingRight</h2>
        <p>this is the right Container</p>
        <img src="\images\TrafficLight.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem iste voluptatum commodi quam nostrum at, neque illo, ullam aperiam cum ipsum ipsa enim deleniti adipisci!</p>
      </div>
    </div>
  );
};

export default MainContainer;
