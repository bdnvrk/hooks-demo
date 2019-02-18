import React, {useState, useEffect} from 'react';
import { useInnerWindowSize, useMobileDetection } from './hooks'; 

const EffectHooksDemo = () => {

  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log('check');
    if(count === 10) {
      alert('We hit 10');
    }
  },[count])

  const { innerWidth, innerHeight } = useInnerWindowSize();
  const isMobile = useMobileDetection();

  return (
    <>
      <h1>Hello useEffect</h1>
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
        <h2>Window size handler</h2>
        <p>Inner window width: <span className="countDisplay">{innerWidth}</span></p>
        <p>Inner window height: <span className="countDisplay">{innerHeight}</span></p>
      </div>
      <div className="section">
        <h2>Check if mobile</h2>
        <p>Current view {isMobile ? 'is mobile' : 'is not mobile'}</p>
      </div>
    </>
  )
}

export default EffectHooksDemo;