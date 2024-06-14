import Navbar from './Components/Navbar'
// import Card from './Components/Card'
// import Users from './Components/Users';
// import Counter from './Components/Counter'
// import Api from './Components/Api'
import Footer from './Components/Footer'
import Count from './Components/Count'
// import { useState } from 'react'

function App() {
  // const users = [
  //   { id:0, name:"James", age:35, },
  //   { id:1, name:"Karim", age:26, },
  //   { id:2, name:"Bruno", age:45, },
  //   { id:3, name:"Mike", age:24, },
  //   { id:4, name:"Bily", age:28, },
  // ];

  // const [state, setState] = useState(true)

  return (
    <>
      <Navbar />                              {/* Navbar Component */}
      {/* <div className="cards"> 
        <Card title="Card1" price="$ 123" />
        <Card title="Card2" price="$ 456" />
        <Card title="Card3" price="$ 789" />
      </div> */}                              {/* Card Component */}
      {/* <Users users={users} /> */}         {/* Users Component */}
      {/* <Counter /> */}                     {/* useState & useEffect Hook */}
      {/* <button onClick={() => setState(!state)}>Toggle</button>
      {state ? <Counter /> : ""} */}          {/* useEffect Hook */}
      {/* <Api /> */}                         {/* useEffect Hook */}
      <Count />                               {/* useRef Hook */}
      <Footer />                              {/* Footer Component */}
    </>
  )
}

export default App
