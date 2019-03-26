import React, { Component } from 'react'
import Barchart from '../charts/Barchart';
import { Link } from 'react-router-dom';

export class Plans extends Component {
    render() {
        return (
            <div className="container">
                <h1>Plan Savings</h1>
                <h2>Average Savings</h2>
                <Barchart />
                <Link to="plan" className="btn btn-danger btn-block">
                    Create a wish list!
                </Link>
                <Link to="invest" className="btn btn-danger btn-block">
                    Invest!
                </Link>
                <br />
            </div>
        )
    }
}

export default Plans
