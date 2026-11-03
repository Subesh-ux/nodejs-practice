import Users from "../json/userlist.json" with {"type" : "json"}

const {name  , contactNumber, gender , id} = Users

const customerData = Users.map(({ name, contactNumber, gender }) => ({
    name,
    gender,
    contactNumber
}))


export const getAllCustomers = () => {
    return {
        StatusCode : 200,
        StatusMessage : "Success",
        data : customerData
        }
}

export const getAllMaleCustomers = () =>{
    const MaleCustomers = customerData.filter((value)=>{
        return value && value.gender == "Male"
    })
    return {
        StatusCode : 200,
        StatusMessage : "Success",
        data : MaleCustomers
        }
    } 

export const getAllFemaleCustomers = () =>{
    const FemaleCustomers = customerData.filter((value)=>{
        return value && value.gender == "Female"
    })
   return {
        StatusCode : 200,
        StatusMessage : "Success",
        data : FemaleCustomers
        }
    } 


export const addCustomer =(NewCustomer)=>{
    const newCustomerData = {
        "name" : NewCustomer.name,
        "gender" : NewCustomer.gender,
        "contactNumber" : NewCustomer.contactNumber
    }
    customerData.push(newCustomerData)
    return customerData
}

export const searchCustomerbyId =(CustomerId) => {
    const SingleCustomer = Users.find((value)=>{
        return value.id == CustomerId
    })
    return SingleCustomer
}


export const modifyCustomer=(data,CustomerId)=>{
    const index = Users.findIndex((value)=>{
        return value.id == CustomerId
    })

    if(index === -1){
        return "Customer Doesnt Exist"
    }
    else{
        Users[index]={
            "id" : Users[index].id,
            "name" : data.name,
            "gender" : data.gender,
            "contactNumber" : data.contactNumber
        }
        return Users
    }

}

export const editedCustomer =(CustomerId,data)=>{
    const index = Users.findIndex((value)=>{
        return value.id == CustomerId
    })

    if(index ===-1){
        return "User not Found"
    }
    else{
        Users[index]={
            ...Users[index],
            ...data
        }
        return Users
    }

}


export const deleteCustomer =(CustomerId) =>{
        const data = Users.filter((value)=>{
            return value && value.id != CustomerId 
        })
        return data
        
}