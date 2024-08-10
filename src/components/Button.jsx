import React from "react";

const Button = ({ children, isNum, isDisabled, handlePage }) => {
  const buttonStyle = {
    background: "#379961",
    color: "white",
    outline: "none",
    border: "1px solid #379961",
    borderOutline: "none",
    padding: "5px 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: `${isNum && "40px"}`,
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "15px",
  };

  return (
    <button onClick={handlePage} disabled={isDisabled} style={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
