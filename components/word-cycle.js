import { useState } from 'react';
import useInterval from '../utils/useInterval';

const style = {
    backgroundColor: 'rgba(0,0,0,0.9)',
    color: 'darkturquoise',
    display: 'inline-block',
    padding: '1vw 2vw'
  };

export default function WordCycle(props) {

    let [index, setIndex] = useState(0);

    useInterval(() => {
        setIndex( index === props.words.length - 1 ? 0 : index + 1);
      }, 2000);
    
      return <span style={style}>{" "}{props.words[index]}</span>;
}