import React from 'react'
import PropTypes from 'prop-types'

const FormCity= ({ handleSubmit }) => {
  return (
      <>
        <form onSubmit={handleSubmit}>
            <label className="w-75">
                Buscar: <input className="w-100" type="text" name="inputText" />
            </label>
            <button type="submit" className="btn btn-warning m-2">
                <span className="material-icons">Search</span>
            </button>
        </form>      
      </>    
  );
};

FormCity.propTypes = {
    handleSubmit: PropTypes.func,
}

export default FormCity;