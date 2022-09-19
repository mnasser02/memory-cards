import React, { useState } from "react";
import CardContainer from "./CardContainer";
import ScoreBoard from "./ScoreBoard";

const images = [
  "tomjerry1",
  "tomjerry2",
  "tomjerry3",
  "tomjerry4",
  "tomjerry5",
  "tomjerry6",
  "tomjerry7",
  "tomjerry8",
  "tomjerry9",
  "tomjerry10",
  "tomjerry11",
  "tomjerry12",
  "tomjerry13",
  "tomjerry14",
  "tomjerry15",
];

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(score);
  const [lost, setLost] = useState(false);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [cards, setCards] = useState(images);
  const shuffle = (newCards: string[]) => {
    newCards.forEach((card, i) => {
      const randomIdx = Math.floor(Math.random() * newCards.length);
      [newCards[i], newCards[randomIdx]] = [newCards[randomIdx], newCards[i]];
    });
  };

  const handleGameLogic = (cardName: string) => {
    const newCards = [...cards];
    shuffle(newCards);
    setCards(newCards);
    if (selectedCards.includes(cardName)) {
      setLost(true);
      setScore(0);
      selectedCards.length = 0;
    } else {
      setLost(false);
      setSelectedCards([...selectedCards, cardName]);
      setScore(1 + score);
      setHighScore(Math.max(highScore, score + 1));
    }
  };
  return (
    <div className=" flex flex-col border-orange-700 border-4 mx-12 mb-4 ">
      <ScoreBoard score={score} highScore={highScore}></ScoreBoard>
      {lost ? (
        <p className="text-center text-5xl mt-auto mb-2 text-red-600 text-bold">
          Oops!
        </p>
      ) : (
        ""
      )}
      <CardContainer
        handleGameLogic={handleGameLogic}
        score={score}
        cards={cards}
      ></CardContainer>
    </div>
  );
}

export default Game;
