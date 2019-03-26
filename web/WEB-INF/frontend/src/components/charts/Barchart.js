import React, { Component } from 'react'
import Chart from 'react-apexcharts';

export class Piechart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                xaxis: {
                    categories: ['1 month', '3 months', '6 months', '1 year', '2 years']
                },
            },
            series: [{
                data: [400, 430, 448, 470, 500]
            }],
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

export default Piechart
