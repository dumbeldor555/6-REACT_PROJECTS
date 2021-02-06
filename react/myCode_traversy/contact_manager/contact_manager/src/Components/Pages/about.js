import React from 'react';

const about = () => {

  return(
    <div>
      <h1 className="display-4"> About Contact Maneger</h1>
      <p className="lead ">simple app to manage  contact</p>
       <p className="text-secondary">
         Version 1.0.0
       </p>

    </div>
  );
}

// tried class component still not working
// class about extends Component {
// render() {
//   return(
//     <div>
//     <h1 className="display-4"> About Contact Maneger</h1>
//     <p className="lead ">simple app to manage  contact</p>
//      <p className="text-secondary">
//        Version 1.0.0
//      </p>

//   </div>
//   )
// }
// }



export default about;