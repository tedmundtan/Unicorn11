import React, { Component } from 'react'
import ExistingSpending from '../layout/ExistingSpending';
import Plans from '../layout/Plans';

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <br />
                <ExistingSpending />
                <br />
                <Plans />
            </div>
        )
    }
}

export default Home;
