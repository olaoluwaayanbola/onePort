import arrowUp from "./assets/arrowUp.png";
import arrowDown from "./assets/downArrow.png";
import { UseContext } from "./context/context";
import { useNavigate } from "react-router-dom";
import TableStyles from "./styles/Table.module.scss";
import Ellipse from "./assets/Ellipse.png"
import Line from "./assets/Line.png"
export const Table = ({ data, TableHead, ShippingData }: any) => {
    const navigate = useNavigate()
    const { setControlTable } = UseContext()
    return (
        <>
            <table className={TableStyles.Container}>
                <thead>
                    <tr>
                        {
                            TableHead.map((items: any) => (
                                <th key={items}>{items}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {data?.map((customers: any) => (
                        <tr key={customers.id}>
                            <td className={TableStyles.ProfileIconBox}>
                                <div className={TableStyles.ProfileIconImg}>
                                    <img src={customers.Avatar} alt="userimage" />
                                </div>
                                <div>{customers.first_name}</div>
                            </td>
                            <td >{customers.last_name}</td>
                            <td >{customers.email}</td>
                            <td >{customers.phone}</td>
                            <td >{customers.is_activE}</td>
                            <td className={TableStyles.ButtonBox}>
                                <div className={TableStyles.btn}>
                                    <button onClick={() => {
                                        navigate("Shipping")
                                        setControlTable(false)
                                    }} className={TableStyles.Shipments}>Shipments</button>
                                </div>
                                <div className={TableStyles.btn}>
                                    <button className={TableStyles.Edit}>Edit</button>
                                </div>
                            </td>
                        </tr>
                    ))}

                    {ShippingData?.map((customers: any) => (
                        <tr key={customers._id}>
                            <td className={TableStyles.ProfileIconBox}>
                                <div className={TableStyles.ProfileIconImg}>
                                    {customers.shipping_type == "export" ?
                                        <img src={arrowUp} alt="userimage" className={TableStyles.ArrowClass} /> :
                                        <img src={arrowDown} alt="userimage" className={TableStyles.ArrowClass} />
                                    }
                                </div>
                                <div className={TableStyles.titleShipmentType}>{customers.shipping_type.toUpperCase()}</div>
                            </td>
                            <td >{customers.local_government}</td>
                            <td className={TableStyles.arrowDesign}>
                                <img src={Ellipse} />
                                <img src={Line} />
                                <img src={Ellipse} />
                            </td>
                            <td >
                                <span>{customers.destination_port_country}</span>
                                <span></span>
                            </td>
                            <td >{customers.shipment_pickup_date.slice(0, 10)}</td>
                            <td >{customers._id.slice(0, 10)}</td>
                            <td className={TableStyles.ButtonBox}>
                                <div className={TableStyles.btn}>
                                    <button className={TableStyles.Edit}>View Details</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
