import { Table } from "../../Table";
import customerStyles from "./Customer.module.scss";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Outlet } from "react-router-dom";
const Customer = () => {
    return (
        <div className={customerStyles.Container}>
            <div className={customerStyles.AddCustomerContainer}>
                <button className={customerStyles.AddCustomer}>
                    Add Customer
                    <AddOutlinedIcon />
                </button>
            </div>
            <Table />
            <Outlet />
        </div>
    )
}

export default Customer