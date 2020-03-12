export  const GetAllData = () => {
    return async (dispatch) =>{
              fetch('https://my-json-server.typicode.com/drakulovski/dbplaceholder/products')
         .then(res=>res.json())
         .then(data => {
             dispatch({
                 type: "GET_ALL_DATA",
                 payload: data 
             })
         })
         .catch(err => console.log(err))
    }
}

export const SortData = (sort) =>{
    return {
        type: "SORT_DATA",
        payload: sort
    }
} 

export const DeleteUser = (user) => {
    return async (dispatch) =>{
        fetch(`https://my-json-server.typicode.com/drakulovski/dbplaceholder/products/${user}`,
    {
        method:"DELETE"
    })
    .then(res=>console.log(res))
    .then(()=>{
        dispatch({
            type: "DELETE_USER",
            payload: user
        })
    })
    .catch(err=>console.log(err))
    }
}

export const AddProduct = (data) => {
    return async(dispatch) =>{
        fetch("https://my-json-server.typicode.com/drakulovski/dbplaceholder/products",
        {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        .then(res=>res.json())
        .then(json => console.log(json))
        .then(()=>{
            dispatch({
                type: "ADD_PRODUCT",
                payload: data
            })
        })
        .catch(err=>console.log(err))
    }
}