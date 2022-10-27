import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
const LoaderSpinner = () => {
    return (
        <div>
             <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        </div>
    );
};

export default LoaderSpinner;