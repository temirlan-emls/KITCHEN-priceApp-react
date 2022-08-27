import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./pages/productsPage";
import CardPage from "./pages/cardsPage";
import myData from "./data/mydata.json";
import useLocalStorage from "./hooks/useLocalStrorage";

function App() {
    const navigate = useNavigate();

    const navigateToCardPage = () => {
        navigate("/cardPage");
    };

    const navigateMainPage = () => {
        navigate("/kitchen-price-app");
    };

    const [searchData, setSeachData] = useState("");
    const searchValue = searchData;

    const [categoryData, setCategoryData] = useState(["clear", "clear"]);
    const categoryValue = categoryData;

    const [cardValue, setCardValue] = useLocalStorage("cards", []);
    const dbData = myData;
    return (
        <>
            <Header
                cardValue={cardValue}
                setSeachData={setSeachData}
                setCategoryData={setCategoryData}
                navigateToCardPage={navigateToCardPage}
                navigateMainPage={navigateMainPage}
            ></Header>

            <Routes>
                <Route
                    path="/cardPage"
                    element={<CardPage dbData={dbData} cardValue={cardValue} />}
                />
                <Route
                    path="/kitchen-price-app"
                    element={
                        <ProductPage
                            setCardValue={setCardValue}
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
