import React from "react";

type CardProps = {
  cardName: string;
  handleGameLogic: (cardName: string) => void;
};
function Card({ cardName, handleGameLogic }: CardProps) {
  return (
    <div>
      <button onClick={() => handleGameLogic(cardName)}>
        <img
          src={require("../images/" + cardName + ".png")}
          alt={cardName}
          style={{ width: 50, height: 50 }}
        />
      </button>
    </div>
  );
}

export default Card;
