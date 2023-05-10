import { useContext } from "react";
import "./counters.scss";
import { QuizeContext } from "./helper/QuizeContex";
import { Qestion } from "./helper/QustionBank";
import { type } from "@testing-library/user-event/dist/type";
const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizeContext);
  const restartQuize = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="container-fluid">
      <div className="row col-sm-32 col-md-24 col-lg-12">
        <div className="card ">
          <div className="card-header">
            <h1>Quize App</h1>
          </div>
          <div className="card-body flex-column">
            <button type="button" className="btn btn-primary">
              Score :
              <span className="badge badge-info">
                {score}/{Qestion.length}
              </span>
            </button>
            <button
              className="btn btn-success btn-sm m-2"
              onClick={restartQuize}
            >
              Restart Quize
            </button>
          </div>
          <div className="card-footer">disigned and develped by dmCode</div>
        </div>
      </div>
    </div>
  );
};
export default EndScreen;
