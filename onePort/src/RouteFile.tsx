import { Routes, Route } from "react-router-dom";
import Customer from "./components/Customer/Customer";
import Shipping from "./components/Customer/Shipping";

const DashRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/customer" element={<Customer />} >
                    <Route path="shipping" element={<Shipping />} />
                </Route>
            </Routes>
        </>
    )
}

export default DashRoutes