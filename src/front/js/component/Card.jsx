import React, { useEffect, useRef } from "react";
import "../../styles/card.css";

const Card = ({ imgSrc = "", href }) => {
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
        <a style={{ color: "black" }} href={href}>
          {href}
        </a>
      </div>
    </>
  );
};

export default Card;
