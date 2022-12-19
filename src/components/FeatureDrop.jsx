import CheckIcon from '@mui/icons-material/Check';
import React from 'react'

const FeatureDrop = (props) => {
    return (
        <>
            <div className="FeatureData ">
                <CheckIcon className='marginFeature CheckMobile' />
                <p className='marginFeature'> {props.FeatureData}</p>
            </div>
        </>
    )
}

export default FeatureDrop
