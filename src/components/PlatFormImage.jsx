import React from 'react'

const PlatFormImage = (props) => {
  return (
    <>
        <div className="outerPlatform">
            <img src={props.PlatformImage} alt="" srcset="" className='PlatFormImage responsive' />
            <p>{props.PlatformName}</p>
        </div>
    </>
  )
}

export default PlatFormImage;
