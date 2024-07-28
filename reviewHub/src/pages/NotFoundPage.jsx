import React from 'react'
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section>
        <div className="container">
            <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
                <FaExclamationTriangle className="display-1 text-danger" />
                <h1 className="text-danger">404</h1>
                <h2>Sorry, page not found</h2>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
            </div>
        </div>
    </section>
  )
}

export default NotFoundPage