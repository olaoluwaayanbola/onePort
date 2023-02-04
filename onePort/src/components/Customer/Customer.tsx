import { dummydata } from "../../data";
import customerStyles from "./Customer.module.scss";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const Customer = () => {
    return (
        <div className={customerStyles.Container}>
            <div className={customerStyles.AddCustomerContainer}>
                <button className={customerStyles.AddCustomer}>
                    Add Customer
                    <AddOutlinedIcon/>
                </button>
            </div>
            <Table />
        </div>
    )
}
const Table = () => (
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Last Login</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {dummydata.map((row, index) => (
                <tr key={index}>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                    <td>{row.email}</td>
                    <td>{row.phoneNumber}</td>
                    <td>{row.lastLogin}</td>
                    <td>
                        <button>Shipments</button>
                        <button>Edits</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);
export default Customer