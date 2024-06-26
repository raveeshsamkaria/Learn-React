import Navbar from './Components/Navbar'
// import Card from './Components/Card'
// import Users from './Components/Users';
// import Counter from './Components/Counter'
// import Api from './Components/Api'
// import Count from './Components/Count'
// import Component1 from './Components/Component1'
// import Memo from './Components/Memo'
// import Callback from './Components/Callback'
// import Event from './Components/Event'
import Form from './Components/Form'
import Footer from './Components/Footer'
// import { counterContext } from "./Context/Counter"
// import { useState } from 'react'
// import { useCallback } from 'react'

function App() {
  // const users = [
  //   { id:0, name:"James", age:35, },
  //   { id:1, name:"Karim", age:26, },
  //   { id:2, name:"Bruno", age:45, },
  //   { id:3, name:"Mike", age:24, },
  //   { id:4, name:"Bily", age:28, },
  // ];

  // const [state, setState] = useState(true)
  // const [count, setCount] = useState(0)
  // const [add, setAdd] = useState(0)

  // const calculate = useCallback(() => {
    // Doing some calculations
  // }, [add])                                                           // Memoized Callback Function

  return (
    <>
      {/* <counterContext.Provider value={{count, setCount}}> */}       {/* Context Provider */}
      <Navbar />                                                        {/* Navbar Component */}
      {/* <div className="cards"> 
        <Card title="Card1" price="$ 123" />
        <Card title="Card2" price="$ 456" />
        <Card title="Card3" price="$ 789" />
      </div> */}                                                        {/* Card Component */}
      {/* <Users users={users} /> */}                                   {/* Users Component */}
      {/* <Counter /> */}                                               {/* useState() & useEffect() Hook */}
      {/* <button onClick={() => setState(!state)}>Toggle</button>
      {state ? <Counter /> : ""} */}                                    {/* useEffect() Hook */}
      {/* <Api /> */}                                                   {/* useEffect() Hook */}
      {/* <Count /> */}                                                 {/* useRef() Hook */}
      {/* <h2>{count}</h2>
      <button onClick={() => {setCount((count) => count + 1)}}>Click Me</button><br /> */}
      {/* <Component1 /> */}                                            {/* useContext() Hook */}
      {/* <Memo /> */}                                                  {/* useMemo() Hook */}
      {/* <h1>{count}</h1>
      <button onClick={() => {setCount((count) => count + 1)}}>Click Me</button><br /> */}
      {/* <Callback calculate={calculate} /> */}                        {/* useCallback() Hook */}
      {/* <h1>{add}</h1>
      <button onClick={() => {setAdd((add) => add + 1)}}>Addition</button> */}
      {/* <button onClick={() => setState(!state)}>Toggle</button> <br />
      {state ? <Counter /> : "Nothing to Display"} <br /> */}           {/* Conditional Rendering */}
      {/* <Event /> */}                                                 {/* Event Handling */}
      {/* <h1>Home</h1> */}
      <Form />
      <Footer />                                                        {/* Footer Component */}
      {/* </counterContext.Provider> */}
    </>
  )
}

export default App
