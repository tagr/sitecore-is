import { useState } from "react";
import useInterval from "../utils/useInterval";

export default function WordCycle(props) {
  let [index, setIndex] = useState(0);

  useInterval(() => {
    setIndex(index === props.words.length - 1 ? 0 : index + 1);
  }, 2000);

  return (
    <span className="animate-pulse px-8 text-5xl sm:text-8xl text-white">
      {" "}
      {props.words[index]}
    </span>
  );
}
