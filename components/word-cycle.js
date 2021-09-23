import { useState } from 'react';
import useInterval from '../utils/useInterval';

const style = {
    color: 'darkturquoise',
  };

export default function WordCycle(props) {

    let [index, setIndex] = useState(0);

    useInterval(() => {
        setIndex( index === props.words.length - 1 ? 0 : index + 1);
      }, 1000);
    
      return <span style={style}>{props.words[index]}</span>;
}