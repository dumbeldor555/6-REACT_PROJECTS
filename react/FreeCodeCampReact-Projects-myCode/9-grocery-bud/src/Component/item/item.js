import {Consumer} from '../../Context';
import {Component} from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

class Item extends Component {

  handleClick = (task, dispatch, id) => {

  
  if(task === 'EDIT') {
    const text = document.querySelector(`.id-${id}`);

    dispatch({type: 'PROMPT_FOR_EDIT',text: text.innerHTML});
    const inputItem = document.querySelector('.inputField');
    console.log(inputItem)

  }else if (task === 'DELETE') {
    dispatch({type: task, id: id});
  }
  }

  render() {
    return(
      <Consumer>
        {value=> {
          const {items, dispatch} = value;
          if(items.length > 0 ) {
            return(
              <div className="itemsContainer">
                {items.map((indiItem ,index) => {
                  return(
                    <div key={index} className="indiItemContaine">
                        <span className={`text id-${index}`}>{indiItem}</span>
                        <span className="edit-delete">
                          <FaEdit className="funcBtnEdit" onClick={this.handleClick.bind(this, 'EDIT' , dispatch, index)}/>  
                          
                          <FaTrash className="funcBtnDelete" onClick={this.handleClick.bind(this, 'DELETE' , dispatch, index)}/>
                        </span>
                    </div>
                  )
                }) }
              </div>
            )
          }
        }}
      </Consumer>
    )
  }
}

export default Item;