import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/contactanos.css";
import Carga from "../component/Carga.jsx";
import Footer from "../component/Footer.jsx";
import Card from "../component/Card.jsx";
export const Contactanos = () => {
  const { store, actions } = useContext(Context);
  const cardRefs = useRef([]);
  useEffect(() => {
    const body = document.querySelector("body");

    const nav = document.querySelector("header nav");

    const navNavigationBarLi = document.querySelectorAll(
      "header nav .navigation-bar li"
    );
    const headerText = document.querySelector("header .text");
    const headerSection = document.querySelector("header");
    const aboutSection = document.querySelector(".about-us");

    const dots = document.querySelectorAll(".dots > div");
    const svgDown = document.querySelector("header .arrow-down");
    const svgUp = document.querySelector(".copyright .arrow-up");
    const menuImgs = document.querySelectorAll(
      ".menu .menu-image-container img"
    );
    const boxModel = document.querySelector(".menu .box-model");
    const menuImageContainer = document.querySelector(".menu-image-container");
    const boxModelArrow = document.querySelector(".menu .box-model .arrow");
    const boxModelImage = document.querySelector(".menu .box-model img");
    const pageTitle = document.querySelector("title");

    // remove loader

    // prevent links click hash

    // show active navigationbar li
    navNavigationBarLi.forEach((li) =>
      li.addEventListener("click", () => {
        const arr = Array.from(li.parentElement.children);
        arr.forEach((li) => li.classList.remove("active"));
        li.classList.add("active");
      })
    );

    // svg-up smooth scroll
    svgUp.addEventListener("click", () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });

    window.onscroll = function () {
      if (window.pageYOffset > headerSection.offsetHeight - 75) {
        nav.classList.add("active");
        // Cambiar el color del texto a negro
      } else {
        nav.classList.remove("active");
        // Restablecer el color del texto
      }

      // header welcome fade out and in
      if (window.pageYOffset > 0) {
        headerText.style.opacity = -window.pageYOffset / 300 + 1;
      }
      // home page JS
    };

    // home page JS
    if (pageTitle.text === "CriptoSasun") {
      // svg-down smooth scroll
      svgDown.addEventListener("click", () => {
        window.scroll({
          top: aboutSection.offsetTop - 30,
          behavior: "smooth",
        });
      });

      // dots smooth scroll
      dots.forEach((dot) =>
        dot.addEventListener("click", function () {
          window.scrollTo({
            top: document.querySelector(this.dataset.x).offsetTop - 100,
            behavior: "smooth",
          });
        })
      );

      // show box model
      menuImgs.forEach((img) =>
        img.addEventListener("click", function () {
          const arr = Array.from(this.parentElement.parentElement.children);

          arr.forEach((div) => div.classList.remove("active"));

          this.parentElement.classList.add("active");
          boxModel.classList.add("active");
          boxModelImage.src = this.src;
          boxModelImage.classList.add("active");
          body.classList.add("hide-scroll");
        })
      );

      // box model functions
      function boxModelFun(e) {
        // close box model
        if (
          e.code === "Escape" ||
          (e.target.tagName === "DIV" &&
            !e.target.classList.contains("arrow")) ||
          e.target.classList.contains("close")
        ) {
          boxModel.classList.remove("active");
          body.classList.remove("hide-scroll");
        }

        if (boxModel.classList.contains("active")) {
          if (
            e.code === "ArrowRight" ||
            e.code === "ArrowLeft" ||
            e.target.classList.contains("arrow-right") ||
            e.target.classList.contains("arrow-left")
          ) {
            const arr = Array.from(menuImageContainer.children);
            const active = arr.find((div) => div.classList.contains("active"));

            // change box model image
            if (
              e.target.classList.contains("arrow-right") ||
              e.code === "ArrowRight"
            ) {
              if (active.nextElementSibling === null) {
                active.parentElement.firstElementChild.classList.add("active");
                boxModelImage.src =
                  active.parentElement.firstElementChild.firstElementChild.src;
              } else {
                active.nextElementSibling.classList.add("active");
                boxModelImage.src =
                  active.nextElementSibling.firstElementChild.src;
              }
            }

            // change box model image
            else if (
              e.target.classList.contains("arrow-left") ||
              e.code === "ArrowLeft"
            ) {
              if (active.previousElementSibling === null) {
                active.parentElement.lastElementChild.classList.add("active");
                boxModelImage.src =
                  active.parentElement.lastElementChild.lastElementChild.src;
              } else {
                active.previousElementSibling.classList.add("active");
                boxModelImage.src =
                  active.previousElementSibling.firstElementChild.src;
              }
            }
            active.classList.remove("active");
          }
        }
      }

      window.addEventListener("keydown", boxModelFun);
      window.addEventListener("click", boxModelFun);
      boxModelArrow.addEventListener("click", boxModelFun);
    }
  });

  return (
    <>
      <Carga />
      <div className="dots">
        <div className="active one" data-x="header"></div>
        <div className="two" data-x=".recipes"></div>
        <div className="three" data-x=".fixed-image"></div>
      </div>
      <header className="header-tercera-pagina">
        <nav>
          <div className="logo">
            <Link to="/">
              <h4
                style={{
                  color: "black",
                  fontSize: "259%",
                  fontFamily: "'Satoshi', sans-serif",
                }}
              >
                Criptosasun
              </h4>
            </Link>
          </div>
          <div className="toggle">
            <span className="first"></span>
            <span className="middle"></span>
            <span className="last"></span>
          </div>
          <div
            className="navigation-bar"
            style={{ fontSize: "20px", marginLeft: "6.5cm" }}
          >
            <ul>
              <li className="active">
                <Link to="/">
                  Home<span className="underline"></span>
                </Link>
              </li>
              <li>
                <Link to="/noticias">
                  Noticias<span className="underline"></span>
                </Link>
              </li>

              <li>
                <Link to="/contactanos">
                  Contáctanos<span className="underline"></span>
                </Link>
              </li>

              <li>
                <Link to="/criptosasun">
                  Criptosasun<span className="underline"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="text" style={{ marginTop: "5%" }}>
          <h2>Contáctanos</h2>
          <h1>De manera fácil, rápida y sencilla</h1>
          <div className="arrow">
            <span className="left"></span>
            <i className="fas fa-asterisk"></i>
            <span className="right"></span>
          </div>
          <span>Te ayudaremos o te daremos asesoramiento</span>
          <div className="button">
            <button>Explore</button>
          </div>
        </div>

        <svg
          className="svg-down"
          width="192"
          height="61"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 160.7 61.5"
          enableBackground="new 0 0 160.7 61.5"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
          ></path>
        </svg>
        <div className="arrow-down"></div>
      </header>

      <div className="diagramatiempo">
        <section
          id="timeline"
          style={{
            marginBottom: "4cm",
            marginTop: "3cm",
            paddingTop: "3cm",
            paddingBottom: "3cm",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="text"
            style={{ marginLeft: "16%", marginTop: "-1cm" }}
          >
            <h2 style={{ marginLeft: "24%" }}>Estamos </h2>
            <h3 style={{ color: "#7B8FA1", marginLeft: "28%" }}>
              aquí para ti
            </h3>
            <div>
              <i className="fas fa-asterisk" style={{ marginLeft: "39%" }}></i>
            </div>
            <p style={{ textAlign: "center", marginLeft: "6%", width: "65%" }}>
              Te invitamos a explorar nuestras diversas redes sociales ubicadas
              en la parte inferior de esta página. Estas plataformas representan
              un canal accesible y eficaz para ponerte en contacto con nosotros,
              permitiéndote interactuar directamente con nuestro equipo y
              recibir respuestas a tus preguntas de manera oportuna. Además de
              facilitar la comunicación, nuestras redes sociales son una ventana
              hacia los numerosos proyectos en los que estamos involucrados. Con
              actualizaciones periódicas, compartimos información detallada
              sobre nuestros desarrollos en curso y los avances que estamos
              logrando. Al seguirnos, podrás mantenerse al día con todo lo que
              sucede en nuestra organización y el impacto que estamos teniendo
              en nuestra industria.
            </p>
            <div
              style={{
                display: "flex",
                marginTop: "2cm",
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Card
                imgSrc="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1688585004/instagram_fyjjke.png"
                href="https://www.instagram.com/criptosasun_energia/"
                linkText="Instagram"
              />
              <Card
                imgSrc="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1688632338/facebook_sqjzfp.png"
                href="https://www.facebook.com/profile.php?id=100094072074642"
                linkText="facebook"
              />
              <Card
                imgSrc="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1688632248/gorjeo_vqqkdj.png"
                href="https://twitter.com/criptoner_ "
                linkText="twitter"
              />
              <Card
                imgSrc="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1688632248/linkedin_qnwgci.png"
                href="https://www.linkedin.com/in/criptosasun-energ%C3%ADa-sl-533a8a281/"
                linkText="linkedin"
              />
            </div>
          </div>
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.7667268277746!2d-7.006639490209803!3d38.88357861138347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd16e474ee035b59%3A0xc75969aff5d6aa87!2sEscuela%20de%20Ingenier%C3%ADas%20Industriales!5e0!3m2!1ses!2ses!4v1687540841718!5m2!1ses!2ses"
        width="1878"
        height="430"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Footer />
      <div className="copyright">
        <svg
          className="svg-up"
          width="192"
          height="61"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 160.7 61.5"
          enableBackground="new 0 0 160.7 61.5"
          xmlSpace="preserve"
        >
          <path
            fill="#262526"
            d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
          ></path>
        </svg>
        <i className="fas fa-angle-double-up arrow-up"></i>
      </div>
    </>
  );
};
