import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <ul>
          <li>
            <a href="/">
              <img src="/" alt="BtechEdIT" />
            </a>
          </li>
          <li>
            <a>Semesters</a>
          </li>
          <li>
            <a href="/">Model Question</a>
          </li>
          <li>
            <a href="#">Past Questions</a>
          </li>
          <li>
            <a href="#">Course</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
