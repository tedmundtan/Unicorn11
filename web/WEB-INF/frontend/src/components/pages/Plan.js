import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { DatePicker } from 'material-ui';

import { axios } from 'axios';

import Goals from '../charts/Goals';
import Goals1 from '../charts/Goals1';

export class Plan extends Component {
    state = {
        itemName: "",
        amount: "",
        targetDate: "",
        counter: "1"
    }


    onClick = e => {
        this.setState({ counter: "2" })
        console.log(this.state)
    }

    onChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { itemName, amount, targetDate } = this.state;
        return (
            <div>
                <br></br>
                <div className="container" style={{ backgroundColor: "#f4f4f4" }}>
                    <br />
                    <h1>Plan My Savings</h1>
                    <h2>Saving up to buy something?</h2>
                    <h3>Set savings goals for items you want to buy!</h3>
                    <br />

                    {/* add form to enter savings goals */}
                    <MuiThemeProvider>
                        <Fragment>
                            <TextField hintText="What item do you plan to buy?"
                                floatingLabelText="Item"
                                onChange={this.onChange}
                            />
                            <TextField hintText="How much does the item cost?"
                                floatingLabelText="Price"
                                onChange={this.onChange}
                            />
                            <DatePicker hintText="When do you want to buy it?"
                                floatingLabelText="Date"
                                onChange={this.onChange}
                            />
                            <RaisedButton
                                label="Continue"
                                onClick={this.onClick.bind(this)}
                            />
                            <br />
                        </Fragment>
                    </MuiThemeProvider>
                </div>
                <div><p></p></div>
                <div className="container" style={{ backgroundColor: "#f4f4f4" }}>
                    <br />
                    <h2>Current Progress</h2>
                    {(this.state.counter === '1') ? <Goals /> : <Goals1 />}
                </div>
            </div>


        )
    }
}

export default Plan
