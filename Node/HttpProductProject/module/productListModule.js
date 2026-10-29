import productList from "../json/productList.json" with {"type" : "json"}

export const getAllProducts =() =>{
    return productList
}
export const getFashionProducts =()=>{
    
   const data = productList.filter((value)=>{
        return (value.category == "Fashion")
    })

    return data

}

export const getGroceryProducts =()=>{
    
   const data = productList.filter((value)=>{
        return (value.category == "Grocery")
    })

    return data

}

export const getSnacksProducts =()=>{
    
   const data = productList.filter((value)=>{
        return (value.category == "Snacks")
    })

    return data

}

export const deleteFashionProducts=()=>{
    const data = productList.filter((value)=>{
        return (value.category != "Fashion")
    })

    return data
}

export const deleteGroceryProducts=()=>{
    const data = productList.filter((value)=>{
        return (value.category != "Grocery")
    })

    return data
}

export const deleteSnacksProducts=()=>{
    const data = productList.filter((value)=>{
        return (value.category != "Snacks")
    })

    return data
}
