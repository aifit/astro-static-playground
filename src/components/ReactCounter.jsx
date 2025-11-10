import React, { useState } from 'react';

export default function Counter({ initial = 0, step = 1 }) {
  const [count, setCount] = useState(initial);

  const inc = () => setCount(c => c + step);
  const dec = () => setCount(c => c - step);
  const reset = () => setCount(initial);

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ fontSize: 20 }}>{count}</div>
      <div>
        <button onClick={dec}>-</button>
        <button onClick={reset} style={{ margin: '0 8px' }}>reset</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
}
