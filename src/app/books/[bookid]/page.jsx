import React from 'react';

const BookDetails = async({params}) => {

    const {bookid} = await params

    const ref = await fetch(`http://localhost:5000/books/${bookid}`)
    const book = await ref.json()
    return (
        <div>
            <h2>Book Information Of : {book.id}</h2>
            <h2>Book Tital: {book.name}</h2>
            <p>Price: {book.price}</p>
            <p>Category: {book.category}</p>
            <p>Description: {book.description}</p>
        </div>
    );
};

export default BookDetails;