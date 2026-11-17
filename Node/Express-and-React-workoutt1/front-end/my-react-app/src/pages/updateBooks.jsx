import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Books from "./books"

  const book = {
        "id": 5,
        "title": "The Psychology of Money - Revised Edition",
        "author": "Morgan Housel",
        "category": "Finance",
        "price": 499,
        "rating": 4.9,
        "description": "An insightful book about how emotions, behaviour, and personal experiences influence financial decisions and wealth creation."
    }

export default function UpdateBooks() {
  

    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:8000/books/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })
            .then(response => response.json())
            .then(data => console.log(data));

    }, [id]);
    return (

        <>
            <Books />


        </>
    )
}