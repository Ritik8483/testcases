import React, { useState } from "react";

export const useCounter = ({initailCount}:any) => {
  const [count, setCount] = useState(initailCount);
  const increment = setCount(count + 1);
  const decrement = setCount(count - 1);

  return { count, increment, decrement };
};
