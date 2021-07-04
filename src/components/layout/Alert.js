import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <dev className={`alert alert-${alert.type}`}>
        <i className='fas fa-info cicle' />${alert.msg}
      </dev>
    )
  );
};

export default Alert;
