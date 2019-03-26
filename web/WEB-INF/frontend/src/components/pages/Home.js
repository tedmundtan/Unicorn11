import React, { Component } from 'react'
import ExistingSpending from '../layout/ExistingSpending';
import Plans from '../layout/Plans';
import apps from '../../assets/apps.jpg'

export class Home extends Component {
    render() {
        return (
            <div>
                <br></br>
                <div className="container" style={{ backgroundColor: "#f4f4f4" }}>
                    <br />
                    <ExistingSpending />
                </div>
                <br></br>
                <div className="container" style={{ backgroundColor: "#f4f4f4" }}>
                    <br />
                    <Plans />
                </div>
                <br />
                <div className="container" style={{ backgroundColor: "#f4f4f4" }}>

                    <h3 className="text-center">Switch to our mobile apps for better financial tracking!</h3>
                    <div style={{ marginLeft: "300px", marginRight: "auto" }}>
                        <img src={apps} alt="Pay with Paylah!" style={{ alignSelf: "right" }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
