import React, { Component } from 'react'
import Chart from 'react-apexcharts';

export class Piechart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                xaxis: {
                    categories: ['Sep 2018', 'Oct 2018', 'Nov 2018', 'Dec 2018']
                },
            },
            series: [{
                name: "Savings",
                data: [4799.45, 5121.46, 5217.28, 5646.14]
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
