import UserList from "../JSON/userlist.json" with { type: "json" };


const publicUserList = UserList.map(({password,loginToken,...UserList})=>UserList)


export const getAllUsers = () => {
    return publicUserList
}

export const getUserbyName =(name)=>{
    return publicUserList.filter((value)=>{
        return value.username == name
    })
}

export const getUserbyGender = (gender)=>{
    return publicUserList.filter((value)=>{
        return value.gender == gender
    })
}

export const getUserbyDegree=(Degree)=>{
    return publicUserList.filter((value)=>{
        return value.degree==Degree
    })
}