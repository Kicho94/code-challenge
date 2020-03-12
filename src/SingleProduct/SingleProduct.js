import React from 'react';
import {connect} from 'react-redux';

class SingleProduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        let data = {}
        if(this.props.products){
            data = this.props.products.filter(product=> {
               return product.id == this.props.match.params.id
            })
            console.log(data)
        }
        return(
    <div></div>
        )
    }
}
function mapStateToProps(state) {
    return {
        products : state.rootReducer.products,
        sorted : state.rootReducer.sorted,
        
    }
  }


  export default  connect(mapStateToProps)(SingleProduct);
