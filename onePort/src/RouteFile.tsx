import { Routes, Route, Outlet } from "react-router-dom";
import Customer from "./components/Customer/Customer";
import Shipping from "./components/Customer/Shipping";
import NewCustomer from "./components/Customer/NewCus";
const DashRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Customer />} >
                    <Route path="newCustomer" element={<NewCustomer />} />
                    <Route path="newCustomer/shipping" element={<Shipping />} />
                </Route>
            </Routes>
        </>
    )
}

export default DashRoutes