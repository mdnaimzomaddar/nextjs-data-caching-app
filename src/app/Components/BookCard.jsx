import Link from "next/link";
import React from "react";

const BookCard = ({book}) => {

    const {id, name, description} = book

  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
            {description}
        </p>
        <div className="card-actions justify-end">
          
          <Link href={`/books/${id}`}>
            <button className="btn">Read Now..!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
