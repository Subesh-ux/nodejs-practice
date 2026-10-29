import UserList from "../JSON/userlist.json" with { type: "json" };

export const loginUser=(name,password)=>{
    const user =  UserList.find((value)=>{
        return ( value.username == name && value.password=== password) 
    })
    return user ? "Login Successfull" : "Login Failed"
}