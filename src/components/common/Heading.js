import React from 'react'

const Heading=({black, green}) =>{
  return (
    <div className='Heading'>
        <div className='black'>{black}</div>
        <div> </div>
        <div className='primary'> {green}</div>

    </div>
  )
}

export default Heading;