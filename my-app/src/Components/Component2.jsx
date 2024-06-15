import { useContext } from "react";
import Component3 from "./Component3";
import { counterContext } from "../Context/Counter";
import "./Component2.css"

const Component2 = () => {
  const value = useContext(counterContext);
  return (
    <div className="box2">
      <h4>Component 2</h4>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span><Component3 /></span>
        Click Me
      </button>
    </div>
  );
};

export default Component2;
