import { useContext, useState } from "react";
import { QuizeContext } from "./helper/QuizeContex";
import "./counters.scss";
import { Qestion } from "./helper/QustionBank";
export default function Quize() {
  const { gameState, setGameState, score, setScore } = useContext(QuizeContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState("");

  const nextQestion = () => {
    if (Qestion[currentQuestion].answer === optionChoosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finshQuize = () => {
    if (Qestion[currentQuestion].answer === optionChoosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };
  return (
    <div className="container-fluid">
      <div className="row col-sm-32 col-md-24 col-lg-12">
        <div className="card ">
          <div className="card-header">
            <h1>Quize App</h1>
          </div>
          <div className="card-body flex-column">
            <h4 className="title">{Qestion[currentQuestion].prompt}</h4>
            <button
              className="btn btn-primary m-2 btn-sm"
              onClick={() => setOptionChoosen("A")}
            >
              {Qestion[currentQuestion].optionA}
            </button>
            <button
              className="btn btn-primary m-2 btn-sm"
              onClick={() => setOptionChoosen("B")}
            >
              {Qestion[currentQuestion].optionB}
            </button>
            <button
              className="btn btn-primary m-2 btn-sm"
              onClick={() => setOptionChoosen("C")}
            >
              {Qestion[currentQuestion].optionC}
            </button>

            {currentQuestion === Qestion.length - 1 ? (
              <button
                className="btn btn-secondary m-2 btn-sm"
                onClick={finshQuize}
              >
                Finsh Quize
              </button>
            ) : (
              <button className="btn btn-info m-2 btn-sm" onClick={nextQestion}>
                Next Question
              </button>
            )}
          </div>
          <div className="card-footer">disigned and develped by dmCode</div>
        </div>
      </div>
    </div>
  );
}
