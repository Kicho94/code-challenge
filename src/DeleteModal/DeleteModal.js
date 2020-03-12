import React from 'react'
import './DeleteModal.css'
import {connect} from 'react-redux';
import {DeleteUser} from '../redux/actions/actions'


 class DeleteModal extends React.Component {
    constructor(props){
        super(props)
      
   }  
   DeleteUser = () => {
    this.props.deleteUser(this.props.id);
    this.props.toggle()
}

       render(){
    

  return (
    <div className="modal-container">
     <div className="modal">

      <header className="modal_header">
           <h2>Delete Product</h2>
      </header>

      <section className="modal_content">
          <h2>You are about to delete this product. Are you sure you wish to continue?</h2>
      </section>

      <section className="modal_actions">
           <div className="modal_actions-div">
               <button className="btn-cancel" onClick={this.props.toggle}>Cancel</button>
               <button className="btn-delete" onClick={()=>{this.DeleteUser()}}>Delete</button>
           </div>
     </section>

     </div>
     </div>
  )
}
}

function mapStateToProps(state) {
    return {
        products : state.rootReducer.products,
        
    }
  }
  function mapDispatchToProps(dispatch){
    return{
       
        deleteUser: (user) => dispatch(DeleteUser(user))
    }
}

  export default  connect(mapStateToProps, mapDispatchToProps)(DeleteModal);