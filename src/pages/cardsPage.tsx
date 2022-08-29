import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { IProduct } from "../models/product.model";
import { useNavigate } from "react-router-dom";
import CardItem from "../components/CardItem";

interface ICardPage {
    dbData: IProduct[];
    cardValue: any;
    setCardValue: any;
}

function CardPage({ dbData, cardValue, setCardValue }: ICardPage) {
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

    const dataToArr = () => {
        let tmp: any = [];
        cardValue.map((item: any) =>
            dbData.filter((product) => {
                if (product.id === item) {
                    tmp.push(product);
                }
                return "";
            })
        );
        return tmp;
    };

    const showSum = () => {
        let arr = dataToArr();
        let sourcePriceArr = [];
        let kitchenPriceArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].sourceSite === "PROFTORG") {
                sourcePriceArr.push(Number(arr[i].price));
                kitchenPriceArr.push(Number(arr[i].price) * 1.25);
            } else if (arr[i].sourceSite === "DEDTRADE") {
                sourcePriceArr.push(Number(arr[i].price));
                kitchenPriceArr.push(Number(arr[i].price) * 1.1);
            } else if (arr[i].sourceSite === "PROKITCHEN") {
                sourcePriceArr.push(Number(arr[i].price));
                kitchenPriceArr.push(Number(arr[i].price) * 1.1);
            }
        }
        let sourcePriceSum = 0;
        let kitchenPriceSum = 0;
        sourcePriceArr.forEach((item) => {
            sourcePriceSum += item;
        });
        kitchenPriceArr.forEach((item) => {
            kitchenPriceSum += item;
        });

        setSourceSum(sourcePriceSum);
        setKitchenSum(kitchenPriceSum);
    };
    const [sourceSum, setSourceSum] = useState(0);
    const [kitchenSum, setKitchenSum] = useState(0);
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
                    <Button
                        variant="success fw-bold"
                        size="sm"
                        onClick={showSum}
                    >
                        СУММА
                    </Button>
                </Container>

                <Table bordered responsive className="mt-5 text-center">
                    <thead>
                        <tr>
                            <th className="p-0"></th>
                            <th className="p-0">ФОТО</th>
                            <th className="p-0">НАЗВАНИЕ</th>
                            <th className="p-0">ОПИСАНИЕ</th>
                            <th className="p-0">
                                PRICE SUM:{"\n"}
                                {toCurrencForm(sourceSum)}
                            </th>
                            <th className="p-0">
                                KITCHEN SUM: {"\n"}
                                {toCurrencForm(kitchenSum)}
                            </th>
                            <th className="p-0">
                                МАРЖА SUM:{"\n"}
                                {toCurrencForm(kitchenSum - sourceSum)}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardValue
                            .filter(
                                (item: string, index: number) =>
                                    cardValue.indexOf(item) === index
                            )
                            .map((item: any) =>
                                dbData
                                    .filter((product) => {
                                        if (product.id === item) {
                                            return product;
                                        }
                                        return "";
                                    })
                                    .map((product, index) => (
                                        <CardItem
                                            cardValue={cardValue}
                                            setCardValue={setCardValue}
                                            product={product}
                                            key={index}
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
