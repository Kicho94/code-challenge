import React from 'react'
import './NewProduct.css'
import {connect} from 'react-redux';
import {AddProduct} from '../redux/actions/actions'

 class NewProduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            state : undefined,
            categories: undefined,
            Title : undefined,
            Price : undefined,
            Picture : undefined,
            Description : undefined,
            stock : false
        }
        
    }
getValue = (e) => {
    this.setState({[e.target.name] : e.target.value})
   

}
toggleCheckboxValue = () => {
    this.setState({stock: !this.state.stock});
  }

createUser = () =>{
  let err = 0
  let price = Number(this.state.Price)
  let categoryId = Number(this.state.categories)
if(this.state.state == undefined || this.state.state == "State"){  err++; console.log("state")
}
if(this.state.categories == undefined || this.state.categories == "category"){err++; console.log("category")
}
if(this.state.Title !== undefined){
    if( this.state.Title.length < 4){err++; }
} else if(this.state.Title == undefined){err++}
if(this.state.Picture !== undefined){
    if(this.state.Picture.length == 0){err++;} 
} else if(this.state.Picture == undefined){err ++}
if(this.state.Description == undefined || this.state.Description.length == 0){err++; console.log("Description")}

if(this.state.state == "1" || this.state.state == "4"){
    if(price < 7){err++}
}
if(this.state.state == "2" || this.state.state =="3" ){
    if(price < 5){err++}
}
if(err > 0){
    alert('Please use the instructions')
} else if(err == 0){
    let data = {
        title : this.state.Title,
        price : price,
        picture: this.state.Picture,
        state : Number(this.state.state),
        category : categoryId,
        stock : this.state.stock,
        description : this.state.Description
    }
   this.props.addProduct(data)
   this.props.toggle()
}
}

render(){
    
    return(

        <div className="modal-container1">
     <div className="modal1">

      <header className="modal_header1">
           <h2>Add Product</h2>
      </header>

      <section className="modal_content1">
            <div className="input-holder">
                <label className="field-label">Title</label>
                <input name="Title" onChange={this.getValue} type="text" className="text-field" id="Title"  placeholder="Minimum of 4 characters" />
            </div>   
            <div className="input-holder">
                <label className="field-label">Price</label>
                <input disabled={this.state.state == "State" || this.state.state == undefined ? true : false } onChange={this.getValue} name="Price" placeholder={this.state.state == "State" || this.state.state == undefined ? "Please choose a state" : `The minimum price is ${(this.state.state !== "1" && this.state.state !== "4") ? 5 : 7}`} type="number" className="text-field" id="Price" min={(this.state.state !== "1" && this.state.state !== "4") ? 5 : 7} />
            </div>  
            <div className="input-holder">
                <label className="field-label">Picture</label>
                <input name="Picture" onChange={this.getValue} type="text" className="text-field" id="Picture"  placeholder="Please use url" />
            </div>
            <div className="input-holder">
                <label className="field-label">State</label>
                <select name="state" className="text-field" onChange={this.getValue}>
                    <option >State</option>
                    <option value="1" >Ohaio</option>
                    <option value="2" >Utah</option>
                    <option value="3" >Texas</option>
                    <option value="4" >Michigan</option>
                </select>
            </div>   
            <div className="input-holder">
                <label className="field-label">Categories</label>
                <select name="categories" onChange={this.getValue} className="text-field">
                    <option value="category" >Categories</option>
                    <option value="1">Furniture</option>
                    <option value="2">Lightning</option>
                    <option value="3">Other</option>
                    
                </select>
            </div> 
            <div className="input-holder">
                <label className="field-label">
                   <input type="checkbox" name="text-field" onChange={this.toggleCheckboxValue} value={this.state.stock} ref="check_me" /> 
                   Check me out
                </label>
            </div>
            <div className="input-holder">
                <label className="field-label">Description</label>
                <textarea name="Description" onChange={this.getValue} style={{ resize:"vertical"}} placeholder="Please describe your product" className="text-field" cols="20"></textarea>
            </div> 

      </section>

      <section className="modal_actions1">
           <div className="modal_actions-div1">
               <button  className="btn-cancel1" onClick={this.props.toggle}>Cancel</button>
               <button className="btn-delete1" onClick={this.createUser} >Confirm </button>
           </div>
     </section>

     </div>
     </div>
     )}
}


  function mapDispatchToProps(dispatch){
    return{
       
        addProduct: (data) => dispatch(AddProduct(data))
    }
  }
  function mapStateToProps(state) {
    return {
        products : state.rootReducer.products,
        sorted : state.rootReducer.sorted,
        
    }
  }

  export default  connect(mapStateToProps, mapDispatchToProps)(NewProduct);