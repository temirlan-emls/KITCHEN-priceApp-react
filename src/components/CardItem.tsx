import * as React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { IProduct } from "../models/product.model";
import { Scrollbars } from "react-custom-scrollbars-2";

interface ICardItemProps {
    product: IProduct;
}

const CardItem: React.FunctionComponent<ICardItemProps> = ({
    product,
}: ICardItemProps) => {
    function toCurrencForm(number: number) {
        return new Intl.NumberFormat("ru-KZ", {
            style: "currency",
            currency: "KZT",
            maximumSignificantDigits: 5,
        }).format(number);
    }

    const source_price = toCurrencForm(product.price);
    let kitchen_price;
    let margin;
    if (product.price === undefined) {
        kitchen_price = 0;
    } else if (product.sourceSite === "PROFTORG") {
        kitchen_price = toCurrencForm(product.price * 1.25);
        margin = toCurrencForm(product.price * 1.25 - product.price);
    } else if (product.sourceSite === "DEDTRADE") {
        kitchen_price = toCurrencForm(product.price * 1.1);
        margin = toCurrencForm(product.price * 1.1 - product.price);
    } else if (product.sourceSite === "PROKITCHEN") {
        kitchen_price = toCurrencForm(product.price * 1.1);
        margin = toCurrencForm(product.price * 1.1 - product.price);
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
                    {kitchen_price}
                </ListGroup.Item>
                <ListGroup.Item style={priceWrapStyle} className="text-center">
                    {margin}
                </ListGroup.Item>
            </ListGroup>
        </>
    );
};

export default CardItem;
