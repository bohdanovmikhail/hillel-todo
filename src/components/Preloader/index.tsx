import { useState, useEffect } from 'react';

import styles from './index.module.scss';

export function Preloader() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setCount(count < 3 ? count + 1 : 0);
    }, 300);

    return () => clearTimeout(timerID);
  });

  return (
    <div className={styles.wrapper}>
      Loading{'.'.repeat(count)}
    </div>
  );
}
