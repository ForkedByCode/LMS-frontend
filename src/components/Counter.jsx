import React, { useState, useEffect } from "react";

function Counter({ upto, speed }) {
  const [count, setCount] = useState(0.0);
  const limit = upto;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < limit) {
          return prevCount + 0.1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [limit]);

  return (
    <p className="text-white font-semibold text-3xl m-1.5 ms-6">
      {count.toPrecision(2)}K+
    </p>
  );
}

export default Counter;
