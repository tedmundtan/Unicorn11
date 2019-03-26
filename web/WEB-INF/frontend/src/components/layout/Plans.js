import React, { Component } from 'react'
import Barchart from '../charts/Barchart';
import { Link } from 'react-router-dom';

export class Plans extends Component {
    render() {
        return (
            <div className="container">
                <h1>Plan Savings</h1>
                <h2>Monthly Savings</h2>
                <p><strong>Average savings (past year)</strong>: $4946</p>
                <p><strong>Projected monthly savings (Feb 2019)</strong>: $5720</p>
                <Barchart />
                <Link to="plan" className="btn btn-danger btn-block">
                    Create a wish list!
                </Link>
                <Link to="invest" className="btn btn-danger btn-block">
                    You are a consistent saver, try investing your funds!
                </Link>
                <br />
            </div>
        )
    }
}

export default Plans
