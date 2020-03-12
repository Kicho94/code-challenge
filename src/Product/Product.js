import React from 'react';
import './product.css'
import {Link} from 'react-router-dom'

export default class Product extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="single">
           <Link to={'/product/' + this.props.id}><img src={this.props.picture}></img></Link>
              <div className="title">
                <div className="title-cont">
           <div className="title-div">Product: {this.props.title}</div>       
          <div className="title-div">Price: {this.props.price}</div>
          </div>
          <div className="delete-btn"><button onClick={()=>{this.props.toggle(this.props.id)}}><i className="far fa-trash-alt" ></i></button></div>
              </div>
          </div>
        )
    }
}