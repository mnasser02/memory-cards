import React from "react";

type ScoreProps = {
  score: number;
  highScore: number;
};
function ScoreBoard({ score, highScore }: ScoreProps) {
  return (
    <ul>
      <li>score: {score}</li>
      <li>high score: {highScore}</li>
    </ul>
  );
}

export default ScoreBoard;
