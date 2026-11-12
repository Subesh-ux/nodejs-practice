import users from "../json/user.json" with {type : "json"}

export const getAllUsers = () =>{
    return users
}

export const getSingleUser=(id)=>{
     const userlist = users.filter((value)=>{
        return value.id == id
    })
    return userlist
}

export const addUser=(newuser)=>{
    users.push(newuser)
    return users
}


export const removeUser =(id)=>{
    const filteredUser = users.filter((value)=>{
        return value.id != id
    })
    return filteredUser
}