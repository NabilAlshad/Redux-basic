import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Services/Actions/CounterActions";

const CounterTwo = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter two with redux hooks</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment(2))}>add +</button>
      <button
        onClick={() => {
          dispatch(decrement(1));
        }}
      >
        minus -
      </button>
    </div>
  );
};

export default CounterTwo;
