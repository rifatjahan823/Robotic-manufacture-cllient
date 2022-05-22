import React from 'react';

const Loading = () => {
    return (
        <div>
         <div className='vh-100 justify-center items-center'>
            {/* <button className="btn btn-square loading "></button> */}
            <img className='img-fluid' src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif" alt="" />
        </div> 
        </div>
    );
};

export default Loading;