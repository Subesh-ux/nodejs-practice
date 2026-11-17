
import { useState, useEffect } from "react";

export default function Books() {

    const [booklist, setbooklist] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/books")
            .then(response => response.json())
            .then(data => setbooklist(data))
            .catch(error => console.log("Error:", error));
    }, []);

    return (
        <>
        {booklist.length === 0?(<div>
            <h1>NO BOOKS FOUND</h1>
        </div>)
        :
            (<div className="container py-4">

            {/* Header */}
            <div className="bg-primary text-white text-center p-4 rounded-3 mb-4">
                <h1>📚 Book Store</h1>
                <p className="mb-0">
                    Discover your next favourite book
                </p>
            </div>

            <h3 className="mb-4 text-primary">
                Our Books Collection
            </h3>

            {/* Book Cards */}
            <div className="row g-4">

                {booklist.map((book) => (

                    <div className="col-lg-3 col-md-4 col-sm-6" key={book.id}>

                        <div className="card h-100 shadow-sm border-0">

                            <div className="card-body">

                                <span className="badge bg-primary-subtle text-primary">
                                    {book.category}
                                </span>

                                <h5 className="card-title mt-3">
                                    {book.title}
                                </h5>

                                <p className="text-secondary">
                                    By {book.author}
                                </p>

                                <p className="card-text text-secondary">
                                    {book.description}
                                </p>

                                <div className="d-flex justify-content-between align-items-center">

                                    <h5 className="text-primary mb-0">
                                        ₹{book.price}
                                    </h5>

                                    <small className="text-muted">
                                        ⭐ {book.rating}
                                    </small>

                                </div>

                            </div>

                            <div className="card-footer bg-white border-0 p-3">
                                <button className="btn btn-primary w-100">
                                    Add to Cart
                                </button>
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>)}
        </>
        
    );
}
