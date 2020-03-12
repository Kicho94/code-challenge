
const initialState = {
    products : [],
    state : [],
    category : [],
    sorted : true
    
    }

 export  const rootReducer = (state = initialState, action) => {
        switch(action.type) {
            case "GET_ALL_DATA" :
                return {
                    ...state,
                    products: action.payload,
                
                }
            default:
                return state;
                
            case "SORT_DATA":
               
               let newData = []
               try{ 
                   if(action.payload === "Name"){
                    newData = state.products.sort((a,b)=>{
                        let textA = a.title.toLowerCase();
                        let textB = b.title.toLowerCase();
                        return (textA < textB) ? -1 : (textB < textA) ? 1 : 0
                    })
                  
                    return{
                        ...state,
                        products : newData,
                        sorted: !state.sorted
                       
                    }
                } else if(action.payload === "Price"){
                    newData = state.products.sort((a,b)=>{
                        return b.price - a.price
                    })
                    return {
                        ...state,
                        products : newData,
                        sorted : !state.sorted
                        
                       
                    }
                }
                else {
                    return {
                        ...state,
                    }
                }
            }
            catch(error){
                console.warn(error)
                return {
                    ...state
                }
            }
           case "DELETE_USER" :
              
               let newArray = [];
               let check = []
               let user = action.payload
             try {
                 newArray = state.products.slice()
                 check = newArray.filter(x=> user === x.id)
                
                 if(check.length > 0){
                    
                 newArray = newArray.filter(x=> x.id !== user)
                   
                    return {
                        ...state,
                        products: newArray
                    }
                 }
                 else{
                     return{
                         ...state
                     }
                 }
             }
             catch(error){
                console.warn(error)
                return {
                    ...state
                }
            }
            case "ADD_PRODUCT": {
                const newProduct = action.payload
                let newArray = []
                try {
                    if(!newProduct.id){
                        newArray = state.products.slice()
                        newProduct.id = state.products[state.products.length - 1].id +1
                        newArray.push(newProduct)
                     
                    } alert('Product successfully added')
                    return {
                        ...state, products: newArray
                      }
                      
                
                }
                catch {
                    return{
                        ...state
                    }
                }
            }
        }
    }