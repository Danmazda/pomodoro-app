import { ACTIONS, TimerAction } from "../types";
import { TimeInput } from "./TimeInput";

export const Inputs = (props: Props) => {
  return (
    <div className="flex mx-auto my-4">
      <TimeInput
        title="Time"
        action={ACTIONS.CHANGETIMER}
        dispatch={props.dispatch}
      />
      <TimeInput
        title="Pause"
        action={ACTIONS.CHANGEPAUSE}
        dispatch={props.dispatch}
      />
      <TimeInput
        title="Rounds"
        action={ACTIONS.CHANGEROUNDS}
        dispatch={props.dispatch}
      />
    </div>
  );
};

type Props = {
  dispatch: React.Dispatch<TimerAction>;
};
