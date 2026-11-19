
import { useState } from "react";
import Books from "./books";

export default function AddBooks() {

    const [addedBooks, setAddedBooks] = useState(false);

    const [book, setBook] = useState({
        id: "",
        title: "",
        author: "",
        category: "",
        price: "",
        rating: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setBook({
            ...book,
            [name]: value
        });
    };

    const addingBooks = (e) => {
        e.preventDefault();

        const newBook = {
            ...book,
            id: Number(book.id),
            price: Number(book.price),
            rating: Number(book.rating)
        };

        fetch("http://localhost:8000/books/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setAddedBooks(true);
        })
        .catch(error => console.log(error));
    };

    return (
        <>
            {addedBooks ? (
                <Books />
            ) : (
                <div className="container mt-4">
                    <h2>Add New Book</h2>

                    <form onSubmit={addingBooks}>

                        <input
                            className="form-control mb-3"
                            type="number"
                            name="id"
                            placeholder="Book ID"
                            value={book.id}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            type="text"
                            name="title"
                            placeholder="Book Title"
                            value={book.title}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            type="text"
                            name="author"
                            placeholder="Author"
                            value={book.author}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={book.category}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={book.price}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            type="number"
                            step="0.1"
                            name="rating"
                            placeholder="Rating"
                            value={book.rating}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            className="form-control mb-3"
                            name="description"
                            placeholder="Description"
                            value={book.description}
                            onChange={handleChange}
                            required
                        />

                        <button className="btn btn-primary" type="submit">
                            Add Book
                        </button>

                    </form>
                </div>
            )}
        </>
    );
}
