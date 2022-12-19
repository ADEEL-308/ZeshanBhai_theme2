import React from 'react';
import Col from 'react-bootstrap/Col';

const GreyFont = (props) => {
    return (<>
        <Col sm={12} md={12} lg={4}>
            <div className="GreyOuter">
                <div className="Fontouter">

                </div>
                <h4>{props.greyHead}</h4>
                <p>{props.greyDetail}</p>
            </div>
        </Col>
    </>)
}
export default GreyFont;