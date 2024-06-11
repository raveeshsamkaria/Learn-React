import Navbar from './Components/Navbar'
// import Card from './Components/Card'
import Footer from './Components/Footer'
import Users from './Components/Users';

function App() {
  const users = [
    { id:0, name:"James", age:35, },
    { id:1, name:"Karim", age:26, },
    { id:2, name:"Bruno", age:45, },
    { id:3, name:"Mike", age:24, },
    { id:4, name:"Bily", age:28, },
  ];

  return (
    <>
      <Navbar />
      {/* <div className="cards">
        <Card title="Card1" price="$ 123" />
        <Card title="Card2" price="$ 456" />
        <Card title="Card3" price="$ 789" />
      </div> */}
      <Users users={users} />
      <Footer />
    </>
  )
}

export default App
