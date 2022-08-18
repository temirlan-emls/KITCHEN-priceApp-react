import * as React from "react";
import { Badge } from "react-bootstrap";
import { IProduct } from "../models/product.model";

interface IProductProps {
    product: IProduct;
}

const Category: React.FunctionComponent<IProductProps> = ({
    product,
}: IProductProps) => {


    return (
        <h3>
            <Badge bg="warning" text="dark">{product.subCategory}</Badge>
        </h3>
    );
};

export default Category;
