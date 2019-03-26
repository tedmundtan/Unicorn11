import React, { Component } from 'react'
import Piechart from '../charts/Piechart';

export class ExistingSpending extends Component {
    render() {
        return (
            <div className="container">
                <h1>My Spending</h1>
                <h4>1-Jan-2019 to 31-Jan-2019</h4>
                <Piechart />
                <div className="text-center">
                    <h5><strong>Projected monthly spendings (Feb 2019)</strong>: ??? (Please use PayLah! to generate spending info)</h5>

                    <h3>Use PayLah! for more accurate insights!</h3>
                    <br />
                </div>
            </div>
        )
    }
}

export default ExistingSpending
