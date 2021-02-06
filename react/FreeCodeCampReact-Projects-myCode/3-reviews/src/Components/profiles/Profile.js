import React, {Component} from 'react';
import { Consumer } from '../../Context';
class Profile extends Component {

  goForward = (dispatch) => {
    dispatch({type: 'GO_FORWARD'});
  }

  
  goBackward = (dispatch) => {
    dispatch({type: 'GO_BACKWARD'});
  }

  
  goRandom = (dispatch) => {
    dispatch({type: 'GO_RANDOM'});
  }

  render() {
    return(
      <Consumer>
        {/* // /return profile component here */}
        {value => { 
          const {index} = value;
          const {image, text, name, job} = value.reviews[index]; 
          const {dispatch} = value;      
        return(
          <div className="ProfileContainer">
            {/* for now just do the functionallity part we'll take care of the icon later */}
           <img src={image} alt="persone image" className="ProfileImg"/>
           <p className="personName">{name}</p>
           <p className="personJob">{job}</p>
           <p className="aboutPerson">
             {text}
           </p>
           <div className="swipeContainer">
           <i onClick={this.goBackward.bind(this, dispatch)} class="fas fa-angle-left swipeBtn"></i>
           <i onClick={this.goForward.bind(this, dispatch)} class="fas fa-angle-right swipeBtn"></i>
           </div>  

           <button onClick={this.goRandom.bind(this, dispatch)} className="surprieBtn">
             Surprise Me   
          </button>        
           </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Profile;