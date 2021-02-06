import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state , action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {  
          ...state, 
          contacts: state.contacts.filter( contact => 
          contact.id !== action.payload
          )
      }
      case 'ADD_CONTACT':
      return {  
       ...state,
       contacts: [action.payload, ...state.contacts]
      }
      case 'UPDATE_CONTACT' :
        return {
          ...state,
          conatcts: state.contacts.map(contact => 
            contact.id === action.payload.id ? (contact = action.payload) 
          : contact)
        }
    default: 
    return state;  
  }
}

 class Provider extends Component { 


  state = {
  contacts: [],
  dispatch: (action) => { 
    this.setState((state) => {
      reducer(state, action);  
    })
  }
  }

async componentDidMount() {

  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  //making the string objef javascript object

  response = await  response.json();
  console.log(response); 

  // just to check
  // setting contacts inside state
  this.setState({
    contacts: response
  });
  }

  render() {

    return (
      < Context.Provider value={ this.state } > 
         {this.props.children} 
      </Context.Provider>  
    )
  }
}  

export  default Provider; 
export const Consumer = Context.Consumer;  
 
