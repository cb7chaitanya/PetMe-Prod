import React from 'react';
import errorImage from '../../assets/404.png'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex flex-col justify-center space-y-5 items-center align-middle">
            <img src={errorImage} alt='404' />
            <h1 className='text-4xl uppercase font-bold bg-clip-text text-clip text-transparent bg-gradient-to-r from-orange-700 to-orange-300'>
                Page Not Found
            </h1>
            <h3 className='text-xl px-4 font-medium'>
                {/* That page is currently under construction. Please be patient! */}
                Oops, the page you're looking for was moved, renamed or never exist!
            </h3>
            <div className='flex items-center space-x-32'>
                <Link
                    to={'/'}
                    className='p-4 border border-orange-300 bg-gradient-to-r from-orange-700 to-orange-400 rounded-md font-bold text-white hover:bg-clip-text hover:text-transparent'
                >
                    Go Home
                </Link>
                <Link
                    to={'/contact'}
                    className='p-4 border border-orange-300 bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-orange-400 font-bold rounded-md hover:bg-clip-border hover:text-white'
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
}

export default NotFound;