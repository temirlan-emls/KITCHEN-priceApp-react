import * as React from "react";
import { useState, useRef } from "react";
import {
    Badge,
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

const Header = ({
    setSeachData,
    setCategoryData,
    navigateToCardPage,
    navigateMainPage,
    cardValue,
}: any) => {
    const [showPopover, setShowPopover] = useState(false);
    const handleClose = () => setShowPopover(false);
    const handleShow = () => setShowPopover(true);
    const toMainPage = () => {
        navigateMainPage();
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
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
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
                className="fixed-top"
            >
                <Container>
                    <Navbar.Brand
                        href="#home"
                        onClick={() => {
                            toMainPage();
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
                                    variant="outline-success fw-bold"
                                    size="sm"
                                    onClick={handleShow}
                                >
                                    Что Нового? Ver1.81
                                </Button>
                                <Offcanvas
                                    show={showPopover}
                                    onHide={handleClose}
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>
                                            Что Нового? Ver1.81
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
                                                Добавил крестик (чтобы поиск
                                                очистить)
                                            </li>
                                            <li>
                                                Добавил Все компании (All
                                                product)
                                            </li>
                                            <li>Ограничить 52 штук</li>
                                            <li>
                                                Добавил реквизиты (можно скачать
                                                в PDF или скопировать в буфер)
                                            </li>
                                        </ul>
                                        <h4>27/08/2022 06:30 am</h4>
                                        <ul>
                                            <li>Добавил корзину</li>
                                            <li>
                                                Кнопка очистики корзины (в самой
                                                корзине)
                                            </li>
                                        </ul>
                                        <h4>28/08/2022</h4>
                                        <ul>
                                            <li>Исправил корзину</li>
                                            <li>
                                                В корзине появилась сумма цен
                                            </li>
                                        </ul>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </>
                            <NavDropdown
                                title="Реквизиты"
                                id="collasible-nav-dropdown"
                                className="fw-bold"
                                style={{ color: "black" }}
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
                                    href="#All/ALL"
                                    onClick={() => {
                                        toMainPage();
                                        setCategoryData(["allprod", "allprod"]);
                                    }}
                                >
                                    All Products
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#All/teplo"
                                    onClick={() => {
                                        toMainPage();
                                        setCategoryData(["", "teplo"]);
                                    }}
                                >
                                    All Тепловое
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#All/holod"
                                    onClick={() => {
                                        toMainPage();
                                        setCategoryData(["", "holod"]);
                                    }}
                                >
                                    All Холодильное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#All/neitral"
                                    onClick={() => {
                                        toMainPage();
                                        setCategoryData(["", "neitral"]);
                                    }}
                                >
                                    All Нейтральное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#All/elecmeh"
                                    onClick={() => {
                                        toMainPage();
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
                                        toMainPage();
                                        setCategoryData(["PROFTORG", "teplo"]);
                                    }}
                                >
                                    Тепловое
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#PROFTORG/holod"
                                    onClick={() => {
                                        toMainPage();
                                        setCategoryData(["PROFTORG", "holod"]);
                                    }}
                                >
                                    Холодильное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#PROFTORG/neitral"
                                    onClick={() => {
                                        toMainPage();
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
                                        toMainPage();
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
                                        toMainPage();
                                        setCategoryData(["DEDTRADE", "teplo"]);
                                    }}
                                >
                                    Тепловое
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#DEDTRADE/holod"
                                    onClick={() => {
                                        toMainPage();
                                        setCategoryData(["DEDTRADE", "holod"]);
                                    }}
                                >
                                    Холодильное
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#DEDTRADE/neitral"
                                    onClick={() => {
                                        toMainPage();
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
                                        toMainPage();
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
                                        toMainPage();
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
                                        toMainPage();
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
                                        toMainPage();
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
                                        toMainPage();
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
                                        toMainPage();
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
                            {cardValue.length ? (
                                <Button
                                    variant="outline-warning fw-bold"
                                    style={{ color: "black" }}
                                    className="mx-2"
                                    onClick={navigateToCardPage}
                                >
                                    {"В Корзине   "}
                                    <Badge bg="secondary">
                                        {cardValue.length}
                                    </Badge>
                                </Button>
                            ) : (
                                <Button
                                    variant="outline-warning fw-bold"
                                    style={{ color: "black" }}
                                    className="mx-2"
                                    disabled
                                >
                                    {"Корзина   "}
                                    <Badge bg="secondary">0</Badge>
                                </Button>
                            )}
                        </Nav>
                        {/*  */}
                        <Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(event) => {
                                        setSeachData(event?.target.value);
                                        scrollToTop();
                                    }}
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
