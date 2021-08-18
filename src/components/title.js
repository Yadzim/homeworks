import React from 'react';

export default function Title({name, title}) {
  return (
    <div className='row'>
      <div className="col-10 mx-auto my-4 text-center text-title">
        <h1 className='text-capitalize fw-bold'>
          {name} <strong className='text-primary'>{title}</strong>
        </h1>
      </div>
    </div>
  )
}
