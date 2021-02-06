import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {

 return(
       <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
         
         type={type} 
         name={name}
         className= {classnames('form-control form-control-lg', {
          'is-invalid':error
        })}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         />

         {error && 
         <div className="invalid-feedback">
         {error}
       </div>
         }
        
      </div>
 )
}

// TextInputGroup.propTypes = {
//   label:PropTypes.string.isrequired,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isrequired,
//   value:PropTypes.string.isrequired,
//    error:PropTypes.string.isrequired,
//   onChange: PropTypes.func.isrequired
// }

TextInputGroup.defaultPorps = {
  type:'text'
}

export default TextInputGroup;  