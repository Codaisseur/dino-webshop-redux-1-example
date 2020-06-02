import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Toolbar from "./components/Toolbar";
import NewDinoForm from "./components/NewDinoForm";

function App() {
  const dispatch = useDispatch();

  const dinos = useSelector(selectAllDinos);

  return (
    <div className="App">
      <Toolbar />
      {dinos.map((dino) => {
        return (
          <div className="dino">
            <h2>{dino.name}</h2>
            <p>Price: €{dino.price}</p>
            <p>
              <button
                onClick={() => {
                  dispatch({
                    type: "buy_dino",
                    payload: dino.id,
                  });
                }}
              >
                Buy this lovely dino
              </button>
            </p>
          </div>
        );
      })}

      <div style={{ clear: "both" }} />

      <NewDinoForm />
    </div>
  );
}

export default App;

function selectAllDinos(reduxState) {
  return [...reduxState.dinos].sort((a, b) => {
    return a.price - b.price;
  });
}
