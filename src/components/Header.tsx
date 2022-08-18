import * as React from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = ({ setSeachData }: any) => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://i.postimg.cc/FHCFJZzc/kitchen-logo.png"
                            width="120"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Kitchen Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <NavDropdown
                                title="Proftorg"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/1.1" >
                                    Тепловое
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/1.2">
                                    Холодильное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/1.3">
                                    Нейтральное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/1.4">
                                    Элек-Мех
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="DedTrade"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/2.1" >
                                    Тепловое
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/2.2">
                                    Холодильное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/2.3">
                                    Нейтральное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/2.4">
                                    Элек-Мех
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="ProKitchen"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Тепловое
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    Холодильное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">
                                    Нейтральное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Элек-Мех
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(event) =>
                                        setSeachData(event?.target.value)
                                    }
                                />
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
