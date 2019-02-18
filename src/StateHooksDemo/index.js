import React, { useState } from 'react';



const StateHooksDemo = () => {
  const [buttonTouched, setButtonTouched] = useState(false);
  const [count, setCount] = useState(0);
  const [objExample, setObjectExample] = useState([{name: 'Tomasz', age: 24}]);

  const addAnotherPerson = () => {
    const newPerson = {
      name: 'Name',
      age: 24,
    }

    setObjectExample([...objExample, newPerson]);
  }

  return (
    <>
      <h1>Hello useState</h1>
      <div className="section">
        <h2>Change button color</h2>
        <button
          onClick={() => setButtonTouched(!buttonTouched)}
          className={`btn ${buttonTouched ? 'btnRed' : 'btnBlack'}`}
        >
          Change color
        </button>
      </div>
      <div className="section">
        <h2>Counter</h2>
        <button
          onClick={() => setCount(count + 1)}
          className="btn"
        >
          Add + 1
        </button>
        <span className="countDisplay">{count}</span>
      </div>
      <div className="section">
        <h2>Object demo</h2>
        <button
          onClick={() => addAnotherPerson()}
          className="btn"
        >
          Add another person
        </button>
        {objExample.map((obj) => (
          <p>{obj.name} {obj.age}</p>
        ))}
      </div>
    </>
  )
}

export default StateHooksDemo;