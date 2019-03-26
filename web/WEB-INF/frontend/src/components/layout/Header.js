import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
                <div className="container">
                    <img src={logo} style={{ height: "40px" }} alt="DBS" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <a className="navbar-brand" href="/"> iBanking</a>
                    </div>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item mr-3">
                            <Link to="/"
                                className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to="/plan"
                                className="nav-link">
                                Plan
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"
                                className="nav-link">
                                My Accounts
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/"
                                className="nav-link">
                                Transfer
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"
                                className="nav-link">
                                Pay
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"
                                className="nav-link">
                                Cards
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/invest"
                                className="nav-link">
                                Invest
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link btn btn-secondary btn-sm text-light">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Header;
