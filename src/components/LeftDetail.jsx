import React from 'react';

const LeftDetail =(props)=>{
    return(<>
        <div className="LdetailOuter mt-4">
            <h3>{props.upperheading}</h3>
            <p>{props.upperDetail}</p>
        </div>
    </>)
}

export default LeftDetail;