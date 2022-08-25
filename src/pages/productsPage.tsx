import React from "react";
import { Container } from "react-bootstrap";
import Product from "../components/Product";
import { IProduct } from "../models/product.model";

interface IProductPage {
    dbData: IProduct[];
    searchValue: string;
    categoryValue: string[];
}

function ProductPage({ dbData, searchValue, categoryValue }: IProductPage) {

    return (
        <>
            <Container className="d-flex flex-wrap justify-content-around">
                {(searchValue === "" &&
                categoryValue[0] === "clear" &&
                categoryValue[1] === "clear"
                    ? dbData.slice(0, 50)
                    : dbData
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
                        if (
                            product.sourceSite === categoryValue[0] &&
                            product.catergory === categoryValue[1]
                        ) {
                            return product;
                        } else if (
                            categoryValue[0] === "allprod" &&
                            categoryValue[1] === "allprod"
                        ) {
                            return product;
                        } else if (
                            categoryValue[0] === "clear" &&
                            categoryValue[1] === "clear"
                        ) {
                            return product;
                        } else if (
                            product.catergory === categoryValue[1] &&
                            categoryValue[1] === "teplo" &&
                            categoryValue[0] === ""
                        ) {
                            return product;
                        } else if (
                            product.catergory === categoryValue[1] &&
                            categoryValue[1] === "holod" &&
                            categoryValue[0] === ""
                        ) {
                            return product;
                        } else if (
                            product.catergory === categoryValue[1] &&
                            categoryValue[1] === "neitral" &&
                            categoryValue[0] === ""
                        ) {
                            return product;
                        } else if (
                            product.catergory === categoryValue[1] &&
                            categoryValue[1] === "elecmeh" &&
                            categoryValue[0] === ""
                        ) {
                            return product;
                        }
                        return "";
                    })
                    .map((product, index) => (
                        <Product product={product} key={index} />
                    ))}
            </Container>
        </>
    );
}

export default ProductPage;
