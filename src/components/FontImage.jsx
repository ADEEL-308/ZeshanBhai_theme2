import React from 'react';
const FontImage =(props)=>{
    return(<>
        <div className="ImageOuter">
            <img src={props.marketPlaceImages} alt="" srcset=""  className='marketImage responsive'/>
            {/* <p>{props.imageDetail}</p> */}
        </div>
    </>)
}
export default FontImage;