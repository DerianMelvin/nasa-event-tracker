import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading Data...</span>
      </Spinner>
    </div >
  )
}

export default Loader
