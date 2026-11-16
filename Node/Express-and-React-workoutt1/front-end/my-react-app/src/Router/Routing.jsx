import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "../pages/home"
import Books from "../pages/books"

export default function RoutingOutlet(){

    return(

        <>
        
            <BrowserRouter>
                <Routes>
                    <Route index element ={<Homepage/>}/>
                    <Route path="/books" element ={<Books/>}/>                    
                </Routes>
            </BrowserRouter>
        
        
        </>
    )
}