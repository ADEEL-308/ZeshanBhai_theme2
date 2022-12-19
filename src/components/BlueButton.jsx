import React from 'react'


const BlueButton = (props) => {
    return (
        <>
            <a className='btn btn-primary blueButton'   href={props.address}> {props.Bbutton}</a>
        </>
    )
}

export default BlueButton;
