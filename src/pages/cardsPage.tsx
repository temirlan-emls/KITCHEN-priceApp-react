import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { IProduct } from "../models/product.model";
import CardItem from "../components/CardItem";

interface ICardPage {
    dbData: IProduct[];
    cardValue: any;
}

function CardPage({ dbData, cardValue }: ICardPage) {
    const clearStorage = () => {
        window.localStorage.clear();
        window.location.reload();
    };

    const imgWrapStyle = {
        width: "230px",
    };
    const titleWrapStyle = {
        width: "150px",
    };
    const statsWrapStyle = {
        width: "450px",
    };
    const priceWrapStyle = {
        width: "150px",
    };

    return (
        <>
            <Container className="d-flex justify-content-around mt-5">
                {" "}
                <Button
                    variant="outline-warning fw-bold"
                    style={{ color: "black" }}
                    onClick={clearStorage}
                >
                    ОЧИСТИТЬ КОРЗИНУ
                </Button>
                <Button variant="secondary" disabled>
                    DOWLOAD PDF
                </Button>
                <Button variant="secondary" disabled>
                    DOWLOAD EXCEL
                </Button>
            </Container>
            <div id="pdf_content">
                <Container className="d-flex flex-wrap justify-content-around">
                    <ListGroup className="mt-5">
                        <ListGroup horizontal>
                            <ListGroup.Item
                                style={imgWrapStyle}
                                className="fw-bold text-center"
                            >
                                ФОТО
                            </ListGroup.Item>
                            <ListGroup.Item
                                style={titleWrapStyle}
                                className="fw-bold text-center"
                            >
                                НАЗВАНИЕ
                            </ListGroup.Item>
                            <ListGroup.Item
                                style={statsWrapStyle}
                                className="fw-bold text-center"
                            >
                                ОПИСАНИЕ
                            </ListGroup.Item>
                            <ListGroup.Item
                                style={priceWrapStyle}
                                className="fw-bold text-center"
                            >
                                PROFTORG
                            </ListGroup.Item>
                            <ListGroup.Item
                                style={priceWrapStyle}
                                className="fw-bold text-center"
                            >
                                KITCHEN
                            </ListGroup.Item>
                            <ListGroup.Item
                                style={priceWrapStyle}
                                className="fw-bold text-center"
                            >
                                МАРЖА
                            </ListGroup.Item>
                        </ListGroup>
                        {cardValue.map((item: any) =>
                            dbData
                                .filter((product) => {
                                    if (product.id === item) {
                                        return product;
                                    }
                                    return "";
                                })
                                .map((product, index) => (
                                    <CardItem product={product} key={index} />
                                ))
                        )}
                    </ListGroup>
                </Container>
            </div>
        </>
    );
}

export default CardPage;
