import { useState } from "react";
import Quize from "./Quize";
import EndScreen from "./EndScreen";
import QuizeApp from "./QuizeApp";
import { QuizeContext } from "./helper/QuizeContex";

export default function Home() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div>
      <QuizeContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <QuizeApp />}
        {gameState === "ListOfQuestion" && <Quize />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizeContext.Provider>
    </div>
  );
}
