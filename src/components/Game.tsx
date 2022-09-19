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
];

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(score);
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
      setScore(0);
      selectedCards.length = 0;
    } else {
      setSelectedCards([...selectedCards, cardName]);
      setScore(1 + score);
      setHighScore(Math.max(highScore, score + 1));
    }
  };
  return (
    <div>
      <ScoreBoard score={score} highScore={highScore}></ScoreBoard>
      <CardContainer
        handleGameLogic={handleGameLogic}
        score={score}
        cards={cards}
      ></CardContainer>
    </div>
  );
}

export default Game;
