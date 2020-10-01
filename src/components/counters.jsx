import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;

    return (
      <div>
        <button className="btn btn-primary" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
