import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./pages/productsPage";
import myData from "./data/mydata.json";
import CategoryPage from "./pages/categoryPage";

function App() {
    const [searchData, setSeachData] = useState("");
    const searchValue = searchData;

    const dbData = myData;
    return (
        <>
            <Header setSeachData={setSeachData}></Header>

            <Routes>
                <Route
                    path="/product"
                    element={<CategoryPage dbData={dbData} />}
                />

                <Route
                    path="/"
                    element={
                        <ProductPage
                            searchValue={searchValue}
                            dbData={dbData}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
