import {
    getAllProducts, getFashionProducts, getSnacksProducts, getGroceryProducts,
    deleteFashionProducts, deleteGroceryProducts, deleteSnacksProducts
} from "./module/productListModule.js"

export default function Routes(req, method) {

    if ((req.url == "/products" || req.url == "/Products") && method == "GET") {
        const data = JSON.stringify(getAllProducts());
        res.write(data)
    }

    else if ((req.url == "/products/fashion" || req.url == "/Products/fashion") && method == "GET") {
        const data = JSON.stringify(getFashionProducts());
        res.write(data)
    }

    else if ((req.url == "/products/grocery" || req.url == "/Products/grocery") && method == "GET") {
        const data = JSON.stringify(getGroceryProducts());
        res.write(data)

    }
    else if ((req.url == "/products/snacks" || req.url == "/Products/snacks") && method == "GET") {
        const data = JSON.stringify(getSnacksProducts());
        res.write(data)
    }
    else if ((req.url == "/products/fashion") && method == "DELETE") {
        const data = JSON.stringify(deleteFashionProducts())
        res.write(data)
    }
    else if ((req.url == "/products/grocery") && method == "DELETE") {
        const data = JSON.stringify(deleteGroceryProducts())
        res.write(data)
    }
    else if ((req.url == "/products/snacks") && method == "DELETE") {
        const data = JSON.stringify(deleteSnacksProducts())
        res.write(data)
    }
    else {
        res.write("Welcome to the store")
    }
}