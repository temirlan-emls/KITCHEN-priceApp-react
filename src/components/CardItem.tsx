import * as React from "react";
import { useEffect, useState } from "react";
import { Badge, Card, ButtonGroup, Button } from "react-bootstrap";
import { IProduct } from "../models/product.model";
import { Scrollbars } from "react-custom-scrollbars-2";

interface ICardItemProps {
    product: IProduct;
    setCardValue: any;
    cardValue: any;
}

const CardItem: React.FunctionComponent<ICardItemProps> = ({
    product,
    setCardValue,
    cardValue,
}: ICardItemProps) => {
    function toCurrencForm(number: number) {
        return new Intl.NumberFormat("ru-KZ", {
            style: "currency",
            currency: "KZT",
            maximumSignificantDigits: 5,
        }).format(number);
    }

    function toFindDuplicates(arr: string[]) {
        return arr.reduce(function (obj: any, b) {
            obj[b] = ++obj[b] || 1;
            return obj;
        }, {});
    }
    const [cardCount, setCardCount] = useState(1);
    useEffect(() => {
        let dublicVal = toFindDuplicates(cardValue);
        if (product.id in dublicVal) {
            setCardCount(dublicVal[`${product.id}`]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardValue]);

    let sourcePiceCount = product.price * cardCount;
    let kitchenPriceCount = 0;
    let kitchenPriceData = 0;
    let marginCount = 0;
    let marginData = 0;
    if (product.price === undefined) {
        kitchenPriceData = 0;
    } else if (product.sourceSite === "PROFTORG") {
        kitchenPriceData = product.price * 1.25;
        kitchenPriceCount = kitchenPriceData * cardCount;
        marginData = product.price * 1.25 - product.price;
        marginCount = marginData * cardCount;
    } else if (product.sourceSite === "DEDTRADE") {
        kitchenPriceData = product.price * 1.1;
        kitchenPriceCount = kitchenPriceData * cardCount;
        marginData = product.price * 1.1 - product.price;
        marginCount = marginData * cardCount;
    } else if (product.sourceSite === "PROKITCHEN") {
        kitchenPriceData = product.price * 1.1;
        kitchenPriceCount = kitchenPriceData * cardCount;
        marginData = product.price * 1.1 - product.price;
        marginCount = marginData * cardCount;
    }

    const removeItem = (arr: string[], item: string) => {
        let newArray = [...arr];
        const index = newArray.findIndex((element) => element === item);
        if (index !== -1) {
            newArray.splice(index, 1);
            return newArray;
        }
    };
    const countWrapStyle = {
        borderRight: "1px solid rgb(108,117,125)",
        borderLeft: "1px solid rgb(108,117,125)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    const priceStyle = {
        margin: "",
    };

    return (
        <>
            <tr>

                <th className="p-0">
                    {" "}
                    <Card.Img
                        variant="top"
                        src={product.imgLink}
                        style={{
                            objectFit: "fill",
                            minWidth: "200px",
                            maxWidth: "230px",
                        }}
                    />
                </th>
                <td className="fw-normal" style={{ maxWidth: "230px" }}>
                    <a
                        href={product.prodLink}
                        style={{ color: "inherit", textDecoration: "inherit" }}
                        rel="noreferrer"
                        target="_blank"
                    >
                        {product.title}
                    </a>
                </td>
                <td className="fw-normal">
                    <Scrollbars style={{ maxWidth: "350px",minWidth: "300px", height: 200 }}>
                        {product.desc.replace(/([А-Я])/g, "\n $1").trim()}
                    </Scrollbars>
                </td>
                <th className="align-middle p-4">
                    <ButtonGroup vertical>
                        <Button
                            size="sm"
                            variant="outline-secondary fw-bold"
                            onClick={() => {
                                setCardValue((prevNames: string[]) => [
                                    ...prevNames,
                                    product.id,
                                ]);
                            }}
                        >
                            +
                        </Button>

                        <div style={countWrapStyle}>
                            <div className="mx-2 fw-bold">{cardCount}</div>
                        </div>
                        <Button
                            size="sm"
                            variant="outline-secondary fw-bold"
                            onClick={() => {
                                setCardValue((prevNames: string[]) =>
                                    removeItem(prevNames, product.id)
                                );
                            }}
                        >
                            -
                        </Button>
                    </ButtonGroup>
                </th>
                <td className="align-middle p-0">
                    <h4 style={priceStyle}>
                        <p className="fw-light fs-6 m-0">Цена за 1 шт.</p>
                        <Badge bg="secondary">
                            {toCurrencForm(kitchenPriceData)}
                        </Badge>
                        <br />
                        <Badge bg="warning" text="dark">
                            {toCurrencForm(kitchenPriceCount)}
                        </Badge>
                        <p className="fw-light fs-6 m-0">
                            Цена за {cardCount} шт.
                        </p>
                    </h4>{" "}
                </td>
                <td className="align-middle p-0">
                    <h4 style={priceStyle}>
                        <p className="fw-light fs-6 m-0">Цена за 1 шт.</p>
                        <Badge bg="secondary">
                            {toCurrencForm(product.price)}
                        </Badge>
                        <br />
                        <Badge bg="warning" text="dark">
                            {toCurrencForm(sourcePiceCount)}
                        </Badge>
                        <p className="fw-light fs-6 m-0">
                            Цена за {cardCount} шт.
                        </p>
                    </h4>{" "}
                </td>
                <td className="align-middle p-0">
                    <h4 style={priceStyle}>
                        <p className="fw-light fs-6 m-0">Цена за 1 шт.</p>
                        <Badge bg="secondary">
                            {toCurrencForm(marginData)}
                        </Badge>
                        <br />
                        <Badge bg="warning" text="dark">
                            {toCurrencForm(marginCount)}
                        </Badge>
                        <p className="fw-light fs-6 m-0">
                            Цена за {cardCount} шт.
                        </p>
                    </h4>{" "}
                </td>
            </tr>
        </>
    );
};

export default CardItem;
