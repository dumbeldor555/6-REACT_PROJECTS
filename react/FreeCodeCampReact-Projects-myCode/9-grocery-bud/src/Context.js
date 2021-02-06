import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD' :
      // adding to local storage 
       if(!localStorage.getItem('listItems')) {
         console.log('calling if');
          let listArray = [];
         listArray.push(action.item);
         listArray = JSON.stringify(listArray);
         localStorage.setItem('listItems', listArray);

       } else {
         console.log('calling else');
         let listArray = localStorage.getItem('listItems');
         listArray = JSON.parse(listArray);
         listArray.push(action.item);
         listArray = JSON.stringify(listArray);
         console.log(listArray);
         localStorage.setItem('listItems', listArray);
        }
      return{
        ...state,
        items: [...state.items, action.item],
        showClearAll: true
      }
      case 'REMOVE_ALL': 
      return{
        ...state,
        items: [],
        showClearAll: false
      }
      case 'PROMPT_FOR_EDIT' :
        // const inputField = document.querySelector('.inputField');
        // inputField.defalultValue = action.text;
        // console.log(inputField);
        return{
          ...state,
          buttonText: 'Edit',
          inputItem: action.text
        }
      case 'DELETE': 
      console.log('calling');
      // let localArray = localStorage.getItem('itemArray');
      // localArray = JSON.parse(localArray);
      // localArray = localArray.splice(action.id, 1);
      // localArray = JSON.stringify(localArray);
      // localStorage.setItem('itemArray',localArray);
      return{
        ...state,
        items: state.items.filter((item, index) => (index !== action.id)),
        // the '1' is becasue of the asyncronous netchur of the states
        showClearAll: state.items.length === 1 ? false : true 
      }
      // case 'EDIT': 
      // return {
      //   ...state,
      //   items: state.items.map((item, index) => {index + 1 == action.id ? action.item : item})
      // }
  }
}

class Provider extends Component {

  state = {
     heading: 'Grocery Bud',
     placeholder: 'e.g. figs',
     clearItem: 'clear items',
     showClearAll: false,
     buttonText: 'Submit',
     inputItem: '',
     items: [],
     dispatch: (action) => {
       this.setState((state) => {
         return reducer(state, action);
       });
     }
  }


  render () {
    return(
      <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const Consumer = Context.Consumer;

export default Provider;
export {Consumer} 