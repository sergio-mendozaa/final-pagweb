import React, { useEffect, useState } from "react";
import "../../styles/carga.css";
const Carga = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loader">
      <div className="loader-items">
        <div className="loader-item"></div>
        <div className="loader-item"></div>
        <div className="loader-item"></div>
        <div className="loader-item"></div>
        <div className="loader-item"></div>
      </div>
      <p className="loading-text">Loading</p>
    </div>
  ) : null;
};

export default Carga;
