import * as React from "react";
import { useState, useRef } from "react";
import {
    Button,
    CloseButton,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Header = ({ setSeachData, setCategoryData }: any) => {
    const [showPopover, setShowPopover] = useState(false);
    const handleClose = () => setShowPopover(false);
    const handleShow = () => setShowPopover(true);

    const KITCHENreks =
        'ТОО "Kitchen.kz" \nБанк получатель: АО «Kaspi Bank» \nБИК: CASPKZKA \nБИН/ИИН: 201140004179 \nНомер счета KZT: KZ76722S000015686769 \nАдрес: Алматы, улица Гоголя, дом 201/92 \nКБе: 17';
    const BKreks =
        'ТОО "BK Trading Company"" \nБанк получатель: АО «Kaspi Bank» \nБИК: CASPKZKA \nБИН/ИИН: 161140000443 \nНомер счета KZT: KZ89722S000001603687 \nАдрес: Алматы, Ауэзова, дом 3/5, кв/офис оф.11 \nКБе: 17';

    const ref = useRef(null);
    const handleClick = () => {
        let input: any = ref.current;
        input.value = "";
        setSeachData("");
    };
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
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={handleShow}
                                >
                                    Что Нового? Ver1.7
                                </Button>
                                <Offcanvas
                                    show={showPopover}
                                    onHide={handleClose}
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>
                                            Что Нового? Ver1.7
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <h4>24/08/2022</h4>
                                        <ul>
                                            <li>Добавил PROKITCHEN</li>
                                            <li>
                                                Добавил даты на карточках
                                                (Актуальность карточек)
                                            </li>
                                            <li>
                                                Добавил категорий в шапке (Вроде
                                                работают)
                                            </li>
                                            <li>
                                                Добавил оверлей "Что нового?"
                                            </li>
                                        </ul>
                                        <h4>25/08/2022</h4>
                                        <ul>
                                            <li>
                                                Добавил крестик (чтобы поиск очистить)
                                            </li>
                                            <li>
                                                Добавил Все компании (All product)
                                            </li>
                                            <li>
                                                Ограничить 50 штук
                                            </li>
                                            <li>Добавил реквизиты (можно скачать в PDF или скопировать в буфер)</li>
                                        </ul>   
                                    </Offcanvas.Body>
                                    
                                </Offcanvas>
                            </>
                            <NavDropdown
                                title="Реквизиты"
                                id="collasible-nav-dropdown"
                                className='fw-bold'
                            >
                                <NavDropdown.Item
                                    href="#COPY/BK"
                                    onClick={() => {
                                        navigator.clipboard.writeText(BKreks);
                                        swal(
                                            "Скопированно!",
                                            'Реквизиты ТОО "BK Trading Company" в буфере обмена',
                                            "success"
                                        );
                                    }}
                                >
                                    BK Trading - скопировать
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#DOWNLOAD/BK">
                                    <Link
                                        to="/reks/BKreks.pdf"
                                        target="_blank"
                                        download
                                    >
                                        BK Trading - скачать PDF
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#COPY/Kitchen"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            KITCHENreks
                                        );
                                        swal(
                                            "Скопированно!",
                                            'Реквизиты ТОО "Kitchen.kz в буфере обмена',
                                            "success"
                                        );
                                    }}
                                >
                                    Kitchen.kz - скопировать
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#DOWNLOAD/Kitchen">
                                    <Link
                                        to="/reks/KITCHENreks.pdf"
                                        target="_blank"
                                        download
                                    >
                                        Kitchen.kz - скачать PDF
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="All Products"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item
                                    href="#PROKITCHEN/unknow"
                                    onClick={() => {
                                        setCategoryData(["allprod", "allprod"]);
                                    }}
                                >
                                    All Products
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#All/teplo"
                                    onClick={() => {
                                        setCategoryData(["", "teplo"]);
                                    }}
                                >
                                    All Тепловое
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#All/holod"
                                    onClick={() => {
                                        setCategoryData(["", "holod"]);
                                    }}
                                >
                                    All Холодильное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#All/neitral"
                                    onClick={() => {
                                        setCategoryData(["", "neitral"]);
                                    }}
                                >
                                    All Нейтральное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#All/elecmeh"
                                    onClick={() => {
                                        setCategoryData(["", "elecmeh"]);
                                    }}
                                >
                                    All Элек-Мех
                                </NavDropdown.Item>
                            </NavDropdown>
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
                                    ref={ref}
                                />
                                <CloseButton
                                    onClick={handleClick}
                                    className="mt-2"
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
