import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                <div className="ml-2 text-xl text-blue-700 font-bold animate-pulse">Loading...</div>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ?
                    children
                    :
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
            }
        >

        </Route>
    );
};

export default PrivateRoute;