import { useState } from "react";
import Books from "./books";

export default function AddBooks() {

    const [addedBooks, setAddedBooks] = useState(false)
    const addingBooks = () => {
        const book = {
    "id": 1,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "category": "Fiction",
    "price": 299,
    "rating": 4.8,
    "description": "A young shepherd travels in search of his personal legend and treasure."
  }

        fetch("http://localhost:8000/books/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

        setAddedBooks(true)
    };

    return <>
    {addedBooks ? (
        <Books />
    ) : (
        <div className="container mt-4">
            <button className="btn btn-primary" onClick={addingBooks}>
                Add Book
            </button>
        </div>
    )}
</>
}

