import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "../pages/home"
import Vegetables from "../pages/vegetables"

export default function RoutingOutlet(){

    return(

        <>
        
            <BrowserRouter>
                <Routes>
                    <Route index element ={<Homepage/>}/>
                    <Route path="/vegetables" element ={<Vegetables/>}/>                    
                </Routes>
            </BrowserRouter>
        
        
        </>
    )
}