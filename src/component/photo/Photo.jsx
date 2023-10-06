import React from 'react';

const Photo = () => {
    return (
        <div className='mt-12'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
               
                <img src="https://i.ibb.co/D4mXHPD/room-with-flowers.jpg" className='w-full h-full grid-span-2' alt="" />
                <img src="https://i.ibb.co/Hn47CWn/beautiful-jungle-party-decorations.jpg" className='w-full h-full' alt="" />
                <img src="https://i.ibb.co/nLqC0f3/andreas-ronningen-S2-Yss-Lw97l4-unsplash.jpg" className='w-full h-full' alt="" />
                <img src="https://i.ibb.co/HgZzYdb/jeremy-wong-weddings-K8-Ki-CHh4-WU4-unsplash.jpg" className='w-[500px] h-[500px]' alt="" />
                <img src="https://i.ibb.co/B4DZCzm/al-elmes-ULHx-Wq8reao-unsplash.jpg"  className='w-[500px] h-[500px]'alt="" />
                <img src="https://i.ibb.co/KwRPyQd/wout-vanacker-l4-HBYk-URqv-E-unsplash.jpg" className='w-[500px] h-[500px]' alt="" />
            </div>
            
        </div>
    );
};

export default Photo;