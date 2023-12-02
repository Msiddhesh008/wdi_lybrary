import React from 'react'

const ComponentTitle = ({title}) => {
  return (
    <h3
    className='mb-1'
    style={{
        color:"#E8155D",
        alignSelf:"start"
    }}
    >{title}</h3>
  )
}

export default ComponentTitle