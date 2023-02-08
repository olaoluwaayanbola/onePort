import { Table } from "../../Table";
import { Outlet } from "react-router-dom";
import { UseContext } from "../../context/context";
import customerStyles from "./Customer.module.scss";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { dataFetching } from "../../data/data";

const Customer = () => {
    const { controlTable } = UseContext()
    const { data } = dataFetching("https://demo3522726.mockable.io/get_customers")
    console.log(controlTable)
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
                    <Table data={data} />
                </>
            }
            <Outlet />
        </div>
    )
}

export default Customer