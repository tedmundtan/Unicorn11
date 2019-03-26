import React, { Component } from 'react'

export class Plans extends Component {
    render() {
        return (
            <div className="container">
                <h1>Financial Plans</h1>
                <ul>
                    <h2>Average Savings</h2>
                    <ul><strong>1 month</strong>: $123</ul>
                    <ul><strong>6 months</strong>: $345</ul>
                    <ul><strong>1 year</strong>: $678</ul>
                </ul>
            </div>
        )
    }
}

export default Plans
