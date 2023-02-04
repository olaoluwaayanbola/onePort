import { Routes, Route } from "react-router-dom";
import Customer from "./components/Customer/Customer";


const DashRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/customer" element={<Customer />}>
                    {/* <Route path = "/customer/table"></Route> */}
                </Route>
            </Routes>
        </>
    )
}

export default DashRoutes