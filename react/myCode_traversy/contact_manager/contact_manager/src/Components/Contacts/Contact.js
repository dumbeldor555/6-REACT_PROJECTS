import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import { Link } from '../../../node_mo  dules/react-router-dom';
class Contact extends Component {

state = {

  showState : false
}  
// takes care of deletion
onDeleteClick = async (id, dispatch) => {

  try{
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    });
  }catch(e) {
   // deleting from the state  
   dispatch({type: "DELETE_CONTACT", payload : id});
  }

 
}; 

 

render() {

  const { contact } = this.props; 
  const { showState } = this.state;
  
  return(
    <Consumer>
      { value => {
        const { dispatch } = value;  
        return(
          <div className="card card-body mb-3">
          <h4>{contact.name}
          <i 
          onClick={ () => {
          this.setState({
            showState : !this.state.showState
          })
          }
          }
          className ="fas fa-sort-down" 
          style={{cursor: "pointer"}}
          />

          <Link to={`contact/edit/${contact.id}`} >
           <i 
            className="fas fa-pencil-alt"
            style={
                  {float: 'right'},
                  {cursor: 'pointer'},
                  {color: 'black'},
                  {marginRight: '1rem'}
          }
           />
          </Link>          
          <i 
          onClick= {
            this.onDeleteClick.bind(this, contact.id, dispatch) 
          }  
          className="fas fa-times"
          style={{
            float: "right",
            color: "red",
            cursor: "pointer"
          }}
          />
        </h4>
        {showState ? (
          <ul className="list-group">
            <li className="list-group-item">Email:{contact.email}</li>
            <li className="list-group-item">Phone:{contact.phone}</li>
         </ul>
        ) : null }
       </div> 
        )
      }
      }
      
    </Consumer>
  );
}
}




Contact.defaultProps =  {

  name : 'UserName goes Here',
  email : 'UserEmail goes Here',
  phone : 'UserPhone goes Here',
}

Contact.propTypes = {

contact : PropTypes.object.isRequired 
}



export default Contact;