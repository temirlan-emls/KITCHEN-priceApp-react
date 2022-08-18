import React from "react";
import {  Container } from "react-bootstrap";
import Product from "../components/Product";
import { IProduct } from "../models/product.model";

interface IProductPage {
    dbData: IProduct[];
    searchValue: string;
}

function ProductPage({ dbData, searchValue }: IProductPage) {
    return (
        <>
            <Container className="d-flex flex-wrap justify-content-around">
                {dbData
                    .filter((product) => {
                        if (searchValue === "") {
                            return product;
                        } else if (
                            product.title
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        ) {
                            return product;
                        }
                        return "";
                    })
                    .map((product) => (
                        <Product product={product} />
                    ))}
            </Container>
        </>
    );
}

export default ProductPage;
