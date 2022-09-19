import React from "react";

type CardProps = {
  cardName: string;
  handleGameLogic: (cardName: string) => void;
};
function Card({ cardName, handleGameLogic }: CardProps) {
  return (
    <div className=" bg-white hover:bg-gray-300 rounded-md shadow-md aspect-square overflow-hidden ">
      <button
        className=" min-w-full min-h-full"
        onClick={() => handleGameLogic(cardName)}
      >
        <img src={require("../images/" + cardName + ".png")} alt={cardName} />
      </button>
    </div>
  );
}

export default Card;
