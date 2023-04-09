// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import { useState } from 'react';

export default function Home() {
  const [state, setstate] = useState(0);
  return (
    <>
      <div
        
      >
        <button onClick={(e) => setstate(state + 1)}>+</button>
        {state} <button onClick={(e) => setstate(state - 1)}>-</button>
      </div>
    </>
  );
}
