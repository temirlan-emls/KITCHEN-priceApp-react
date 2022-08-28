import * as React from "react";
import { useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { IProduct } from "../models/product.model";
// import { Scrollbars } from "react-custom-scrollbars-2";

interface ICardItemProps {
    product: IProduct;
    setGetPrice: any;
    setGetKithcenPrice: any;
    setGetMargin: any;
}

const CardItem: React.FunctionComponent<ICardItemProps> = ({
    product,
    setGetPrice,
    setGetKithcenPrice,
    setGetMargin,
}: ICardItemProps) => {
    function toCurrencForm(number: number) {
        return new Intl.NumberFormat("ru-KZ", {
            style: "currency",
            currency: "KZT",
            maximumSignificantDigits: 5,
        }).format(number);
    }

    const source_price = toCurrencForm(product.price);
    let kitchenPriceFormatted;
    let kitchenPriceData = 0;
    let marginFormatted;
    let marginData = 0;
    if (product.price === undefined) {
        kitchenPriceData = 0;
        kitchenPriceFormatted = 0;
    } else if (product.sourceSite === "PROFTORG") {
        kitchenPriceData = product.price * 1.25;
        kitchenPriceFormatted = toCurrencForm(product.price * 1.25);
        marginData = product.price * 1.25 - product.price;
        marginFormatted = toCurrencForm(product.price * 1.25 - product.price);
    } else if (product.sourceSite === "DEDTRADE") {
        kitchenPriceData = product.price * 1.1;
        kitchenPriceFormatted = toCurrencForm(product.price * 1.1);
        marginData = product.price * 1.1 - product.price;
        marginFormatted = toCurrencForm(product.price * 1.1 - product.price);
    } else if (product.sourceSite === "PROKITCHEN") {
        kitchenPriceData = product.price * 1.1;
        kitchenPriceFormatted = toCurrencForm(product.price * 1.1);
        marginData = product.price * 1.1 - product.price;
        marginFormatted = toCurrencForm(product.price * 1.1 - product.price);
    }

    useEffect(() => {
        setGetPrice((preState: any) => [...preState, Number(product.price)]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setGetKithcenPrice((preState: any) => [
            ...preState,
            Number(kitchenPriceData),
        ]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setGetMargin((preState: any) => [...preState, Number(marginData)]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Table className="m-0 "></Table>
            <tr>
                <th className="p-0">
                    {" "}
                    <Card.Img
                        variant="top"
                        src={product.imgLink}
                        style={{
                            objectFit: "fill",
                            maxWidth: "230px",
                        }}
                    />
                </th>
                <th className="fw-normal">{product.title}</th>
                <th className="fw-normal">{product.desc.replace(/([А-Я])/g, "\n $1").trim()}</th>
                <th className="fw-normal">{source_price}</th>
                <th className="fw-normal">{kitchenPriceFormatted}</th>
                <th className="fw-normal">{marginFormatted}</th>
            </tr>
        </>
    );
};

export default CardItem;
