import React from "react";
import Card from "./Card";

type ContainerProps = {
  handleGameLogic: any;
  score: number;
  cards: string[];
};

function CardContainer({ handleGameLogic, score, cards }: ContainerProps) {
  return (
    <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 w-2/3 gap-2 mx-auto my-2 ">
      {cards.map((card) => {
        return (
          <Card
            cardName={card}
            key={card}
            handleGameLogic={handleGameLogic}
          ></Card>
        );
      })}
    </div>
  );
}

export default CardContainer;
