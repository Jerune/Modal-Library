// @ts-nocheck
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./styles/styles.css";

const Modal = ({
  title = "",
  text = "",
  animation = false,
  duration = 0,
  customFunction = () => {},
  customClass = "",
}) => {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    function timeOut(ms) {
      setTimeout(() => {
        setIsShown(false);
      }, ms);
      setTimeout(() => {
        customFunction();
      }, ms);
    }
    if (duration > 0) {
      timeOut(duration);
    }
    return clearTimeout(timeOut);
  }, []);

  const animationClass = animation ? "animation" : "";
  const customClassClass = customClass !== "" ? customClass : "";

  if (!isShown) {
    return null;
  }

  return (
    <div id="modal-container" className={`${animationClass}`}>
      <div className={`modal ${animationClass} ${customClassClass}`}>
        <h2>{title}</h2>
        <p>{text}</p>
        {duration === 0 && (
          <span className="close" onClick={() => setIsShown(false)}>
            &times;
          </span>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  animation: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  customClass: PropTypes.string,
  duration: PropTypes.number,
  customFunction: PropTypes.func,
};

export default Modal;
