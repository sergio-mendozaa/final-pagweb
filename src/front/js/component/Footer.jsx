import React, { Component } from "react";
import "../../styles/footer.css";
export const Footer = () => (
  <>
    <footer>
      <div className="text">
        <h2>ABOUT CriptoSasun</h2>
        <div>
          <i className="fas fa-asterisk"></i>
        </div>
        <p>Aqui encontrará todas las maneras de contactar con nosotros</p>
      </div>
      <div className="contact-container">
        <div className="social-media">
          <h3>Follow Along</h3>
          <div className="links">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="newsletter">
          <h3>NewsLetter</h3>
          <form method="post">
            <input type="email" name="email" placeholder="Type Your Email" />
            <i className="fas fa-envelope"></i>
          </form>
        </div>
      </div>
    </footer>
  </>
);
export default Footer;
