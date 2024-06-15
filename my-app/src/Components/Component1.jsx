import Component2 from "./Component2";
import "./Component1.css"

const Component1 = () => {
  return (
    <div className="box1">
      <h4>Component1</h4>
      <Component2 />
    </div>
  );
};

export default Component1;
