import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../Services/Actions/CounterActions";

const Counter = ({ increment, decrement, count }) => {
  return (
    <div>
      <h1>{count} </h1>
      <button onClick={() => increment(5)}>increment +</button>
      <button onClick={() => decrement(1)}>decrement -</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counterReducer.count,
});

export default connect(mapStateToProps, { increment, decrement })(Counter);
//connect uses the concept of higher order components concepts and it wraps the the component Counter and it takes the state as a props and actions
