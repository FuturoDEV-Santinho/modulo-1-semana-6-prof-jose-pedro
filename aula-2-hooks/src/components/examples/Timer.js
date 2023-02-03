import { useEffect, useState } from "react";

const Timer = () => {
  const[count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000);
  });

  return <p>I've rendered {count} times!</p>;

}

export default Timer;