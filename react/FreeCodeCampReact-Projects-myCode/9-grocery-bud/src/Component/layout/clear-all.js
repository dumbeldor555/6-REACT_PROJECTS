const ClearAll = (props) => {
const {data} = props;
const {dispatch} = props;

const handleClick = (dispatch) => {
dispatch({type: 'REMOVE_ALL'});
}
  return(    
    <button onClick={handleClick.bind(this, dispatch)} className="clearAllBtn">{data}</button>
  );
}

export default ClearAll;