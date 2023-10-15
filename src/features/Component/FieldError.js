import React from 'react'

const FieldError = ({errors = []}) => {
    if(!errors.length){
        return null;
    }
  return (
    <div className='alert alert-danger'>
              {errors.map(error => error)}
            </div>
  )
}

export default FieldError