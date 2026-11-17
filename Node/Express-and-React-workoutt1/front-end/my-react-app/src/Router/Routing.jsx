import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "../pages/home"
import Books from "../pages/books"
import AddBooks from "../pages/appbooks"
import RemoveBooks from "../pages/removeBooks"
import UpdateBooks from "../pages/updateBooks"

export default function RoutingOutlet(){

    return(

        <>
        
            <BrowserRouter>
                <Routes>
                    <Route index element ={<Homepage/>}/>
                    <Route path="/books" element ={<Books/>}/>  
                    <Route path ="/books/add" element ={<AddBooks/>}/>   
                    <Route path="/books/delete/:id" element ={<RemoveBooks/>}/>   
                    <Route path ="/books/update/:id" element ={<UpdateBooks/>}/>         
                </Routes>
            </BrowserRouter>
        
        
        </>
    )
}