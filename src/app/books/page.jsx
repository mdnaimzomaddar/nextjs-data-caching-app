import React from 'react';
import BookCard from '../Components/BookCard';

const getBooks = async() => {
    const ref = await fetch('http://localhost:5000/books', {cache: 'no-cache'})
    if(!ref.ok){
        throw new Error("Field loading books...!")
    }
    return ref.json()
}

const BookPage = async() => {

    const books = await getBooks()

    return (
        <div>
            <h2>All Books : {books.length}</h2>

            <div className='grid grid-cols-3 gap-4'>
                {books.map(book => <BookCard key={book.id} book = {book}></BookCard>)}
            </div>
        </div>
    );
};

export default BookPage;