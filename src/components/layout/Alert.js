import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <dev className={`alert alert-${alert.type}`}>
        <i className='fas fa-info cicle' />${alert.msg}
      </dev>
    )
  );
};

export default Alert;
