import { getAllUsers } from "./LoginUserTask/userModule.js";

const allUsers = getAllUsers()

// Displaying All Users
console.log("All User List",allUsers)