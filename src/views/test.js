import React from 'react';
import { Link } from 'react-router-dom'

const Test = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Test</h1>
                    <Link to="/">HOME</Link>
                </div>
            </div>
        </div>
    )
}

export default Test;