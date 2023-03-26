import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
    
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(195, 0, 255, 0.547)",
        border: "6px solid black",
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
