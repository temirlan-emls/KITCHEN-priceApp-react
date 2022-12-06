import { useState } from "react";
import {
    Badge,
    Button,
    Card,
    Container,
    ListGroup,
    ButtonGroup,
} from "react-bootstrap";
import { IProduct } from "../models/product.model";
import { useSnackbar } from "notistack";

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
        if (product.price < 100000) {
            kitchen_price = toCurrencForm(product.price * 1.4);
            margin = toCurrencForm(product.price * 1.4 - product.price);
        } else {
            kitchen_price = toCurrencForm(product.price * 1.3);
            margin = toCurrencForm(product.price * 1.3 - product.price);
        }
    } else if (product.sourceSite === "DEDTRADE") {
        if (product.price < 100000) {
            kitchen_price = toCurrencForm(product.price * 1.15);
            margin = toCurrencForm(product.price * 1.1 - product.price);
        } else {
            kitchen_price = toCurrencForm(product.price * 1.1);
            margin = toCurrencForm(product.price * 1.1 - product.price);
        }
    } else if (product.sourceSite === "PROKITCHEN") {
        if (product.price < 100000) {
            kitchen_price = toCurrencForm(product.price * 1.15);
            margin = toCurrencForm(product.price * 1.1 - product.price);
        } else {
            kitchen_price = toCurrencForm(product.price * 1.1);
            margin = toCurrencForm(product.price * 1.1 - product.price);
        }
    }

    let card_code;
    if (product.title === product.prodCode) {
        card_code = "";
    } else if (product.title !== product.prodCode) {
        card_code = product.prodCode;
    }

    const countWrapStyle = {
        borderTop: "1px solid rgb(255,193,7)",
        borderBottom: "1px solid rgb(255,193,7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const [counterNum, setCounterNum] = useState(1);

    const incrCount = () => {
        setCounterNum(counterNum + 1);
    };
    const decrCount = () => {
        if (counterNum > 1) {
            setCounterNum(counterNum - 1);
        }
    };
    const multi = (str: string, rate: number): string[] => {
        let tmp: string[] = [];
        for (let i = 0; i < rate; i++) {
            tmp.push(str);
        }
        return tmp;
    };

    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar(`Добавлено в корзину ${counterNum} шт.`, {
            variant: "success",
            autoHideDuration: 1000,
        });
    };

    return (
        <Card style={{ maxWidth: "18rem", minWidth: "8rem" }} className="mt-5">
            {" "}
            <Card.Img
                variant="top"
                src={product.imgLink}
                style={{ maxHeight: "286px" }}
            />
            <Card.Body>
                <h6>
                    <Badge bg="secondary" className="w-100">
                        LAST UPDATE:{" "}
                        {product.date.replace(".", "/").replace(".", "/")}
                    </Badge>
                </h6>

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
                <ButtonGroup>
                    <Button
                        size="sm"
                        variant="outline-warning fw-bold text-dark"
                        onClick={decrCount}
                    >
                        -
                    </Button>
                    <div style={countWrapStyle}>
                        <div className="mx-2 fw-bold">{counterNum}</div>
                    </div>
                    <Button
                        size="sm"
                        variant="outline-warning fw-bold text-dark"
                        onClick={incrCount}
                    >
                        +
                    </Button>
                    <Button
                        variant="warning fw-bold"
                        style={{ color: "black" }}
                        className="w-100"
                        size="sm"
                        onClick={() => {
                            setCardValue((prevNames: string[]) => [
                                ...prevNames,
                                ...multi(product.id, counterNum),
                            ]);
                            handleClick();
                        }}
                    >
                        ДОБАВИТЬ В КОРЗИНУ
                    </Button>
                </ButtonGroup>
            </Card.Footer>
        </Card>
    );
};

export default Product;
