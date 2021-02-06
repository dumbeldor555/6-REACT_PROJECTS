import React, {Component} from 'react';

class RemoveBtn extends Component {

  clearData = () => {
   this.props.RmBtn();
  }

  render() {
    return( 
      <button className="RemoveBtn" onClick={this.clearData}>Remove All</button>
    );
  }
}

export default RemoveBtn;