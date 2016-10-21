import React from 'react';
import { Link } from 'react-router';

export default (props) => {
    return (
      <div>
        <div className='container'>
          { props.children }
        </div>
      </div>
    )
};
