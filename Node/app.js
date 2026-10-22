import { getAllUsers , getUserbyName ,getUserbyGender,getUserbyDegree} from "./LoginUserTask/userModule.js";
import { loginUser } from "./LoginUserTask/loginModule.js";

const allUsers = getAllUsers()
const userByName = getUserbyName("priya")
const userByGender = getUserbyGender("Male")
const userByDegree = getUserbyDegree("B.Tech")
const loginByUser = loginUser("arun","Demo@1001")

// Displaying All Users
// console.log("All User List",allUsers)

// Displaying User By Name
// console.log("Username",userByName)

//Displaying User by Gender
// console.log("User by Gender :",userByGender)

//Displaying User by Degree
// console.log("Displaying User By Degree",userByDegree)

//Displaying Login
console.log("Login Status :",loginByUser)