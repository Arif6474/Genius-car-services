import React from 'react';
import notFound from '../../../notFound.jpeg.jpg'

const NotFound = () => {
    return (
        <div className="w-100 ">
            <h2 className="text-center text-danger my-4">No result found!</h2>
            <img w-100  src={notFound} alt="" />
        </div>
    );
};

export default NotFound;