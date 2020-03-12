import React from 'react';
import {connect} from 'react-redux';
import {SortData} from '../redux/actions/actions'
import './header.css'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sort : ""
        }
    }
   
console = () => {
  
}
getValue = (e) => {
    this.setState({sort : e.target.value},()=>{this.props.SortData(this.state.sort)})
}

    render(){
        return(
            <div className="header">
                    <div className="select-box">
                        <p>Sort By : </p> 
                         <select onChange={this.getValue}>
                            <option value="">Sort By</option>
                            <option value="Name">Name</option>
                            <option value="Price">Price</option>
                        </select>
                    </div>
                    <div className="add-user">
                        <button className="add-user-btn" onClick={this.props.toggle}>Add User</button>
                    </div>
                
                </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        products : state.rootReducer.products
    }
  }


  export default  connect(mapStateToProps,{SortData})(Header);