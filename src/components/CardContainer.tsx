import React from "react";
import Card from "./Card";

type ContainerProps = {
  handleGameLogic: any;
  score: number;
  cards: string[];
};

function CardContainer({ handleGameLogic, score, cards }: ContainerProps) {
  return (
    <>
      {cards.map((card) => {
        return (
          <Card
            cardName={card}
            key={card}
            handleGameLogic={handleGameLogic}
          ></Card>
        );
      })}
    </>
  );
}

export default CardContainer;
