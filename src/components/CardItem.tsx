import * as React from "react";
import { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { IProduct } from "../models/product.model";
import { Scrollbars } from "react-custom-scrollbars-2";

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

    const imgWrapStyle = {
        width: "230px",
        height: "230px",
        padding: "2px",
    };
    const titleWrapStyle = {
        width: "150px",
    };
    const statsWrapStyle = {
        width: "450px",
        maxHeight: "250px",
        overflow: "auto",
    };
    const priceWrapStyle = {
        width: "150px",
    };

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
            <ListGroup horizontal>
                <ListGroup.Item style={imgWrapStyle}>
                    <Card.Img
                        variant="top"
                        src={product.imgLink}
                        style={{ objectFit: "fill" }}
                    />
                </ListGroup.Item>
                <ListGroup.Item style={titleWrapStyle} className="text-center">
                    {product.title}
                </ListGroup.Item>
                <ListGroup.Item style={statsWrapStyle} className="text-center">
                    <Scrollbars>
                        {product.desc.replace(/([А-Я])/g, "\n $1").trim()}
                    </Scrollbars>
                </ListGroup.Item>
                <ListGroup.Item style={priceWrapStyle} className="text-center">
                    {source_price}
                </ListGroup.Item>
                <ListGroup.Item style={priceWrapStyle} className="text-center">
                    {kitchenPriceFormatted}
                </ListGroup.Item>
                <ListGroup.Item style={priceWrapStyle} className="text-center">
                    {marginFormatted}
                </ListGroup.Item>
            </ListGroup>
        </>
    );
};

export default CardItem;
