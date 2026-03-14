// Tabs.js

import React, { useState } from 'react';

const Tabs = ({ tabs }) => {

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const activeClick = (index) => {
        setActiveTabIndex(index);
    }

    return (
        <section className='bg-[#0f0715] min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden z-10'>
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-purple-600 to-transparent blur-[150px] -mr-20 -mt-20 z-[-1]"></div>
            <div className='container mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8'>
                <div className="flex justify-center">
                    <div className="flex flex-col md:flex-row w-full max-w-screen-lg">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/3 px-4 mb-8 mx-auto">
                                <p className="block font-bold text-3xl mb-2.5">UI Elements</p>
                                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-white bg-clip-text text-transparent mb-6">React Tabs</h1>
                                <p className='text-base'>User interface design pattern where content is organized into multiple sections, and users can switch between these sections by clicking on tab headers. Each tab header represents a different section of content.</p>
                            </div>
                            <div className="w-full md:w-2/3 px-4 mb-8 mx-auto">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">

                                        {tabs.map((tab, index) => (
                                            <button
                                                key={index}
                                                onClick={() => activeClick(index)}
                                                className={`text-base py-2 px-4 mr-8 focus-visible:outline-none rounded transition duration-300 ${index === activeTabIndex ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
                                                    } mb-2`}
                                            >
                                                {tab.title}
                                            </button>
                                        ))}
                                        
                                    </div>
                                    <div className='mt-3'>
                                        <p className="bg-[#ffffff0d] transition duration-300 p-6 border-solid border border-slate-600 rounded-lg shadow-md">
                                            {tabs[activeTabIndex].content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tabs;
