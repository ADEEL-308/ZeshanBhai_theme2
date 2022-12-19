import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (<>
        <section className="footerOuter">
            <Container>
                <Row>
                    <Col sm={1} lg={2} md={2} className="mt-3 mb-3">
                        <div className="logoSection">
                            <img src="./Images/Comlogo.svg" alt="" srcset="" id='logoStyle' width='110' height='85'/>
                        </div>
                    </Col>
                    <Col sm={1} lg={6} md={6} className="mt-3 mb-3">
                        <ul className='PrivayList'>
                            <li><a href="#Upper">Home</a></li>
                            <li><a href="#Upper">Price</a></li>
                            <li><a href="#Upper">Order</a></li>
                            <li><a href="#Upper">Policy</a></li>
                        </ul>
                    </Col>
                    <Col sm={1} lg={4} md={4} className="mt-3 mb-3">
                        <ul className='helpList'>
                            <li>Help</li>
                            <li>English</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    </>)
}

export default Footer;