import React, { Component } from 'react'
import Piechart from '../charts/Piechart';

export class ExistingSpending extends Component {
    render() {
        return (
            <div className="container">
                <h1>My Spending</h1>
                <h4>1-Jan-2019 to 31-Jan-2019</h4>
                <Piechart />
            </div>
        )
    }
}

export default ExistingSpending
