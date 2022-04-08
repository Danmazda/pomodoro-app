import { ACTIONS, TimerAction } from "../types";


export const TimeInput = (props: Props) => {
  return (
    <div>
      <h2 className="font-bold">{props.title}</h2>
      <input
        type="number"
        min="1"
        className="m-2 h-20 text-center bg-gray-700 text-neutral-50 text-2xl rounded-xl"
        onChange={(e) => {
          props.dispatch({
            type: props.action,
            payload: Number(e.target.value),
          });
        }}
      />
    </div>
  );
};

type Props = {
  action: ACTIONS;
  title: string;
  dispatch: React.Dispatch<TimerAction>;
};
