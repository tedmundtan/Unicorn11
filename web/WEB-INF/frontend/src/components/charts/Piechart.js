import React, { Component } from 'react'
import Chart from 'react-apexcharts';

export class Piechart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    background: '#f4f4f4',
                    foreColor: '#333'
                },
                labels: ['Food', 'Transport', 'Cash Withdrawals', 'Others']
            },
            series: [44, 55, 13, 33],
        }
    }
    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                height="450"
                width="80%"
            />
        )
    }
}

export default Piechart
