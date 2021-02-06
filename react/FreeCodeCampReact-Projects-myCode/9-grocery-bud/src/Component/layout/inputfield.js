import {Consumer} from '../../Context';
import {Component} from 'react';

class InputField extends Component {

  
  handleSubmit = (dispatch) => {

   const item = document.querySelector('.inputField');
   let submitBtn = document.querySelector('.submitBtn').textContent;
  //  console.log(submitBtn.charCodeAt(), 'Submit'.charCodeAt());
  //  console.log(typeof(submitBtn), typeof('Submit'));

  //  console.log(submitBtn === 'Submit', submitBtn);

  dispatch({type:'ADD', item:item.value});
  item.value = null;

   if(submitBtn === 'Submit') {
    console.log('calling ');
    dispatch({type:'ADD', item:item});
    
   } else if(submitBtn === 'Edit') {
    dispatch({type: 'EDIT', item: item});
   }
  
 }


  render () {
    return(
      <Consumer>
        {value => {
          const {dispatch, placeholder, buttonText, inputItem} = value;
          return(
            <div className="InputFieldContainer">
              {/* for some reson default value is not working when editing the input */}
              <input className="inputField" defaultValue={inputItem} type="text" placeholder={placeholder}/>
              <button onClick={this.handleSubmit.bind(this, dispatch)} className="submitBtn"> {buttonText} </button> 
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default InputField;
