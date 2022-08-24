import * as React from "react";
import { useState } from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";

const Header = ({ setSeachData, setCategoryData }: any) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand
                        href="#home"
                        onClick={() => {
                            setCategoryData(["clear", "clear"]);
                        }}
                    >
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
                        <Nav className="me-auto">
                            <>
                                <Button variant="outline-secondary" size="sm" onClick={handleShow}>
                                    Что Нового?
                                </Button>

                                <Offcanvas show={show} onHide={handleClose} >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>
                                            Что Нового?
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <ul>
                                            <li>Добавил PROKITCHEN</li>
                                            <li>Добавил даты на карточках (Актуальность карточек)</li>
                                            <li>Добавил категорий в шапке (Вроде работают)</li>
                                            <li>Добавил оверлей "Что нового?"</li>
                                        </ul>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </>
                            <NavDropdown
                                title="Proftorg"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item
                                    href="#PROFTORG/teplo"
                                    onClick={() => {
                                        setCategoryData(["PROFTORG", "teplo"]);
                                    }}
                                >
                                    Тепловое
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#PROFTORG/holod"
                                    onClick={() => {
                                        setCategoryData(["PROFTORG", "holod"]);
                                    }}
                                >
                                    Холодильное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#PROFTORG/neitral"
                                    onClick={() => {
                                        setCategoryData([
                                            "PROFTORG",
                                            "neitral",
                                        ]);
                                    }}
                                >
                                    Нейтральное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#PROFTORG/elecmeh"
                                    onClick={() => {
                                        setCategoryData([
                                            "PROFTORG",
                                            "elecmeh",
                                        ]);
                                    }}
                                >
                                    Элек-Мех
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="DedTrade"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item
                                    href="#DEDTRADE/teplo"
                                    onClick={() => {
                                        setCategoryData(["DEDTRADE", "teplo"]);
                                    }}
                                >
                                    Тепловое
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#DEDTRADE/holod"
                                    onClick={() => {
                                        setCategoryData(["DEDTRADE", "holod"]);
                                    }}
                                >
                                    Холодильное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#DEDTRADE/neitral"
                                    onClick={() => {
                                        setCategoryData([
                                            "DEDTRADE",
                                            "neitral",
                                        ]);
                                    }}
                                >
                                    Нейтральное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#DEDTRADE/elecmeh"
                                    onClick={() => {
                                        setCategoryData([
                                            "DEDTRADE",
                                            "elecmeh",
                                        ]);
                                    }}
                                >
                                    Элек-Мех
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="ProKitchen"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item
                                    href="#PROKITCHEN/teplo"
                                    onClick={() => {
                                        setCategoryData([
                                            "PROKITCHEN",
                                            "teplo",
                                        ]);
                                    }}
                                >
                                    Тепловое
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#PROKITCHEN/holod"
                                    onClick={() => {
                                        setCategoryData([
                                            "PROKITCHEN",
                                            "holod",
                                        ]);
                                    }}
                                >
                                    Холодильное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#PROKITCHEN/neitral"
                                    onClick={() => {
                                        setCategoryData([
                                            "PROKITCHEN",
                                            "neitral",
                                        ]);
                                    }}
                                >
                                    Нейтральное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#PROKITCHEN/elecmeh"
                                    onClick={() => {
                                        setCategoryData([
                                            "PROKITCHEN",
                                            "elecmeh",
                                        ]);
                                    }}
                                >
                                    Элек-Мех
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#PROKITCHEN/unknow"
                                    onClick={() => {
                                        setCategoryData([
                                            "PROKITCHEN",
                                            "unknow",
                                        ]);
                                    }}
                                >
                                    Unknow
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
