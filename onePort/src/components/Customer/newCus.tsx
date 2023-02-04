import { Table } from "../../Table";
import customerStyles from "./Customer.module.scss";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const NewCustomer = () => {
    return (
        <>
            <div className={customerStyles.AddCustomerContainer}>
                <button className={customerStyles.AddCustomer}>
                    Add Customer
                    <AddOutlinedIcon />
                </button>
            </div>
            <Table />
        </>
    )
}

export default NewCustomer