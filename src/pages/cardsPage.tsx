import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { IProduct } from "../models/product.model";
import { useNavigate } from "react-router-dom";
import CardItem from "../components/CardItem";
import * as XLSX from "xlsx";

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

    const handleExport = () => {
        let tmp = cardValue.map((item: any) =>
            dbData.filter((product) => {
                if (product.id === item) {
                    return product;
                }
                return "";
            })
        );

        console.log(tmp.flat());

        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.table_to_sheet(
            document.getElementById("cardTable")
        );

        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, "Cart.xlsx");
    };
    // const handleExport = () => {
    //     let tmp = cardValue.map((item: any) =>
    //         dbData.filter((product) => {
    //             if (product.id === item) {
    //                 return product;
    //             }
    //             return ''
    //         })
    //     );

    //     console.log(tmp.flat());

    //     let wb = XLSX.utils.book_new();
    //     let ws = XLSX.utils.json_to_sheet(Object.values(tmp.flat()));

    //     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    //     XLSX.writeFile(wb, "Cart.xlsx");
    // };
    return (
        <>
            <Container className="d-flex flex-wrap justify-content-around mt-5">
                <Container className="d-flex justify-content-around mt-5">
                    {" "}
                    <Button
                        variant="outline-warning fw-bold"
                        style={{ color: "black" }}
                        size="sm"
                        onClick={clearStorage}
                    >
                        ОЧИСТИТЬ КОРЗИНУ
                    </Button>
                    <Button variant="secondary" disabled size="sm">
                        DOWLOAD PDF
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={handleExport}
                    >
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

                <Table
                    bordered
                    responsive
                    className="mt-5 text-center"
                    id="cardTable"
                >
                    <thead>
                        <tr>
                            <th className="p-0">ФОТО</th>
                            <th className="p-0">НАЗВАНИЕ</th>
                            <th className="p-0">ОПИСАНИЕ</th>
                            <th className="p-0">Кол-во</th>
                            <th className="p-0">
                                KITCHEN SUM: {"\n"}
                                {toCurrencForm(kitchenSum)}
                            </th>
                            <th className="p-0">
                                PRICE SUM:{"\n"}
                                {toCurrencForm(sourceSum)}
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
