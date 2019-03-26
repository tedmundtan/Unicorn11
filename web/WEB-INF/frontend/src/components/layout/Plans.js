import React, { Component } from 'react'
import Barchart from '../charts/Barchart';

export class Plans extends Component {
    render() {
        return (
            <div className="container">
                <h1>Plan Savings</h1>
                <h2>Average Savings</h2>
                <Barchart />
            </div>
        )
    }
}

export default Plans
