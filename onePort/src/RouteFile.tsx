import { Routes, Route, Outlet } from "react-router-dom";
import Customer from "./components/Customer/Customer";
import Shipping from "./components/Customer/Shipping";
import newCus from "./components/Customer/newCus";
const DashRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="customer" element={<Customer />} >
                    {/* <Route path="newCustomer" element={<newCus />} /> */}
                    <Route path="shipping" element={<Shipping />} />
                </Route>
            </Routes>
        </>
    )
}

export default DashRoutes