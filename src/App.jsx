import React from "react";
import Modal from "./lib/Modal";

const App = () => {
  return (
    <Modal
      title="Employee Added"
      text="Great news!"
      animation={true}
      duration={3000}
      customClass="custom"
    />
  );
};

export default App;
