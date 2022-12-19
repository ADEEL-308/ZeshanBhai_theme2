import React from 'react'

const TransparentButton = (props) => {
  return (
    <>
         <a className='btn btn-primary transparentButton' href={props.address}> {props.tbutton}</a>
    </>
  )
}

export default TransparentButton
