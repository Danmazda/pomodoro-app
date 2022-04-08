import { useState, useReducer } from "react";
import { Button } from "./components/Button";
import { Head } from "./components/Head";
import { Inputs } from "./components/Inputs";
import { Timer } from "./components/Timer";
import { TimerState, TimerAction, ACTIONS } from "./types/index";

function reducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case ACTIONS.START:
      return { ...state, start: !state.start };
    case ACTIONS.CHANGETIMER:
      return { ...state, timer: action.payload };
    case ACTIONS.CHANGEROUNDS:
      return { ...state, rounds: action.payload };
    case ACTIONS.CHANGEPAUSE:
      return { ...state, pause: action.payload };
    default:
      return state;
  }
}

function App() {
  const [play, setPlay] = useState(false);
  const [userValues, dispatch] = useReducer(reducer, {
    timer: 0,
    rounds: 0,
    pause: 0,
    start: false,
  });
  return (
    <div className="App flex flex-col text-center bg-orange-300 min-h-full h-full items-stretch">
      <Head play={play} setPlay={setPlay}></Head>
      {userValues.start ? (
        <Timer userValues={userValues} dispatch={dispatch} />
      ) : (
        <Inputs dispatch={dispatch}></Inputs>
      )}
      <Button
        play={play}
        setPlay={setPlay}
        userValues={userValues}
        dispatch={dispatch}
      ></Button>
    </div>
  );
}

export default App;
