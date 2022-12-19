import React from 'react';



// function WrappedIcon(props) {
//     return <Icon {...props} />;
// }

// WrappedIcon.muiName = 'Icon';
const CheckBox = (props) => {
    return (<>
        <div className='CheckBoxOuter' >
            <div className="CheckBox1"
            >
                <p>{props.checkBox1}</p>
            </div>
            <div className="CheckBox2">
                
                    {props.icon}
                
            </div>
            <div className="CheckBox3">
                {props.icon}
            </div>
            <div className="CheckBox4">
                {props.icon}
            </div>
        </div>
    </>)
}

export default CheckBox;