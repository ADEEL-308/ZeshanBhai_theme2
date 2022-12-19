import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BlueButton from './BlueButton';

// import Button from 'react-bootstrap/Button';


const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="p-auto shadow" sticky='top'>
                <Container>
                    <Navbar.Brand href="/"><img src="./Images/Comlogo.svg" alt="" srcset="" id='logoStyle' width='110' height='85'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" >
                            <Nav.Link href="#Upper" className="me-4" id="navAnchor">Home</Nav.Link>




                            <Nav.Link href="#Pricing" className="me-4" id="navAnchor">Price</Nav.Link>

                            <Nav.Link href="#" className="me-4" id="navAnchor">Order</Nav.Link>

                            <BlueButton
                                Bbutton="Discord"
                                address="https://discord.gg/SW534FBF"
                            />

                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;