import React, { useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { IProduct } from "../models/product.model";
import { useNavigate } from "react-router-dom";
import CardItem from "../components/CardItem";

interface ICardPage {
    dbData: IProduct[];
    cardValue: any;
}

function CardPage({ dbData, cardValue }: ICardPage) {
    function toCurrencForm(number: number) {
        return new Intl.NumberFormat("ru-KZ", {
            style: "currency",
            currency: "KZT",
            maximumSignificantDigits: 5,
        }).format(number);
    }
    const navigate = useNavigate();
    const clearStorage = () => {
        window.localStorage.clear();
        navigate("/");
        window.location.reload();
    };

    const imgWrapStyle = {
        width: "230px",
    };
    const titleWrapStyle = {
        width: "150px",
    };
    const statsWrapStyle = {
        width: "450px",
    };
    const priceWrapStyle = {
        width: "150px",
    };

    const [prodPrice, setGetPrice] = useState([]);
    let filteredPrice = prodPrice.slice(0, prodPrice.length / 2);
    let prodPriceSum = 0;
    for (let i = 0; i < filteredPrice.length; i++) {
        prodPriceSum += filteredPrice[i];
    }

    const [kitchenPrice, setGetKithcenPrice] = useState([]);
    let filteredKitchen = kitchenPrice.slice(0, prodPrice.length / 2);
    let kitchenPriceSum = 0;
    for (let i = 0; i < filteredKitchen.length; i++) {
        kitchenPriceSum += filteredKitchen[i];
    }

    const [margin, setGetMargin] = useState([]);
    let filteredMargin = margin.slice(0, prodPrice.length / 2);
    let marginSum = 0;
    for (let i = 0; i < filteredMargin.length; i++) {
        marginSum += filteredMargin[i];
    }

    return (
        <Container className="d-flex flex-wrap justify-content-around">
            <Container className="d-flex justify-content-around mt-5">
                {" "}
                <Button
                    variant="outline-warning fw-bold"
                    style={{ color: "black" }}
                    onClick={clearStorage}
                >
                    ОЧИСТИТЬ КОРЗИНУ
                </Button>
                <Button variant="secondary" disabled>
                    DOWLOAD PDF
                </Button>
                <Button variant="secondary" disabled>
                    DOWLOAD EXCEL
                </Button>
            </Container>
            <div id="pdf_content">
                <Container className="d-flex flex-wrap justify-content-around">
                    <ListGroup className="mt-5">
                        <ListGroup horizontal>
                            <ListGroup.Item
                                style={imgWrapStyle}
                                className="fw-bold text-center"
                            >
                                ФОТО
                            </ListGroup.Item>
                            <ListGroup.Item
                                style={titleWrapStyle}
                                className="fw-bold text-center"
                            >
                                НАЗВАНИЕ
                            </ListGroup.Item>
                            <ListGroup.Item
                                style={statsWrapStyle}
                                className="fw-bold text-center"
                            >
                                ОПИСАНИЕ
                            </ListGroup.Item>
                            <ListGroup.Item
                                style={priceWrapStyle}
                                className="fw-bold text-center"
                            >
                                PROFTORG{"\n"}
                                {toCurrencForm(prodPriceSum)}
                            </ListGroup.Item>
                            <ListGroup.Item
                                style={priceWrapStyle}
                                className="fw-bold text-center"
                            >
                                KITCHEN{"\n"}
                                {toCurrencForm(kitchenPriceSum)}
                            </ListGroup.Item>
                            <ListGroup.Item
                                style={priceWrapStyle}
                                className="fw-bold text-center"
                            >
                                МАРЖА{"     \n"}
                                {toCurrencForm(marginSum)}
                            </ListGroup.Item>
                        </ListGroup>
                        {cardValue.map((item: any) =>
                            dbData
                                .filter((product) => {
                                    if (product.id === item) {
                                        return product;
                                    }
                                    return "";
                                })
                                .map((product, index) => (
                                    <CardItem
                                        product={product}
                                        key={index}
                                        setGetPrice={setGetPrice}
                                        setGetKithcenPrice={setGetKithcenPrice}
                                        setGetMargin={setGetMargin}
                                    />
                                ))
                        )}
                    </ListGroup>
                </Container>
            </div>
        </Container>
    );
}

export default CardPage;
