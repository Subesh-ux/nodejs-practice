import booklist from "../json/books.json" with {type : "json"}

export const getAllBooks =()=>{
    return booklist
}

export const addBooks = (book)=>{
    booklist.push(book)
    return booklist
}

export const removeBooks = (id) => {

    const data = booklist.filter((value) => {
        return value.id != id;
    });

    booklist.splice(0, booklist.length, ...data);
};

export const updateBooks = (id, content) => {
    const updatedBooks = booklist.map((value) => {
        if (value.id == id) {
            return content;
        }
        return value;
    });

    booklist.splice(0, booklist.length, ...updatedBooks);

    return booklist;
};
    
