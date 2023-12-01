// BackButton.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const BackButton = () => {
    const navigate = useNavigate();
    //const location = useLocation();
  const goBack = () => {
    window.scrollTo(0, 0);
    navigate(-1); // Navigate back by one step
  };

  return (
    <button className="back-button" onClick={goBack}>
      <img src={require("./../assets/left.png")} alt="left" />
    </button>
  );
};

export default BackButton;
