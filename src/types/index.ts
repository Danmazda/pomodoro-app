export type PlayProps = {
  play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
};

export enum ACTIONS {
  START = "START",
  CHANGETIMER = "CHANGETIMER",
  CHANGEPAUSE = "CHANGEPAUSE",
  CHANGEROUNDS = "CHANGEROUNDS",
}

export interface TimerAction {
  type: ACTIONS;
  payload: number;
}

export interface TimerState {
  timer: number;
  rounds: number;
  pause: number;
  start: boolean;
}
