import React, { useContext,useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import imagen1 from '/workspace/final-pagweb/src/front/img/annie-spratt-vGgn0xLdy8s-unsplash (1).jpg';
import imagen2 from '/workspace/final-pagweb/src/front/img/ryoji-iwata-IBaVuZsJJTo-unsplash (2).jpg';

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		const body = document.querySelector("body");
		const loader = document.querySelector(".loader-wrap");
		const links = document.querySelectorAll('a[href="#"]');
		const nav = document.querySelector("header nav");
		const navToggle = document.querySelector("header nav .toggle");
		const navSpanMiddle = document.querySelector("header nav .toggle .middle");
		const navNavigationBar = document.querySelector("header nav .navigation-bar");
		const navNavigationBarLi = document.querySelectorAll("header nav .navigation-bar li");
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
		const logoImage = document.querySelector("header nav .logo img");
		const svgDown = document.querySelector("header .arrow-down");
		const svgUp = document.querySelector(".copyright .arrow-up");
		const menuImgs = document.querySelectorAll(".menu .menu-image-container img");
		const boxModel = document.querySelector(".menu .box-model");
		const menuImageContainer = document.querySelector(".menu-image-container");
		const boxModelArrow = document.querySelector(".menu .box-model .arrow");
		const boxModelImage = document.querySelector(".menu .box-model img");
		const pageTitle = document.querySelector("title");
	
		// remove loader
		function fadeOutEffect() {
		  const fadeEffect = setInterval(function () {
			if (!loader.style.opacity) {
			  loader.style.opacity = 1;
			}
			if (loader.style.opacity > 0) {
			  loader.style.opacity -= 0.4;
			} else {
			  body.classList.remove('stop-scroll');
			  loader.classList.add('remove');
			  clearInterval(fadeEffect);
			}
		  }, 100);
		}
		window.addEventListener("load", fadeOutEffect);
	
		// prevent links click hash
		links.forEach(link => link.addEventListener("click", function (e) {
		  e.preventDefault();
		}));
	
		// toggle hamburger menu button
		navToggle.addEventListener("click", () => {
		  navToggle.classList.toggle("active");
		  navSpanMiddle.classList.toggle("hide");
		  navNavigationBar.classList.toggle("show");
		});
	
		// show active navigationbar li
		navNavigationBarLi.forEach(li =>
		  li.addEventListener("click", () => {
			const arr = Array.from(li.parentElement.children);
			arr.forEach(li => li.classList.remove("active"));
			li.classList.add("active");
		  })
		);
	
		// svg-up smooth scroll
		svgUp.addEventListener("click", () => {
		  window.scroll({
			top: 0,
			behavior: "smooth"
		  });
		});
	
		window.onscroll = function() {
			if (window.pageYOffset > headerSection.offsetHeight - 75) {
				nav.classList.add("active");
				logoText.textContent = "Criptosasun"; // Cambiar el texto del logo
				logoText.style.color = "black"; // Cambiar el color del texto a negro
			  } else {
				nav.classList.remove("active");
				logoText.textContent = "Criptosasun"; // Cambiar el texto del logo cuando no está fijo
				logoText.style.color = "black"; // Restablecer el color del texto
			  }
	
		  // header welcome fade out and in
		  if (window.pageYOffset > 0) {
			headerText.style.opacity = -window.pageYOffset / 300 + 1;
		  }
		  // home page JS
		  if (pageTitle.text === "CriptoSasun") {
			//change dots background color
			if (window.pageYOffset < headerSection.offsetHeight * 0.5) {
			  dots.forEach(dot => dot.classList.remove("black"));
			  dotTwo.classList.remove("active");
			  dotOne.classList.add("active");
			} else if (
			  window.pageYOffset > headerSection.offsetHeight * 0.5 &&
			  window.pageYOffset < recipeSection.offsetTop * 0.72
			) {
			  dots.forEach(dot => dot.classList.add("black"));
			} else if (
			  window.pageYOffset > recipeSection.offsetTop * 0.75 &&
			  window.pageYOffset < menuSection.offsetTop * 0.81
			) {
			  dots.forEach(dot => dot.classList.remove("black"));
			  dotOne.classList.remove("active");
			  dotThree.classList.remove("active");
			  dotTwo.classList.add("active");
			} else if (
			  window.pageYOffset > menuSection.offsetTop * 0.81 &&
			  window.pageYOffset < fixedImageSection.offsetTop * 0.86
			) {
			  dots.forEach(dot => dot.classList.add("black"));
			  dotThree.classList.remove("active");
			  dotTwo.classList.add("active");
			} else if (
			  window.pageYOffset > fixedImageSection.offsetTop * 0.86 &&
			  window.pageYOffset < footerSection.offsetTop * 0.72
			) {
			  dots.forEach(dot => dot.classList.remove("black"));
			  dotTwo.classList.remove("active");
			  dotThree.classList.add("active");
			} else if (
			  window.pageYOffset > footerSection.offsetTop * 0.72 &&
			  window.pageYOffset < footerSection.offsetTop * 0.901
			) {
			  dots.forEach(dot => dot.classList.add("black"));
			} else if (window.pageYOffset > footerSection.offsetTop * 0.901) {
			  dots.forEach(dot => dot.classList.remove("black"));
			}
		  }
		};
	
		// home page JS
		if (pageTitle.text === "CriptoSasun") {
		  // svg-down smooth scroll
		  svgDown.addEventListener("click", () => {
			window.scroll({
			  top: aboutSection.offsetTop - 30,
			  behavior: "smooth"
			});
		  });
	
		  // dots smooth scroll
		  dots.forEach(dot =>
			dot.addEventListener("click", function () {
			  window.scrollTo({
				top: document.querySelector(this.dataset.x).offsetTop - 100,
				behavior: "smooth"
			  });
			})
		  );
	
		  // show box model
		  menuImgs.forEach(img =>
			img.addEventListener("click", function () {
			  const arr = Array.from(this.parentElement.parentElement.children);
	
			  arr.forEach(div => div.classList.remove("active"));
	
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
			  (e.target.tagName === "DIV" && !e.target.classList.contains("arrow")) ||
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
				const active = arr.find(div => div.classList.contains("active"));
	
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
					boxModelImage.src = active.nextElementSibling.firstElementChild.src;
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
	  }, []);
	return (
	<>
	 <div className="loader-wrap">
        <div className="loader">
          <span className="loader-item"></span>
          <span className="loader-item"></span>
          <span className="loader-item"></span>
          <span className="loader-item"></span>
          <span className="loader-item"></span>
          <span className="loader-item"></span>
          <span className="loader-item"></span>
          <span className="loader-item"></span>
          <span className="loader-item"></span>
          <span className="loader-item"></span>
        </div>
      </div>
      <div className="dots">
        <div className="active one" data-x="header"></div>
        <div className="two" data-x=".recipes"></div>
        <div className="three" data-x=".fixed-image"></div>
      </div>
      <header >
		

			  <nav>
          <div className="logo">
            <a href="index.html">
              <h4 style={{color:"black", fontSize:"250%"}}>Criptosasun</h4>
            </a>
          </div>
          <div className="toggle">
            <span className="first"></span>
            <span className="middle"></span>
            <span className="last"></span>
          </div>
          <div className="navigation-bar">
            <ul>
              <li className="active"><a href="index.html">Home<span className="underline"></span></a></li>
              <li><a href="#">Reservations<span className="underline"></span></a></li>
              <li><a href="#">Menu<span className="underline"></span></a></li>
              <li><a href="#">Blog<span className="underline"></span></a></li>
              <li><a href="#">Features<span className="underline"></span></a></li>
              <li><a href="#">Shop<span className="underline"></span></a></li>
              <li><a href="#">Contact<span className="underline"></span></a></li>
            </ul>
          </div>
        </nav>
        <div className="text" style={{marginTop:"5%"}}>
          <h2>Welcome</h2>
          <h1>CRIPTOSASUN</h1>
          <div className="arrow">
            <span className="left"></span>
            <i className="fas fa-asterisk"></i>
            <span className="right"></span>
          </div>
          <span>¿Listo para formar parte de nuestra familia?</span>
          <div className="button"><button>Explore</button></div>
        </div>



		
      
        <svg className="svg-down" width="192" height="61" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160.7 61.5" enableBackground="new 0 0 160.7 61.5" xmlSpace="preserve">
          <path fill="currentColor" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"></path>
        </svg>
        <div className="arrow-down"></div>
		
      </header>
      <div className="about-us">
        <div className="text" style={{marginTop:"7%"}}>
          <h2>Descubre</h2>
          <h3 style={{color:"#7B8FA1"}}>nuestra historia </h3>
          <div><i className="fas fa-asterisk"></i></div>
          <p>CryptoSasun Energía es una empresa altamente competente. Nuestro enfoque innovador nos permite desarrollar soluciones vanguardistas que transforman la industria. Además lo que nos distingue es nuestro espíritu cercano y trabajador. En CryptoSasun, valoramos y cuidamos de cada miembro de nuestra comunidad, creando un ambiente de trabajo colaborativo y altamamente provechoso. Estamos comprometidos en brindar servicios de calidad y generar un impacto positivo en la vida de las personas y empresas.</p>
          <div><a className="a-CTA" href="#">About Us</a></div>
        </div>
        <div className="image-container">
          <div className="image image1">
            <img src={imagen2} alt="Food Photo" style={{height:"643px", width:"422px"}} />
          </div>
          <div className="image image2">
            <img src={imagen1} alt="Food Photo"style={{height:"643px", width:"422px"}} />
          </div>
        </div>
      </div>
      <div className="recipes">
        <div className="image"></div>
        <div className="text" >
          <h2 style={{marginLeft:"1.5cm",fontSize:"130%"}}>¿Necesitas ayuda? </h2>
          <h3 style={{fontSize:"180%",marginLeft:"1cm"}}>¡Qué podemos hacer!</h3>
        </div>
      </div>
      <div className="menu">
        <div className="box-model">
          <i className="fas fa-times fa-2x close"></i>
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
        <div className="menu-image-container" >
          <div className="image active" >
            <img src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1686924478/adi-goldstein-EUsVwEOsblE-unsplash_qicdnu.jpg" alt="Food Photo" />
          </div>
          <div className="image">
            <img src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1686924467/dylan-calluy-JpflvzEl5cg-unsplash_pezkwc.jpg" alt="Food Photo"  />
          </div>
          <div className="image" >
            <img style={{height:"200px"}} src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1686924436/shubham-dhage-UxDU0Gg5pqQ-unsplash_z1ku7n.jpg"alt="Food Photo" />
          </div>
          <div className="image">
            <img src="https://res.cloudinary.com/dwkb2dk5r/image/upload/v1686924624/arif-riyanto-vJP-wZ6hGBg-unsplash_1_iu1zk3.jpg" alt="Food Photo" />
          </div>
        </div>
        <div className="text" style={{marginTop:"3%"}}>
          <h2>Descubre</h2>
          <h3 style={{color:"#7B8FA1"}}>Que te ofrecemos</h3>
          <div><i className="fas fa-asterisk"></i></div>
          <p>En CriptoSasun, ofrecemos una amplia gama de servicios diseñados para satisfacer las necesidades de nuestros clientes. Desde soluciones tecnológicas innovadoras hasta atención personalizada, nos esforzamos por brindar la mejor experiencia posible. Uno de nuestros objetivos principales es ayudar a nuestros clientes a alcanzar sus metas , superar sus expectativas, poder ahorrar... Para obtener más información sobre lo que ofrecemos y cómo podemos ayudarle, lo invitamos a explorar nuestro sitio web, donde encontrará detalles completos sobre nuestros productos, y recursos informativos. No pierda la oportunidad de descubrir cómo podemos mejorar su vida o negocio. ¡Infórmese ahora y déjenos ser su socio de confianza en el camino hacia el éxito!</p>
          <div><a className="a-CTA" href="#">Contáctanos</a></div>
        </div>
      </div> 
      <div className="fixed-image">
        <div className="text">
          <h2>La perfecta</h2>
          <h3>Combinación</h3>
        </div>
      </div>
      <div className="reservation">
        <div className="text" style={{marginTop:"5%"}}>
          <h2>Culinary</h2>
          <h3>Delight</h3>
          <div><i className="fas fa-asterisk"></i></div>
          <p>We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.</p>
          <div><a className="a-CTA" href="#">Make a Reservation</a></div>
        </div>
        <div className="image-container">
          <div className="image image1">
            <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988518/bacon-1.jpg" alt="Food Photo" />
          </div>
          <div className="image image2">
            <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988518/bacon-2.jpg" alt="Food Photo" />
          </div>
        </div>
      </div>
      <footer>
        <div className="text">
          <h2>ABOUT ROSA</h2>
          <div><i className="fas fa-asterisk"></i></div>
          <p>ROSA is an enchanting and easy-to-use parallax Restaurant WordPress theme that allows you to tell your story in a dynamic, narrative, and enjoyable way, making it perfect for restaurants, bakeries, bars, or coffee shops.</p>
        </div>
        <div className="contact-container">
          <div className="social-media">
            <h3>Follow Along</h3>
            <div className="links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-square"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
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
        <svg className="svg-up" width="192" height="61" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160.7 61.5" enableBackground="new 0 0 160.7 61.5" xmlSpace="preserve">
          <path fill="#262526" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"></path>
        </svg>
        <i className="fas fa-angle-double-up arrow-up"></i>
      </div>
	
	
	
	</>
	);
};
