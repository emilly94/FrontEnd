import React, { useState } from 'react';

import '../styles/Counter.css';

const Counter = () =>{
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador+1);
  }
  return(
    <div className="counter">
      <h3>Contador</h3>
      <span>{contador}</span>

      <button onClick={incrementarContador}>
       Incrementar
      </button>
    </div>
  )
}
export default Counter;