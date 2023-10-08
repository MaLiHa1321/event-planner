import React from 'react';

const Venue = () => {
    return (
        <div className='container w-10/12 mx-auto p-4'>
            <div className='flex flex-col justify-between items-center lg:flex-row gap-12'>
                <div>
            <h2 className='text-2xl font-bold m-4'>Wedding venu</h2>
            <p>Selecting the perfect wedding venue is a pivotal decision in the journey towards your big day. It's not just a physical space; it's the canvas upon which your love story will be painted. The choice of a wedding venue sets the tone, style, and ambiance for your celebration.</p>

                </div>
            <img className='w-[500px] h-[400px]' src="https://i.ibb.co/qWJyhMr/luxurious-dinner-hall-with-large-crystal-chandelier.jpg" alt="" />

            </div>
            <div className='flex flex-col justify-between items-center lg:flex-row-reverse gap-12'>
                <div>
            <h2 className='text-2xl font-bold m-4'>Engagment venu</h2>
            <p>Choosing the right engagement venue is the first step in celebrating your commitment to one another. It's a chance to share your joy and love with those closest to you, setting the tone for the exciting journey towards your wedding day. Take your time to find a venue that resonates with your unique love story and creates beautiful memories that will last a lifetime..</p>

                </div>
            <img className='w-[500px] h-[400px]' src="https://i.ibb.co/rxC8Q38/beautiful-wedding-flower-arrangement-seats-along-aisle.jpg" alt="" />

            </div>
            <div className='flex flex-col justify-between items-center lg:flex-row gap-12'>
                <div>
            <h2 className='text-2xl font-bold m-4'>Birthday celebration venu</h2>
            <p>Choosing the right birthday celebration venue is the first step in celebrating your commitment to one another. It's a chance to share your joy and love with those closest to you, setting the tone for the exciting journey towards your wedding day. Take your time to find a venue that resonates with your unique love story and creates beautiful memories that will last a lifetime..</p>

                </div>
            <img className='w-[500px] h-[400px]' src="https://i.ibb.co/Hn47CWn/beautiful-jungle-party-decorations.jpg" alt="" />

            </div>
            
        </div>
    );
};

export default Venue;