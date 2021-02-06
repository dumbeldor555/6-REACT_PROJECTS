import React, { Component } from 'react';
import { Consumer } from '../../Context';
//  don't need uuid because jsonplaceholder.typicode will create uniqe id itself
// import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class EditContact extends Component {



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
    const { name, email, phone, errors } = this.state;

    // gives the name error
    if(name === '') { 
      // this.setState({
      //   [errors.name_error]: 'Name is Required'
      // });
      this.setState((preState) => {
        // [errors.name_error] = 'Name is Requierd';
        preState.errors.name_error = 'Name is Requierd';
        console.log(this.state); 
        return;
      });
      return; // don't know why you have to return here 

    }
      // gives the email error
      if(email === '') {
      console.log('email');
        this.setState((preState) => {
          preState.errors.email_error = 'Email is Requierd';
          return;
        });
        // console.log(this.state);
      }
    // gives the phone error
    if(phone === '') {
      console.log('phone');
      this.setState((preState) => {
        preState.errors.phone_error = 'Phone is Requierd';
        return;
      });
      // console.log(this.state);
    }

  const updateContact = {
    name,
    email,
    phone
  }
  // this might not work because your router are not working as intended
  // all the code is 'mostly' correct 
  const { id } = this.props.match.params;   

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringigy(updateContact)
  });

  dispatch({type: 'UPDATE_CONTACT', payload: data});

    // this.setState((preState) => {

  //   preState.name = '',
  //   preState.email = '',
  //   preState.phone = '',
  //   preState.errors = '{}'
  // });


  this.props.history.push('/'); 
  }



  onChange = (e) => {

    this.setState({ 
      [e.target.name]: e.target.value 
    });
    
    console.log(this.state.name);

  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    const contact = res;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });    
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
      value="Update  Contact"
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

export default EditContact;