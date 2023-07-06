import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/criptosasun.css";
import Carga from "../component/Carga.jsx";
import Footer from "../component/Footer.jsx";
export const Criptosasun = () => {
  const { store, actions } = useContext(Context);
  const cardRefs = useRef([]);
  const textAnimation = useRef(null);

  const setAnimationName = (element, animationName) => {
    if (element) {
      element.style.animationName = animationName;
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");

    const nav = document.querySelector("header nav");

    const headerText = document.querySelector("header .text");
    const headerSection = document.querySelector("header");
    const aboutSection = document.querySelector(".about-us");

    const dots = document.querySelectorAll(".dots > div");
    const svgDown = document.querySelector("header .arrow-down");

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

  window.addEventListener("scroll", function () {
    const form = document.getElementById("contact-form");

    if (top <= window.innerHeight) {
      form.classList.add("active");
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
      <header className="header-cuarta-pagina">
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
        <div style={{ marginTop: "18%" }}>
          <main className="text-container">
            <svg
              className="text-stroke"
              viewBox="0 0 500 100"
              width="80%"
              height="100%"
              ref={textAnimation}
            >
              <text
                className="text"
                x="25"
                y="75"
                style={{ borderColor: "white" }}
              >
                Criptosasun
              </text>
            </svg>
          </main>
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
      </div>
      <div className="diagramatiempo">
        <section
          id="timelinecripto"
          style={{
            marginBottom: "4cm",
            marginTop: "-1cm",
            paddingTop: "3cm",
            paddingBottom: "3cm",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: "20%", color: "white" }}>
            <h5>
              “Todo el mundo sabe que algunas cosas son simplemente imposibles,
              hasta que alguien que no sabe eso las hace posibles”
            </h5>
            <p style={{ marginLeft: "45%", color: "#C0C0C0" }}>
              Albert Einstein
            </p>
          </div>
        </section>
      </div>
      <div className="recipescripto">
        <div className="textfoto">
          <div
            ref={(ref) => cardRefs.current.push(ref)}
            className="demo-card visible demo-card--step2 fadeInLeft"
            style={{
              width: "500px",
              height: "500px",
              float: "left",
              marginLeft: "5%",
            }}
          >
            <div className="head">
              <span className="small"></span>
              <h1
                style={{
                  fontSize: "127%",
                  color: "#7B8FA1",
                  position: "relative",
                  left: "0.6cm",
                  marginTop: "1cm",
                }}
              >
                ¿Quieres saber más de nostros?
              </h1>
            </div>
            <div className="body">
              <p style={{ textAlign: "center" }}>
                Criptosasun se destaca como una empresa líder en el ámbito de la
                criptología y ciberseguridad. Contamos con un equipo de
                profesionales altamente capacitados, especializados en seguridad
                informática y criptografía, quienes brindan soluciones sólidas y
                avanzadas para salvaguardar la información confidencial de
                nuestros clientes. Aprovechamos nuestra amplia experiencia en la
                implementación de sistemas seguros y en el diseño de estrategias
                de mitigación de riesgos para ofrecer soluciones adaptadas a las
                necesidades únicas de cada cliente. En Criptosasun, nos
                enorgullece estar a la vanguardia de las últimas tendencias y
                tecnologías en el ámbito de la seguridad cibernética,
                garantizando la protección de los datos en un entorno digital
                cada vez más complejo. Nuestro compromiso es brindar servicios
                de calidad y excelencia, otorgando tranquilidad a nuestros
                clientes en un mundo digital en constante evolución.
              </p>
            </div>
          </div>
          <div
            className="image"
            style={{
              height: "750px",
              background: `url("https://res.cloudinary.com/dwkb2dk5r/image/upload/v1687861188/BeFunky-collage_5_aomjc9.jpg") fixed bottom`,
              backgroundSize: "cover",
              marginBottom: "3cm",
              marginTop: "-1cm",
              float: "left",
              width: "calc(50% - 2.5%)",
            }}
          ></div>
          <div
            ref={(ref) => cardRefs.current.push(ref)}
            className="demo-card visible demo-card--step2 "
            style={{
              width: "500px",
              height: "500px",
              float: "right",
              marginRight: "5%",
            }}
          >
            <div className="head">
              <span className="small"></span>
              <h1
                style={{
                  fontSize: "125%",
                  color: "#7B8FA1",
                  position: "relative",
                  top: "1cm",
                  left: "1cm",
                }}
              >
                Sigue descubriendo,{" "}
              </h1>
              <h4 style={{ color: "white", marginLeft: "2.6cm" }}>adelante</h4>
            </div>
            <div className="body">
              <p style={{ marginTop: "1cm", textAlign: "center" }}>
                Criptosasun, una empresa líder en el campo del Big Data y la
                Inteligencia Artificial, se destaca como un robusto edificio en
                el mundo de la tecnología. Al igual que los cimientos sólidos y
                las estructuras bien diseñadas de un edificio, en Criptosasun
                contamos con un equipo excepcional de científicos de datos y
                expertos en IA que utilizan tecnologías de vanguardia para
                analizar grandes volúmenes de información. Nuestro enfoque se
                centra en la precisión de los análisis y en la generación de
                conocimientos valiosos para nuestros clientes. Del mismo modo
                que un edificio robusto proporciona estabilidad y confianza, en
                Criptosasun brindamos soluciones personalizadas que permiten a
                las empresas tomar decisiones informadas y optimizar sus
                procesos. Mediante análisis de datos precisos y modelos
                predictivos, ayudamos a nuestros clientes a desbloquear el
                potencial oculto en sus datos, impulsando el crecimiento y el
                éxito empresarial en la era digital. En Criptosasun, nos
                enorgullece nuestra dedicación a la innovación y la excelencia
                en el manejo de datos. Nos esforzamos por mantenernos a la
                vanguardia de las últimas tendencias y tecnologías en el campo
                del Big Data y la Inteligencia Artificial, asegurando que
                nuestros clientes obtengan soluciones de vanguardia que les
                permitan destacarse en su industria.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="apartadocripto">
        <div className="fotosnoticias" style={{ marginBottom: "2cm" }}>
          <div className="image-container">
            <div className="image-part image-left-cripto"></div>
            <div className="image-part image-middle">
              <div
                ref={(ref) => cardRefs.current.push(ref)}
                className="demo-card visible demo-card--step2 "
                style={{
                  width: "550px",
                  height: "550px",
                  float: "right",
                  marginRight: "6%",
                  marginTop: "2cm",
                }}
              >
                <div className="head">
                  <span className="small"></span>
                  <h2
                    style={{
                      fontSize: "125%",
                      color: "black",
                      position: "relative",
                      top: "1cm",
                      left: "0.5cm",
                    }}
                  >
                    Aqui tienes toda nuestra información
                  </h2>
                  <h3
                    style={{
                      color: "#7B8FA1",
                      marginLeft: "0.3cm",
                      marginBottom: "-1%",
                      fontSize: "15px",
                      marginTop: "1cm",
                    }}
                  >
                    {" "}
                    ¡A qué estas esperando!
                  </h3>
                </div>
                <div className="body">
                  <p style={{ marginTop: "1.5cm", textAlign: "center" }}>
                    En Criptosasun, destacamos como líderes en el campo de la
                    innovación tecnológica, dedicados a desarrollar soluciones
                    avanzadas que impulsan la eficiencia y la productividad en
                    el mundo digital. Las aplicaciones que generamos, resultado
                    de una ingeniería de vanguardia y un diseño intuitivo, están
                    redefiniendo la experiencia del usuario y liderando la
                    próxima generación de tecnología. Pero nuestro alcance va
                    más allá de las aplicaciones, ya que también estamos
                    revolucionando el sector financiero. Nuestro equipo de
                    expertos ha desarrollado sofisticadas plataformas para el
                    análisis de mercado y la transacción de acciones y
                    criptomonedas, democratizando el acceso a estos recursos y
                    abriendo las puertas a la futura generación de finanzas. Sin
                    embargo, nuestra visión innovadora no se limita al mundo
                    digital. En el ámbito físico, nuestros ingenieros y
                    científicos de materiales están transformando la manera en
                    que construimos y diseñamos, creando materiales más
                    resistentes, ligeros y sostenibles. En Criptosasun,
                    percibimos la innovación como un viaje continuo. Cada
                    producto que desarrollamos, cada servicio que ofrecemos,
                    está diseñado para superar los límites de lo posible. Te
                    invitamos a que te unas a nosotros en este emocionante viaje
                    hacia la innovación y la excelencia.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-part image-right-cripto"></div>
          </div>
        </div>
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
