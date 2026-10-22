import UserList from "../JSON/productlist.json" with { type: "json" };

export const getAllUsers = () => {
    return UserList
}