import booklist from "../json/books.json" with {type : "json"}

export const getAllBooks =()=>{
    return booklist
}

export const addBooks = (book)=>{
    booklist.push(book)
    return booklist
}

export const removeBooks = (book)=>{
    const data = booklist.filter((value)=>{
        return value.id != book
    })
    
}