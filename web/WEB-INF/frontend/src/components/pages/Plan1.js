import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { DatePicker } from 'material-ui';

import { axios } from 'axios';

import Goals from '../charts/Goals';

export class Plan extends Component {
    state = {
        itemName: "",
        amount: "",
        targetDate: "",
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
                                onClick={this.onClick}
                            />
                            <br />
                        </Fragment>
                    </MuiThemeProvider>
                </div>
                <div><p></p></div>
                <div className="container" style={{ backgroundColor: "#f4f4f4" }}>
                    <br />
                    <h2>Current Progress</h2>
                    <Goals />
                </div>
            </div>


        )
    }
}

export default Plan
