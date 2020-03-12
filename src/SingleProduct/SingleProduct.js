import React from 'react';
import {connect} from 'react-redux';
import {GetAllData} from '../redux/actions/actions'
import './SingleProduct.css'
import {Redirect} from 'react-router-dom'

class SingleProduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
         redirect:false
        }
        
    }
   
        redirect =()=>{
            this.setState({redirect:true})
        }
    render(){
        if(this.state.redirect){
            return <Redirect to='/'/>
        }
        if(this.props.products.length == 0){
            return <Redirect to='/'/>
        }

        var data = null
        if(this.props.products){
            data = this.props.products.filter(product=> {
               return product.id == this.props.match.params.id
            })
            data = data[0]
            
            if(data.stateId == 1){
                data.stateId="Ohaio"
            }
            if(data.stateId == 2){
                data.stateId="Utah"
            }
            if(data.stateId == 3){
                data.stateId="Texas"
            }
            if(data.stateId == 4){
                data.stateId="Michigan"
            }
            if(data.categoryId == 1){
                data.categoryId = "Furniture" 
            }
            if(data.categoryId == 2){
                data.categoryId ="Lightning"
            }
            if(data.categoryId ==3){
                data.categoryId ="Other"
            }
            console.log(data)
        }
        return(

        <div className="container">
            <div className="header1">
           <button className="home-btn" onClick={this.redirect}>Home</button>
        <div className="title1">
            <h1>{data.title}</h1>
        </div>
            </div>
            <div className="body">
                <div className="pic-div">
                    <img src={data.picture}></img>
                </div>
                <div className="info-div">
                      <p>PRODUCT : {data.title}</p>
                        <hr/>
                      <p>PRICE : {data.price}</p>
                         <hr/>
                      <p>STATE: {data.stateId}</p>
                        <hr/> 
                      <p>CATEGORY: {data.categoryId}</p>
                        <hr/>
                      <p>DESCRIPTION: {data.description}</p>
                         <hr/>
                </div>
            </div>
        </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        products : state.rootReducer.products,
        sorted : state.rootReducer.sorted,
        
    }
  }


  export default  connect(mapStateToProps,{GetAllData})(SingleProduct);
