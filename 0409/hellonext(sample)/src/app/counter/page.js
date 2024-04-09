"use client"; // This is a client component

import React, { useState } from "react";
import styles from "./counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>
        Count: {/* count 가 0보다 작으면 minus 클래스를 적용한다. */}
        {count < 0 ? <span className={styles.minus}>{count}</span> : count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
