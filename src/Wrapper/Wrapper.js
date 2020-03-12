import React from 'react';
import {connect} from 'react-redux';
import {GetAllData} from '../redux/actions/actions'
import './wrapper.css'
import Header from '../Header/Header'
import Product from '../Product/Product'
import DeleteModal from '../DeleteModal/DeleteModal';
import NewProduct from '../NewProduct/NewProduct'


 class Wrapper extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            delete : false,
            id: undefined,
            newproduct : false
        }
    }
async componentWillMount(){
await this.props.GetAllData(); 

}

toggleDelModal = (id) =>{
    this.setState({delete : !this.state.delete, id : id})
}
toggleNewP = () => {
    this.setState({newproduct: !this.state.newproduct})
}

    render(){
       
        let data = []
        
     if(this.props.products){
        console.log(this.props.products)
      data = this.props.products.map(product => {
      return (
     <Product key={product.id} picture={product.picture} price = {product.price} title={product.title} toggle={this.toggleDelModal} id={product.id}/>
    )
    
         
     })
    }
        return(
         <React.Fragment>
             <div className="wrapper">
            <Header toggle={this.toggleNewP}/>
            {data}
            </div>  
            {this.state.newproduct ? <NewProduct toggle = {this.toggleNewP}/> : null}
            {this.state.delete ? <DeleteModal toggle={this.toggleDelModal} id={this.state.id}/> : null}
            </React.Fragment>
        )
    }
}
function mapStateToProps(state) {
    return {
        products : state.rootReducer.products,
        sorted : state.rootReducer.sorted,
        
    }
  }


  export default  connect(mapStateToProps, {GetAllData})(Wrapper);
