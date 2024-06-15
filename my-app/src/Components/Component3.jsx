import { useContext } from "react";
import { counterContext } from "../Context/Counter";
import "./Component3.css"

const Component3 = () => {
  const value = useContext(counterContext);
  return (
    <div className="box3">
      <h4>Component 3</h4>
      <h3>{value.count}</h3>
    </div>
  );
};

export default Component3;
