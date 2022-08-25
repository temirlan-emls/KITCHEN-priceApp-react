import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./pages/productsPage";
import myData from "./data/mydata.json";

function App() {
    const [searchData, setSeachData] = useState("");
    const searchValue = searchData;

    const [categoryData, setCategoryData] = useState(['clear', 'clear']);
    const categoryValue = categoryData

    
    const dbData = myData;
    return (
        <>
            <Header setSeachData={setSeachData} setCategoryData={setCategoryData}></Header>

            <Routes>
                <Route
                    path="/kitchen-price-app"
                    element={
                        <ProductPage
                            categoryValue={categoryValue}
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
