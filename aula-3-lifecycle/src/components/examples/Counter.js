import { useEffect, useRef, useState } from "react";

const Counter = () => {
  /**
   * Inicialização
   */
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const numRef = useRef();

  /**
   * Montagem
   */
  useEffect(() => {
    console.log('Componente está sendo montado!');
  }, [])

  /**
   * Atualização
   */
  useEffect(() => {
    console.log('Componente está sendo atualizado!');
    if (show) {
      numRef.current.style.color = randomColor();
    }
  }, [count, show])

  /**
   * Desmontagem
   */ 
  useEffect(() => {
    return () => {
      console.log('Component está sendo desmontado!');
    }
  })


  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }

  const randomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'cyan', 'black'];
    return colors[Math.trunc(Math.random()*6) + 1];
  }

  return (
    <div>
      {show && <div>
        <p ref={numRef}>{count}</p>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
      </div>}
      <button onClick={() => setShow(!show)}>{show ? 'Esconder' : 'Mostrar'}</button>
    </div>
  )

}

export default Counter;