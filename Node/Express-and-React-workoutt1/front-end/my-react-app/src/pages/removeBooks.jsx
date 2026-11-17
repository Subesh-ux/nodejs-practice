import { useParams } from "react-router-dom"
import Books from "./books"
export default function RemoveBooks(){
    const {id} = useParams()

    fetch(`http://localhost:8000/books/delete/${id}` ,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
            
        })

    return(
        <>
            <h3>Book with ID {id} is deleted successfully!</h3>

            <div>
                <Books/>
            </div>
        
        
        </>
    )
}