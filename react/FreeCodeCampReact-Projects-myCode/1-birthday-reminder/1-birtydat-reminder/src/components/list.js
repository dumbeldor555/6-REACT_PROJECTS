import React, { Component } from 'react';

class List extends Component {


  render() {

    const people = this.props.people;
    console.log(people);

    return (
      <ul className="ListOfPeople">
        {people.map((person) => {
        const {id, image, name, age} = person;
        return (
        <li key={id} className="personInfo"> 
        <img className="personImg" src={image} /> 
        <div className="infoSepereter">
        <span className="personName">{name}</span>
        <span className="personAge">{age} years</span>
        </div>
        </li>    
        )    
        })}
      </ul>
    )
  }
}


export default List;