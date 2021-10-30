import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, signingOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        borderBottom: '2px solid rgb(168, 168, 168)',
        color: 'rgb(221, 223, 235)'
    }
    return (
        <div className="bg-gradient-to-r from-gray-500 to-gray-900 py-2 text-gray-200 flex justify-between">
            <Link to="/" className="flex items-center lg:ml-16">
                <div className="text-5xl text-blue-300">
                    <img width="65px" src={logo} alt="" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold ml-4">Crazy Traveler</h2>
                    <small className="ml-14 font-semibold text-gray-300">Your travel director</small>
                </div>
            </Link>
            <div className="text-right p-4">
                <nav>
                    <label id="icon">
                        <i className="fas fa-bars"></i>
                    </label>
                    <ul>
                        <li>
                            <NavLink className="hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/home" activeStyle={activeStyle}>Home</NavLink>
                        </li>

                        <li>
                            {user.email ?
                                <small>
                                    <span>Hello, {user.displayName}</span>
                                    <button onClick={signingOut} className="bg-gray-600 hover:bg-gray-300 px-2 py-1 hover:text-gray-900 rounded-lg ml-2" to="/login">Logout</button>
                                </small>
                                :
                                <NavLink className="bg-blue-600 hover:bg-blue-300 px-4 py-2 hover:text-gray-900 rounded-lg" to="/signin">Sign in</NavLink>
                            }
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;