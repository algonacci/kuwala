import React from "react";
import KuwalaLogo from "../icons/kuwala_logo.png";

export default ({toggleNotification}) => {

    const notifications = 0;
    return (
        <header className='flex-shrink-0 border-b'>
            {/* HEADER BAR CONTAINER */}
            <div className='flex items-center justify-between p-2'>
                <div className='flex items-center'>
                    {/* COMPANY TITLE */}
                    <span className="p-4 text-xl font-semibold tracking-wider uppercase">
                        <img
                            src={KuwalaLogo} alt={"Kuwala Logo"}
                            style={{height: 40}}
                        />
                    </span>
                </div>

                {/* RIGHT BUTTONS */}
                <div className='relative flex items-center space-x-3 mr-2'>
                    {/* Notification */}
                    <div className='relative'>
                        {/* Red Dot */}
                        {notifications > 0 ? (
                            <>
                                <div className="absolute right-0 p-1 bg-red-400 rounded-full animate-ping"></div>
                                <div className="absolute right-0 p-1 bg-red-400 border rounded-full"></div>
                            </>
                        ) : ''}
                        <button
                            onClick={toggleNotification}
                            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring"
                        >
                            <svg
                                className="w-6 h-6 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Settings */}
                    <div className="relative">
                        <button
                            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring"
                        >
                            <svg
                                className="w-6 h-6 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}
