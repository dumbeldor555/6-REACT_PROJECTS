import React from 'react';

const notFound =  () => {

  return(
    <div>
      <h1 className="display-4"> <span className="text-danger">404</span>  Page Not Found</h1>
      <p className="lead">Sorry That Page Does Not Exist</p>
    </div>    
  );
};

export default notFound;