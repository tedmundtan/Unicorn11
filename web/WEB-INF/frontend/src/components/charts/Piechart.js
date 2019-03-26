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
                }
            },
            series: [
                {
                    name: 'Data',
                    data: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="doughtnut"
                height="450"
                width="100%"
            />
        )
    }
}

export default Piechart
