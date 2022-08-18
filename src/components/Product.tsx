import * as React from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { IProduct } from "../models/product.model";

interface IProductProps {
    product: IProduct;
}

const Product: React.FunctionComponent<IProductProps> = ({
    product,
}: IProductProps) => {
    const [details, setDetails] = React.useState(false);

    function toCurrencForm(number: number) {
        return new Intl.NumberFormat("ru-KZ", {
            style: "currency",
            currency: "KZT",
            maximumSignificantDigits: 3,
        }).format(number);
    }

    const source_price = toCurrencForm(product.price);

    const kitchen_price = toCurrencForm(product.price * 1.25);

    const margin = toCurrencForm(product.price * 1.25 - product.price);
    return (
        <Card style={{ width: "18rem" }} className="mt-5">
            <Card.Img
                variant="top"
                src={product.imgLink}
                style={{ maxHeight: "286px" }}
            />
            <Card.Body>
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
                        {product.sourceSite.toLocaleUpperCase()}:{" "}
                        {source_price}
                    </ListGroup.Item>
                    <ListGroup.Item action variant="warning">
                        Китчен: {kitchen_price}
                    </ListGroup.Item>
                    <ListGroup.Item action variant="success">
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
