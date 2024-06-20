import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <img src="https://img.freepik.com/premium-vector/error-404-line-icons-cloud-saving-personal-data-security-road-sign-found-internet-web-design-concept-vector-line-icon-white-background_661108-3791.jpg?w=740" alt="404-page-not-found" width={350} />
        <br />
        <Link to='/'>Home</Link>
    </>
  )
}

export default NotFound