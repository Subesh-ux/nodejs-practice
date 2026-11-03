import { getAllCustomers, getAllFemaleCustomers, getAllMaleCustomers, addCustomer, searchCustomerbyId, deleteCustomer, modifyCustomer, editedCustomer } from "../module/Customer.module.js";

export default function Routes(req, method) {

    if (req.url == "/" && method === "GET") {
        return "Welcome to View the Customer Details"
    }

    if (req.url == "/Customers" && method === "GET") {
        return getAllCustomers()
    }

    if (req.url == "/Malecustomers" && method === "GET") {
        return getAllMaleCustomers()
    }

    if (req.url == "/Femalecustomers" && method === "GET") {
        return getAllFemaleCustomers()
    }

    if (req.url == "/addCustomers" && method === "POST") {
        let promise = new Promise((resolve, reject) => {
            let body = ""

            req.on("data", (chunk) => {
                body += chunk
            })

            req.on('end', () => {
                body = JSON.parse(body)
                const Customerlist = addCustomer(body)

                let response = {
                    StatusCode: 200,
                    StatusMessage: "Success",
                    data: Customerlist
                }

                resolve(response)
            })
        })
        return promise
    }

    if (req.url.startsWith("/customers/") && method === "GET") {
        const param = req.url.split("/")[2]
        const Customer = searchCustomerbyId(param)
        return {
            StatusCode: 200,
            StatusMessage: "Success",
            data: Customer
        }
    }

    if (req.url.startsWith("/modifyCustomer/") && method === "PUT") {
        let param = req.url.split("/")[2]
        let promise = new Promise((resolve, reject) => {
            let body = ""
            req.on("data", (chunk) => {
                body += chunk
            })
            req.on("end", () => {
                body = JSON.parse(body)
                const modifiedCustomerList = modifyCustomer(body, param)
                let response = {
                    StatusCode: 200,
                    StatusMessage: "Success",
                    data: modifiedCustomerList
                }
                resolve(response)

            })
        })
        return promise
    }

    if(req.url.startsWith("/editCustomer/") && method ==="PATCH"){
        let promise = new Promise((resolve, reject) => {
            let param = req.url.split("/")[2]
            let body=""
            req.on("data",(chunk)=>{
                body+=chunk
            })
            req.on("end",()=>{
                body = JSON.parse(body)
                const editableCustomer = editedCustomer(param,body)
                let response ={
                    StatusCode :200,
                    StatusMessage :"Success",
                    data : editableCustomer
                }
                resolve(response)
            })
        })
        return promise
    }


    if (req.url.startsWith("/deleteCustomer/") && method === "DELETE") {
        const param = req.url.split("/")[2]
        const Customer = deleteCustomer(param)
        return {
            StatusCode: 200,
            StatusMessage: `The userID ${param} has been deleted successfully.`,
            Data: Customer
        }

    }
}