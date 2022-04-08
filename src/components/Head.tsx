import { BsFillPlayFill, BsFillPauseCircleFill } from "react-icons/bs";
import { PlayProps } from "../types/index";
export const Head = (props: PlayProps) => {
  const { play, setPlay } = props;
  return (
    <nav className="bg-orange-800 flex items-center justify-center px-6">
      <h1 className="text-3xl">Pomodoro app</h1>
      {play ? (
        <BsFillPauseCircleFill
          className="text-5xl ml-auto hover:text-white hover:cursor-pointer my-1"
          onClick={() => {
            setPlay(!play);
          }}
        />
      ) : (
        <BsFillPlayFill
          className="text-5xl ml-auto hover:text-white hover:cursor-pointer my-1"
          onClick={() => {
            setPlay(!play);
          }}
        />
      )}
    </nav>
  );
};
