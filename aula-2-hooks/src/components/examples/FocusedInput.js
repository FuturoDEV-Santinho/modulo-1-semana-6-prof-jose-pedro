import { useEffect, useRef } from "react";

const FocusedInput = () => {

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <input type="text" ref={inputRef} />
  );

}

export default FocusedInput;
