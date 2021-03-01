import { useState, useEffect } from 'react';

import styles from './index.module.scss';

export function Preloader(props: IProps) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setCount(count < props.dotsCount ? count + 1 : 0);
    }, 300);

    return () => clearTimeout(timerID);
  });

  return (
    <div className={styles.wrapper}>
      Loading{'.'.repeat(count)}
    </div>
  );
}

Preloader.defaultProps = {
  dotsCount: 3,
};

interface IProps {
  dotsCount?: number;
}
