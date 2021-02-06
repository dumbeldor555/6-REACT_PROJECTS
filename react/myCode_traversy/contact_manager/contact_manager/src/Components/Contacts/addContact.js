import React, { Component } from 'react';
import { Consumer } from '../../Context';
//  don't need uuid because jsonplaceholder.typicode will create uniqe id itself
// import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {



 state = {
   name: '',
   email: '',
   phone: '',
   errors: {
    name_error: '',
    email_error: '',
    phone_error: ''
   }
 }


  onSubmit = async (dispatch, e) => {
   
    e.preventDefault();
    const { name, email, phone } = this.state;

    this.setState((preState) => {
      preState.errors.name_errror = '';
      preState.errors.email_errror = '';
      preState.errors.phone_errror = '';
    });
    // gives the name error
    if(name === '') { 

      this.setState((preState) => {
        // [errors.name_error] = 'Name is Requierd';
        preState.errors.name_error = 'Name is Requierd';
      });
      // return; // don't know why you have to return here 

    }
      // gives the email error
      if(email === '') {
      console.log('email');
        this.setState((preState) => {
          preState.errors.email_error = 'Email is Requierd';
        });
        // return;

        // console.log(this.state);
      }
    // gives the phone error
    if(phone === '') {
      console.log('phone');
      this.setState((preState) => {
        preState.errors.phone_error = 'Phone is Requierd';
      });
      // return;

      // console.log(this.state);
    }

    console.log(this.state);

    const newContact = {
      name,
      email,
      phone
    }


  let res =  await fetch('https://jsonplaceholder.typicode.com/users',{
      method: 'POST',
      body: JSON.stringify(newContact)
    });

  res =  res.json();
  dispatch({type:"ADD_CONTACT", payload: res.data});
    
    

    // clearing feild 
    this.setState = {

      name: '',
      emial: '',
      phone: '',
      errors: {}
    }

    // pushing user back to the home page
    // use contaxt insted of props in the lecture brad is useing props
    // console.log(this.props.history);
    this.props.router.push('/');
  }

  onChange = (e) => {
   
    this.setState({ 
      [e.target.name]: e.target.value 
    });
    
    // console.log(this.state.name);

  }

  render() {

    return (
  <Consumer>
  { value => {
  
 const {name, email, phone, errors} = this.state; 

 const { dispatch } = value;
 return(

  <div className="card mb-3">
  <div className="card-header">
   Add Contact
  </div>
  <div className="card-body">
    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
    {/* you were trying to use foreact loop
    but for some reason it did not work so 
    you had to write same code as traversy
    don't loose hope you'll get it */}
  
    <TextInputGroup 
    onChange={this.onChange}
    type='text'
    name='name'
    label="Name"
    placeholder='Enter Your Name'
    value={name}
    error={errors.name_error}
    />
    <TextInputGroup 
    onChange={this.onChange}
    type='email'
    label="Email"
    name='email'
    placeholder='Enter Your Email'
    value={email}
    error={errors.email_error}
    />
    <TextInputGroup 
    onChange={this.onChange}
    type='text'
    label="Phone"
    name='phone'
    placeholder='Enter Your Phone'
    value={phone}
    error={errors.phone_error} 
    />
      <input 
      type="submit" 
      value="Add Contact"
      className="btn btn-block btn-light"
      />
    </form>
  </div>
</div>
 );
      }
      }
  </Consumer>
    );
  }
}

export default AddContact;