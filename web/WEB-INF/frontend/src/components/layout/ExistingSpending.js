import React, { Component } from 'react'
import Piechart from '../charts/Piechart';

export class ExistingSpending extends Component {
    render() {
        return (
            <div className="container">
                <h1>My Spending</h1>
                <Piechart />
            </div>
        )
    }
}

export default ExistingSpending
