import { Table } from "../../Table";
import { Outlet } from "react-router-dom";
import { UseContext } from "../../context/context";
import customerStyles from "./Customer.module.scss";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Customer = () => {
    const { controlTable, GetCustomerData } = UseContext()
    return (
        <div className={customerStyles.Container}>
            {
                controlTable &&
                <>
                    <div className={customerStyles.AddCustomerContainer}>
                        <button className={customerStyles.AddCustomer}>
                            Add Customer
                            <AddOutlinedIcon />
                        </button>
                    </div>
                    <Table />
                </>
            }
            <Outlet />
        </div>
    )
}

export default Customer