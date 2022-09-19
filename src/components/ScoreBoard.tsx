import React from "react";

type ScoreProps = {
  score: number;
  highScore: number;
};
function ScoreBoard({ score, highScore }: ScoreProps) {
  return (
    <ul className=" text-right font-bold text-yellow-400 text-2xl mr-8 mt-4 ">
      <li>score: {score}</li>
      <li>high score: {highScore}</li>
    </ul>
  );
}

export default ScoreBoard;
