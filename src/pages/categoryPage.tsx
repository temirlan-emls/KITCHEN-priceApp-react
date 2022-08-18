import { Button, ButtonGroup, Container} from "react-bootstrap";

import { IProduct } from "../models/product.model";

interface ICategoryPage {
    dbData: IProduct[];
}

function CategoryPage({ dbData }: ICategoryPage) {
    return (
        <>
        </>
    );
}

export default CategoryPage;
