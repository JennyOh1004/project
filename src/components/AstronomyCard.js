import React from "react";

const AstronomyCard = ({ getAPOD }) => {
  return (
    <div>
      <button className="picture" onClick={getAPOD}>
        Click!!
      </button>
    </div>
  );
};

export default AstronomyCard;
