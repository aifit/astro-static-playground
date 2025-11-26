import React, { useState } from 'react';

export default function Counter({ initial = 0, step = 1 }) {
  const [count, setCount] = useState(initial);

  const inc = () => setCount(c => c + step);
  const dec = () => setCount(c => c - step);
  const reset = () => setCount(initial);

  return (
    <div className="p-4 bg-white shadow rounded text-center border border-slate-500">
      <div className="text-base mb-2 font-bold">ReactCounter</div>
      <div className="text-2xl font-bold mb-2">{count}</div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          className="p-2 bg-sky-800 text-white cursor-pointer w-[30px] h-[30px] flex items-center justify-center"
          onClick={dec}
        >
          &minus;
        </button>
        <button
          className="p-2 bg-red-600 text-white cursor-pointer flex h-[30px] items-center justify-center"
          onClick={reset}
        >
          reset
        </button>
        <button
          className="p-2 bg-sky-800 text-white cursor-pointer w-[30px] h-[30px] flex items-center justify-center"
          onClick={inc}
        >
          +
        </button>
      </div>
    </div>
  );
}
