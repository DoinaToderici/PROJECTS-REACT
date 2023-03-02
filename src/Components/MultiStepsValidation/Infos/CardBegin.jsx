import React from "react";
import "./Card.scss";

const CardBegin = (props) => {
  return (
    <div className="info-card col-12 col-lg-8">
      <iframe
        src="https://giphy.com/embed/ISfqNDq76ZfWw"
        width="280"
        height="197"
        className="gif"
      ></iframe>
      <h2 className="mb-4">Aide-nous à ravir tes papilles !</h2>
      <div
        className="btn"
        onClick={() => {
          props.modifyIndex(2);
        }}
      >
        Commencer
      </div>
    </div>
  );
};

export default CardBegin;
