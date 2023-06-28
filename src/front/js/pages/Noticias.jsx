import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/noticias.css";
import Carga from "../component/Carga.jsx";
export const Noticias = () => {
  const { store, actions } = useContext(Context);
  const cardRefs = useRef([]);
  useEffect(() => {
    const body = document.querySelector("body");
    const loader = document.querySelector(".loader-wrap");
    const links = document.querySelectorAll('a[href="#"]');
    const nav = document.querySelector("header nav");
    const navToggle = document.querySelector("header nav .toggle");
    const navSpanMiddle = document.querySelector("header nav .toggle .middle");
    const navNavigationBar = document.querySelector(
      "header nav .navigation-bar"
    );
    const navNavigationBarLi = document.querySelectorAll(
      "header nav .navigation-bar li"
    );
    const headerText = document.querySelector("header .text");
    const headerSection = document.querySelector("header");
    const aboutSection = document.querySelector(".about-us");
    const recipeSection = document.querySelector(".recipes");
    const menuSection = document.querySelector(".menu");
    const fixedImageSection = document.querySelector(".fixed-image");
    const footerSection = document.querySelector("footer");
    const dotOne = document.querySelector(".dots .one");
    const dotTwo = document.querySelector(".dots .two");
    const dotThree = document.querySelector(".dots .three");
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
    links.forEach((link) =>
      link.addEventListener("click", function (e) {
        e.preventDefault();
      })
    );

    // toggle hamburger menu button
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navSpanMiddle.classList.toggle("hide");
      navNavigationBar.classList.toggle("show");
    });

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
      if (pageTitle.text === "CriptoSasun") {
        //change dots background color
        if (window.pageYOffset < headerSection.offsetHeight * 0.5) {
          dots.forEach((dot) => dot.classList.remove("black"));
          dotTwo.classList.remove("active");
          dotOne.classList.add("active");
        } else if (
          window.pageYOffset > headerSection.offsetHeight * 0.5 &&
          window.pageYOffset < recipeSection.offsetTop * 0.72
        ) {
          dots.forEach((dot) => dot.classList.add("black"));
        } else if (
          window.pageYOffset > recipeSection.offsetTop * 0.75 &&
          window.pageYOffset < menuSection.offsetTop * 0.81
        ) {
          dots.forEach((dot) => dot.classList.remove("black"));
          dotOne.classList.remove("active");
          dotThree.classList.remove("active");
          dotTwo.classList.add("active");
        } else if (
          window.pageYOffset > menuSection.offsetTop * 0.81 &&
          window.pageYOffset < fixedImageSection.offsetTop * 0.86
        ) {
          dots.forEach((dot) => dot.classList.add("black"));
          dotThree.classList.remove("active");
          dotTwo.classList.add("active");
        } else if (
          window.pageYOffset > fixedImageSection.offsetTop * 0.86 &&
          window.pageYOffset < footerSection.offsetTop * 0.72
        ) {
          dots.forEach((dot) => dot.classList.remove("black"));
          dotTwo.classList.remove("active");
          dotThree.classList.add("active");
        } else if (
          window.pageYOffset > footerSection.offsetTop * 0.72 &&
          window.pageYOffset < footerSection.offsetTop * 0.901
        ) {
          dots.forEach((dot) => dot.classList.add("black"));
        } else if (window.pageYOffset > footerSection.offsetTop * 0.901) {
          dots.forEach((dot) => dot.classList.remove("black"));
        }
      }
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => observer.observe(ref));

    return () => cardRefs.current.forEach((ref) => observer.unobserve(ref));
  }, []);
  return (
    <>
      <Carga />
      <div className="dots">
        <div className="active one" data-x="header"></div>
        <div className="two" data-x=".recipes"></div>
        <div className="three" data-x=".fixed-image"></div>
      </div>
      <header className="header-segunda-pagina">
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
          <h2>Noticias</h2>
          <h1>Descubre mucho más</h1>
          <div className="arrow">
            <span className="left"></span>
            <i className="fas fa-asterisk"></i>
            <span className="right"></span>
          </div>
          <span>No somos solo una empresa</span>
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

      <div className="fotosnoticias" style={{ marginTop: "2cm" }}>
        <div className="image-container">
          <div className="image-part image-left"></div>
          <div className="image-part image-middle">
            <div className="text">
              <h2
                style={{
                  marginLeft: "0.5cm",
                  marginBottom: "-1%",
                  fontSize: "60px",
                }}
              >
                Las noticias vuelan
              </h2>
              <h3
                style={{
                  fontSize: "150%",
                  marginLeft: "-0.3cm",
                  color: "#7B8FA1",
                }}
              >
                ¡Aquí quedarán para siempre!
              </h3>
              <p
                style={{
                  height: "5cm",
                  width: "15cm",
                  textAlign: "center",
                }}
              >
                Bienvenidos a la biblioteca de noticias de nuestra empresa, el
                compendio vivo de nuestra evolución. Aquí se hallan las crónicas
                de nuestro pasado, presente y, en su debido tiempo, las
                anticipaciones de un futuro brillante. Descubran, exploren y
                sumérjanse en la rica historia de nuestra trayectoria. Este es
                el rincón donde la esencia de nuestra empresa se despliega en
                narrativas, esperando a ser descubiertas por usted.
              </p>
            </div>
          </div>
          <div className="image-part image-right"></div>
        </div>
      </div>
      <div className="menu">
        <div className="box-model">
          <i className="fas fa-times fa-2x "></i>
          <div className="arrow">
            <div className="arrow arrow-right"></div>
            <div className="arrow arrow-left"></div>
          </div>
          <div className="box-image-container">
            <div className="box-image">
              <img src="" alt="Food Photo" />
            </div>
          </div>
        </div>

        <div className="text" style={{ marginRight: "2.5cm" }}>
          <h2 style={{ fontSize: "70px" }}>Un Mundo de Información</h2>
          <h3 style={{ color: "#7B8FA1", fontSize: "35px", marginTop: "1cm" }}>
            Nuestras Noticias e Investigaciones al Alcance de tu Mano
          </h3>
          <div>
            <i className="fas fa-asterisk"></i>
          </div>
          <p>
            ¡Bienvenidos a nuestro emocionante nuevo lanzamiento! Estamos
            encantados de presentarles nuestro sitio, donde podrán disfrutar de
            una amplia variedad de noticias e investigaciones de alta calidad.
            Este espacio está diseñado para brindarles información relevante,
            precisa y actualizada sobre diversos temas relacionados con
            Criptosasun. En nuestro sitio, encontrarán una selección
            cuidadosamente curada de noticias y artículos que abarcan desde
            avances tecnológicos hasta descubrimientos científicos, pasando por
            tendencias en la industria y análisis profundos. Nuestro equipo de
            expertos se ha dedicado a investigar y recopilar la información más
            valiosa para asegurar que ustedes tengan acceso a contenido de
            primera categoría.
          </p>
        </div>
      </div>
      <div className="diagramatiempo" style={{ marginBottom: "10%" }}>
        <section id="timeline">
          <h1 style={{ color: "black" }}>Línea del tiempo </h1>

          <div
            className="demo-card-wrapper"
            style={{ marginLeft: "5%", marginTop: "2cm" }}
          >
            <div className="line"></div>
            <div
              ref={(ref) => cardRefs.current.push(ref)}
              className="demo-card visible demo-card--step1"
              style={{
                width: "500px",
                height: "500px",
                marginLeft: "15%",
              }}
            >
              <div className="head">
                <div className="number-box">
                  <span>01</span>
                </div>
                <h2>
                  <span
                    className="small"
                    style={{ color: "black", marginTop: "1%" }}
                  >
                    Desafío COVID19
                  </span>
                  <p style={{ color: "black" }}>
                    Sistemas inteligentes de ventilación mecánica de alta
                    precisión
                  </p>
                </h2>
              </div>
              <div className="body">
                <p>
                  Criptosasun trabajó para resolver un problema crítico en la
                  atención médica: proporcionar ventilación mecánica precisa y
                  confiable a un costo asequible. Su diseño utiliza elementos ya
                  existentes y probados, incluyendo un sistema de reanimación de
                  bolsa, un sistema derivado de los tensiómetros controlado por
                  Arduino, y una aplicación de inteligencia artificial que
                  permite adaptar los diferentes modos de uso para el paciente.
                  Invitan a la comunidad de Arduino, a las universidades y a
                  otros interesados a colaborar en su desarrollo para una
                  implementación rápida y efectiva.
                </p>
                <img
                  src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1687432037/5e808acefea9a31a62d858e2_COVID_19_RESPIRADOR_CRIPTOSASUN_2_1_nkmyjb.png"
                  alt="Graphic"
                  style={{ height: "9cm" }}
                />
              </div>
            </div>

            <div
              ref={(ref) => cardRefs.current.push(ref)}
              className="demo-card visible demo-card--step2"
              style={{
                width: "500px",
                height: "500px",

                marginLeft: "51%",
                marginTop: "7cm",
              }}
            >
              <div className="head">
                <div className="number-box">
                  <span>02</span>
                </div>
                <h2>
                  <span className="small"></span>{" "}
                  <p style={{ color: "black", marginTop: "0.5cm" }}>
                    CÁLCULO DE LA QFT (QUANTUM FOURIER TRANSFORM).
                  </p>
                </h2>
              </div>
              <div className="body">
                <p>
                  La Transformada de Fourier Cuántica (QFT) es un algoritmo
                  cuántico que calcula de manera eficiente la transformada
                  discreta de Fourier en estados cuánticos. Utiliza compuertas
                  cuánticas para mapear las amplitudes de los estados de entrada
                  a las amplitudes de sus componentes de Fourier. La QFT es
                  esencial en varios algoritmos cuánticos y tiene aplicaciones
                  en teoría de números, procesamiento de señales y simulación.
                </p>
                <img
                  src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1687432769/BeFunky-collage_1_grcmvg.png"
                  alt="Graphic"
                  style={{ height: "9cm" }}
                />
              </div>
            </div>

            <div
              ref={(ref) => cardRefs.current.push(ref)}
              className="demo-card visible demo-card--step3"
              style={{
                width: "500px",
                height: "500px",
                marginLeft: "4cm",
                marginLeft: "15%",
                marginTop: "6cm",
              }}
            >
              <div className="head">
                <div className="number-box">
                  <span>03</span>
                </div>
                <h2 style={{ color: "black" }}>
                  <span className="small">Algoritmos</span>{" "}
                  <p style={{ color: "black" }}>Criptosasun</p>
                </h2>
              </div>
              <div className="body">
                <p>
                  Criptosasun, hemos logrado transponer algoritmos cuánticos a
                  redes neuronales y hemos demostrado su capacidad para
                  descifrar claves privadas RSA en un plazo de semanas. A pesar
                  de las limitaciones actuales de los ordenadores cuánticos, que
                  requieren varios años más de desarrollo, en Criptosasun hemos
                  logrado resultados prometedores utilizando un algoritmo
                  específico en ordenadores clásicos.
                </p>
                <img
                  src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1687434618/5d77cb0389fd0f22fa625b45_cryptosasun-icons-brain_1_fgk3f0.png"
                  alt="Graphic"
                  style={{ height: "9cm" }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="fixed-image-ordenador">
        <div className="text"></div>
      </div>

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
