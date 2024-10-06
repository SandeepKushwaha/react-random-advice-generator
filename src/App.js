import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  
  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(function() {
    getAdvice();
  }, []);
  
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
      <Source />
    </div>
  );
}

function Message(props) {
  return (
    <div>
      <p>You have read <strong>{props.count}</strong> pieces of advice</p>
    </div>
  );
}

function Source() {
  return (
    <div>
      <p>Source: <a href="https://api.adviceslip.com/">Advice Slip APIs</a></p>
    </div>
  );
}