import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Home</h1>
                    <Link to="/test">TEST</Link>
                </div>
            </div>
        </div>
    )
}
export default Home