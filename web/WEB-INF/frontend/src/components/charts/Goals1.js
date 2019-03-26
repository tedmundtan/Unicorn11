import React, { Component } from 'react'
import Chart from 'react-apexcharts';

export class Goals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                xaxis: {
                    categories: ['iPad', 'iPhone', 'MacBook', 'holiday']
                }
            },
            series: [
                {
                    name: 'Current',
                    data: [400, 800, 1200, 2000]
                },
                {
                    name: 'Goal',
                    data: [600, 1200, 2000, 3000]
                }
            ]
        }
    }
    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                height="300"
                width="100%"
            />
        )
    }
}

export default Goals
