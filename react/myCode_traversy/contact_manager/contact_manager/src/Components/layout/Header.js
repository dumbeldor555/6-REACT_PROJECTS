import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../../node_modules/react-router-dom';

const Header = (props) => {
 
  const {brandName} = props;
  return (
  <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
    <div className="container">
      <a href="/" className="navbar-brand"> 
        {brandName}
      </a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/"  className="nav-link active inline">
            <i className="fas fa-home"></i>   Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link active inline">
            <i className="fas fa-plus"></i>  add            
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about"  className="nav-link active inline">
            <i className="fas fa-question"></i>  about            
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

Header.defaultProps = {

  brandName : 'Default Brand Name from Default'
}

Header.propTypes =  {

  brandName : PropTypes.string.isRequired
}

export default Header;