import { useState } from "react";
import { Badge, Button, Card, Container, ListGroup } from "react-bootstrap";
import { IProduct } from "../models/product.model";

interface IProductProps {
    product: IProduct;
    setCardValue: any;
}

const Product: React.FunctionComponent<IProductProps> = ({
    product,
    setCardValue,
}: IProductProps) => {
    const [details, setDetails] = useState(false);
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

    let card_code;
    if (product.title === product.prodCode) {
        card_code = "";
    } else if (product.title !== product.prodCode) {
        card_code = product.prodCode;
    }
    return (
        <Card style={{ width: "18rem" }} className="mt-5">
            <Card.Img
                variant="top"
                src={product.imgLink}
                style={{ maxHeight: "286px" }}
            />
            <Card.Body>
                <Badge bg="secondary">{product.date}</Badge>

                <Card.Title>{product.title}</Card.Title>
                <p>{card_code}</p>
                <Button
                    variant={details ? "outline-secondary" : "outline-danger"}
                    className="w-100 my-2"
                    size="sm"
                    onClick={() => setDetails(!details)}
                >
                    {details ? "Меньше" : "Больше"}
                </Button>
                {details && (
                    <Container>
                        <Card.Text>
                            {product.desc.replace(/([А-Я])/g, "\n $1").trim()}
                        </Card.Text>
                    </Container>
                )}
                <ListGroup>
                    <ListGroup.Item>
                        {product.sourceSite.toLocaleUpperCase()}: {source_price}
                    </ListGroup.Item>
                    <ListGroup.Item variant="warning">
                        KITCHEN.KZ: {kitchen_price}
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                        Маржа: {margin}
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link
                        href={product.prodLink}
                        rel="noreferrer"
                        target="_blank"
                    >
                        To Product Page
                    </Card.Link>
                </Card.Body>
            </Card.Body>
            <Card.Footer>
                <Button
                    variant="outline-warning fw-bold"
                    style={{ color: "black" }}
                    className="w-100 my-2"
                    size="sm"
                    onClick={() => {
                        setCardValue((prevNames: string[]) => [
                            ...prevNames,
                            product.id,
                        ]);
                    }}
                >
                    ДОБАВИТЬ В КОРЗИНУ
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default Product;
