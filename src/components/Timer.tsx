import { TimerAction, TimerState, ACTIONS } from "../types";


export const Timer = (props: Props) => {
  const { timer, pause, rounds } = props.userValues;
  return (
    <div>
      <h3>Começou o tempo</h3>
      <div className=" bg-black text-gray-50 rounded-full w-10 h-10 mx-auto flex items-center justify-center">
        <h2>{timer}</h2>
        <h2>{pause}</h2>
        <h2>{rounds}</h2>
      </div>
    </div>
  );
};

type Props = {
  userValues: TimerState;
  dispatch: React.Dispatch<TimerAction>;
};

// props.dispatch({type: ACTIONS.CHANGETIMER, payload: props.userValues.timer--}
