import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Card1" price="$ 123" />
        <Card title="Card2" price="$ 456" />
        <Card title="Card3" price="$ 789" />
      </div>
      <Footer />
    </>
  )
}

export default App
