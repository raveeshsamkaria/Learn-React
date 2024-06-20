import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Profile = () => {
    const params = useParams()
  return (
    <div>
        <Navbar />
        <h3>I am user {params.username}</h3>
        <Footer />
    </div>
  )
}

export default Profile