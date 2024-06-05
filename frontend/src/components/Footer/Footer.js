import React from "react";
import './Footer.css';
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="first-col">
        <h1 className="company-name">QEstate Homes</h1>
        <div className="company-description">
          Adipisicing est eu proident quis id dolore laborum qui Lorem nostrud
          ea incididunt duis. Exercitation ullamco id quis qui non. Qui
          voluptate dolore quis aliqua laborum in cupidatat incididunt et. 
        </div>
        
      </div>
      <div className="second-col">
        <h1 className='link-header'>Contact</h1>
        <ul className='link-items'>
            <li>Bengaluru, India</li>
            <li>qestate@gmail.com</li>
            <li>+91 8765432190</li>
            <li>0234567898</li>
        </ul>
      </div>
    </div>
  );
}
