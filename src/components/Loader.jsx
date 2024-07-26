import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <Spinner
      animation='border' 
      role='status'
      className='spinner-border-custom' // Apply the custom class
    >
    </Spinner>
  );
}

export default Loader;
