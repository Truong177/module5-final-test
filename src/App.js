
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductCreate from "./component/ProductCreate";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/create" element={<ProductCreate/>}/>
                <Route path="/product" element={<ProductList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
