import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Puedes ajustar el tiempo (en milisegundos) según lo necesites
  }, [pathname]);

  return children;
};

ScrollToTop.propTypes = {
  children: PropTypes.any,
};

export default ScrollToTop;
