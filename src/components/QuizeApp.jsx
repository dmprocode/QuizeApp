import { useState, useContext } from "react";
import { Start } from "@mui/icons-material";
import "./counters.scss";
import { QuizeContext } from "./helper/QuizeContex";

const QuizeApp = () => {
  const { gameState, setGameState } = useContext(QuizeContext);
  return (
    <div className="container-fluid">
      <div className="row col-sm-32 col-md-24 col-lg-12">
        <div className="card ">
          <div className="card-header">
            <h1>Quize App</h1>
          </div>
          <div className="card-body">
            <button
              className="btn btn-primary btn-sm"
              style={{ display: "flex", gap: "10px" }}
              onClick={() => setGameState("ListOfQuestion")}
            >
              Click to Start Quize
              <Start />
            </button>
          </div>
          <div className="card-footer">disigned and develped by dmCode</div>
        </div>
      </div>
    </div>
  );
};
export default QuizeApp;
