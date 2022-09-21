import React, { useEffect, useRef, useState } from "react";
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
  "tomjerry16",
  "tomjerry17",
  "tomjerry18",
  "tomjerry19",
  "tomjerry20",
];
const CARDS_NUMBER = images.length;

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(score);
  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const cards = useRef(images);

  const shuffle = (newCards: string[]) => {
    newCards.forEach((card, i) => {
      const randomIdx = Math.floor(Math.random() * newCards.length);
      [newCards[i], newCards[randomIdx]] = [newCards[randomIdx], newCards[i]];
    });
  };

  const handleGameLogic = (cardName: string) => {
    setLost(false);
    setWon(false);
    if (selectedCards.includes(cardName)) {
      setLost(true);
      setScore(0);
      setSelectedCards([]);
    } else {
      if (won) setScore(1);
      else {
        setScore(1 + score);
        setHighScore(Math.max(highScore, score + 1));
      }
      if (score + 1 === CARDS_NUMBER) {
        setWon(true);
        setSelectedCards([]);
      } else setSelectedCards([...selectedCards, cardName]);
    }
  };

  useEffect(() => {
    const newCards = [...cards.current];
    shuffle(newCards);
    cards.current = newCards;
  }, [score]);

  return (
    <div className=" flex flex-col border-orange-700 border-4 mx-auto mb-4 max-w-screen-lg">
      <ScoreBoard score={score} highScore={highScore}></ScoreBoard>
      {lost ? (
        <p className="text-center text-5xl mt-auto mb-2 text-red-600 text-bold">
          Oops!
        </p>
      ) : (
        ""
      )}
      {won ? (
        <p className="text-center text-5xl mt-auto mb-2 text-green-600 text-bold">
          You've WON!!
        </p>
      ) : (
        ""
      )}
      <CardContainer
        handleGameLogic={handleGameLogic}
        score={score}
        cards={cards.current}
      ></CardContainer>
    </div>
  );
}

export default Game;
