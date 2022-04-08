import { TimerState, TimerAction, ACTIONS } from "../types/index";
export const Button = (props: BtProps) => {
  const { play, setPlay, userValues, dispatch } = props;
  return (
    <button
      className="bg-slate-400 w-20 mx-auto rounded-xl mb-4 p-2 text-2xl hover:bg-white"
      onClick={() => {
        setPlay(!play);
        dispatch({ type: ACTIONS.START, payload: 0});
      }}
    >
      {userValues.start ? "Stop" : "Start"}
    </button>
  );
};

export type BtProps = {
  play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  userValues: TimerState;
  dispatch: React.Dispatch<TimerAction>;
};
