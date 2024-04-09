"use client"; // This is a client component

import React, { useState } from "react";
import styles from "./counter.module.css";

// counter 컴포넌트
// 버튼을 눌러 상태(State)를 변경
export default function Counter() {
    // 변수명 count, 함수명 setCount
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
