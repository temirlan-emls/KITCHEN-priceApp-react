import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
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

    const [prodPrice, setGetPrice] = useState([]);
    let prodPriceSum = 0;
    for (let i = 0; i < prodPrice.length; i++) {
        prodPriceSum += prodPrice[i];
    }

    const [kitchenPrice, setGetKithcenPrice] = useState([]);
    let kitchenPriceSum = 0;
    for (let i = 0; i < kitchenPrice.length; i++) {
        kitchenPriceSum += kitchenPrice[i];
    }

    const [margin, setGetMargin] = useState([]);
    let marginSum = 0;
    for (let i = 0; i < margin.length; i++) {
        marginSum += margin[i];
    }

    return (
        <>
            <Container className="d-flex flex-wrap justify-content-around mt-5">
                <Container className="d-flex justify-content-around mt-5">
                    {" "}
                    <Button
                        variant="outline-warning fw-bold"
                        style={{ color: "black" }}
                        onClick={clearStorage}
                        size="sm"
                    >
                        ОЧИСТИТЬ КОРЗИНУ
                    </Button>
                    <Button variant="secondary" disabled size="sm">
                        DOWLOAD PDF
                    </Button>
                    <Button variant="secondary" disabled size="sm">
                        DOWLOAD EXCEL
                    </Button>
                </Container>

                <Table bordered responsive className="mt-5 text-center">
                    <thead>
                        <tr>
                            <th>ФОТО</th>
                            <th>НАЗВАНИЕ</th>
                            <th>ОПИСАНИЕ</th>
                            <th>
                                PROFTORG{"\n"}
                                {toCurrencForm(prodPriceSum)}
                            </th>
                            <th>
                                KITCHEN{"\n"}
                                {toCurrencForm(kitchenPriceSum)}
                            </th>
                            <th>
                                МАРЖА{"\n"}
                                {toCurrencForm(marginSum)}
                            </th>
                        </tr>
                    </thead>
                    <tbody >
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
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default CardPage;
