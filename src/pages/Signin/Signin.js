import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Signin.css';

const Signin = () => {
    const { signInUsingGoogle, setError, error, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(() => {
                setError('');
                history.push(redirect_uri);
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }
    return (
        <>
            <div className="signup-form">
                <div className="form-border">
                    <h4 className="text-2xl font-bold mb-2">Sign in</h4>
                    <form className="my-4">
                        <input className="input-box placeholder-blue-300" type="text" placeholder="Email Address" />
                        <input className="input-box placeholder-blue-300" type="password" placeholder="Password" />
                        <div>
                            <input className="mt-2" type="checkbox" id="remember" />
                            <label className="ml-1" htmlFor="remember">Remember me</label>
                        </div>
                        <span className="text-red-600">{error}</span>
                        <input className="input-box bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-6 rounded-md text-white font-medium shadow-md mt-6" type="submit" value="Login" />
                    </form>
                </div>
            </div>
            <div>
                <div className="flex justify-center">
                    <h6 className="font-semibold text-lg">or</h6>
                </div>
                <div className="text-center mb-12">
                    <button onClick={handleGoogleSignIn} className="border-2 border-yellow-400 hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 py-1 px-12 rounded-full py-2 px-6 text-yellow-400 font-medium shadow-md"><i className="fab fa-google"></i> Continue with Google</button>
                </div>
            </div>
        </>
    );
};

export default Signin;