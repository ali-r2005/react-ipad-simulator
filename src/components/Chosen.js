import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Chosen = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
            <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md backdrop-blur-sm bg-opacity-90">
                <h2 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                    Choose Your Direction
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Login Button */}
                    <Link to="/Login"
                        className="group relative p-[3px] flex-1 transition-transform duration-200 transform hover:scale-105 focus:outline-none"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-200 animate-gradient" />
                        <div className={`px-8 py-3 bg-gray-900 rounded-[6px] relative group transition-all duration-200 
                            flex items-center justify-center gap-2`}>
                            <svg 
                                className={`w-5 h-5 transition-transform duration-300`}
                                fill="none" 
                                stroke="white" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" 
                                />
                            </svg>
                            <span className="text-white font-semibold">Login</span>
                        </div>
                    </Link>

                    {/* Register Button */}
                    <Link to="/register" 
                        className="group relative p-[3px] flex-1 transition-transform duration-200 transform hover:scale-105 focus:outline-none"
                        
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-200 animate-gradient" />
                        <div className={`px-8 py-3 bg-gray-900 rounded-[6px] relative group transition-all duration-200 
                            flex items-center justify-center gap-2`}>
                            <svg 
                                className={`w-5 h-5 transition-transform duration-300`}
                                fill="none" 
                                stroke="white" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" 
                                />
                            </svg>
                            <span className="text-white font-semibold">Register</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Chosen;