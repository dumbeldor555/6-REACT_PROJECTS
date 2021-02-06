import React from 'react';
// import '../ManualCss/style.css';


// head styleing 
const headStyle = {
  color: 'red'
};

 const Heading = (props) =>  {

  const {heading} = props;
  return(
    <h2 className="heading"> {heading} </h2>
  );
}






export default Heading;