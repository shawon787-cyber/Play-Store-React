import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white">
            
            {/* Loader */}
            <div className="mb-6">
                <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            </div>

            {/* Error Code */}
            <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>

            {/* Message */}
            <p className="text-lg text-black mb-6">
                Oops! Something went wrong. Page not found.
            </p>

            {/* Button */}
            <Link to="/">
                <button className="px-6 py-2 bg-red-500 hover:bg-red-600 transition-all duration-300 rounded-lg shadow-lg shadow-red-500/20">
                    Go Back Home
                </button>
            </Link>

        </div>
    );
};

export default ErrorPage;