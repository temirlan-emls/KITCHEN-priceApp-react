import { useState } from "react";
import { Badge, Button, Card, Container, ListGroup } from "react-bootstrap";
import { IProduct } from "../models/product.model";

interface IProductProps {
    product: IProduct;
}

const Product: React.FunctionComponent<IProductProps> = ({
    product,
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
    }

    return (
        <Card style={{ width: "18rem" }} className="mt-5">
            <Card.Img
                variant="top"
                src={product.imgLink}
                style={{ maxHeight: "286px" }}
            />
            <Card.Body>
                <Badge bg="secondary">
                    {product.date}
                </Badge>
                <Card.Title>{product.title}</Card.Title>
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
                        <Card.Text>{product.desc}</Card.Text>
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
        </Card>
    );
};

export default Product;
