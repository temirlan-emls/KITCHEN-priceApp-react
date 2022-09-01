import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import Product from "../components/Product";
import { IProduct } from "../models/product.model";

interface IProductPage {
    dbData: IProduct[];
    searchValue: string;
    categoryValue: string[];
    setCardValue: any;
}

function ProductPage({
    dbData,
    searchValue,
    categoryValue,
    setCardValue,
}: IProductPage) {
    const [sortValue, setSortValue] = useState("");
    const [prodValue, setProdValue] = useState(dbData);

    const handleSort = (str: string) => {
        setSortValue(str);
    };

    useEffect(() => {
        if (sortValue === "low") {
            setProdValue([...dbData].sort((a, b) => a.price - b.price));
        } else if (sortValue === "high") {
            setProdValue([...dbData].sort((a, b) => b.price - a.price));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortValue]);

    return (
        <>
            <Container className="d-flex flex-wrap justify-content-around mt-5 pt-5">
                {" "}
                <ButtonGroup aria-label="Basic example">
                    <Button
                        onClick={() => {
                            handleSort("high");
                        }}
                        variant={
                            sortValue === "high"
                                ? "warning fw-bold"
                                : "outline-warning fw-bold"
                        }
                        style={{ color: "black" }}
                        size="sm"
                    >
                        Дорогие
                    </Button>
                    <Button
                        onClick={() => handleSort("low")}
                        variant={
                            sortValue === "low"
                                ? "warning fw-bold"
                                : "outline-warning fw-bold"
                        }
                        style={{ color: "black" }}
                        size="sm"
                    >
                        Дешевые
                    </Button>
                </ButtonGroup>
            </Container>
            <Container className="d-flex flex-wrap justify-content-around">
                {(searchValue === "" && categoryValue[0] === "clear"
                    ? prodValue.slice(0, 52)
                    : prodValue
                )
                    .filter((product) => {
                        if (searchValue === "") {
                            return product;
                        } else if (
                            product.title
                                .toLowerCase()
                                .includes(searchValue.toLowerCase()) ||
                            product.prodCode
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        ) {
                            return product;
                        }
                        return "";
                    })
                    .filter((product) => {
                        if (product.sourceSite === categoryValue[0]) {
                            return product;
                        } else if (categoryValue[0] === "clear") {
                            return product;
                        } else if (categoryValue[0] === "allprod") {
                            return product;
                        }
                        // if (
                        //    product.sourceSite === categoryValue[0]
                        //    && product.sourceSite === categoryValue[1]
                        // ) {
                        //     return product;
                        // } else if (
                        //     categoryValue[0] === "allprod" &&
                        //     categoryValue[1] === "allprod"
                        // ) {
                        //     return product;
                        // } else if (
                        //     categoryValue[0] === "clear" &&
                        //     categoryValue[1] === "clear"
                        // ) {
                        //     return product;
                        // } else if (
                        //     product.catergory === categoryValue[1] &&
                        //     categoryValue[1] === "teplo" &&
                        //     categoryValue[0] === ""
                        // ) {
                        //     return product;
                        // } else if (
                        //     product.catergory === categoryValue[1] &&
                        //     categoryValue[1] === "holod" &&
                        //     categoryValue[0] === ""
                        // ) {
                        //     return product;
                        // } else if (
                        //     product.catergory === categoryValue[1] &&
                        //     categoryValue[1] === "neitral" &&
                        //     categoryValue[0] === ""
                        // ) {
                        //     return product;
                        // } else if (
                        //     product.catergory === categoryValue[1] &&
                        //     categoryValue[1] === "elecmeh" &&
                        //     categoryValue[0] === ""
                        // ) {
                        //     return product;
                        // }
                        return "";
                    })
                    .map((product, index) => (
                        <Product
                            product={product}
                            key={index}
                            setCardValue={setCardValue}
                        />
                    ))}
            </Container>
        </>
    );
}

export default ProductPage;
