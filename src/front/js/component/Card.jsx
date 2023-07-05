import React, { useEffect, useRef } from "react";
import "../../styles/card.css";

const Card = ({ imgSrc = "" }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-card");
          } else {
            entry.target.classList.remove("animate-card");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="redes" ref={cardRef}>
        <img src={imgSrc} alt="Logo" />
        <p>Aquí es donde escribirás tu párrafo.</p>
      </div>
    </>
  );
};

export default Card;
