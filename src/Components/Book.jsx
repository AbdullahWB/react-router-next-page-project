import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const Book = ({ book }) => {
    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
        return <LoadingSpinner />
    }
    return (
        <Link to={`../book/${book.isbn13}`}>
            <div>
                <div className='transition transform hover:-translate-y-2 duration-300 overflow-hidden relative rounded-lg shadow-lg hover:shadow-xl'>
                    <img className='object-cover w-full h-56 md:h-64 xl:h-80' src={book.image} alt="" />
                    <div className='py-4 px-6 absolute inset-0 bg-black text-gray-100 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300' >
                        <p>{book.title}</p>
                        <br />
                        <p>{book.subtitle.substring(0, 45)} ...</p>
                        <br />
                        <p className='mt-auto'>Price: {book.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;