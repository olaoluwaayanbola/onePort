import { UseContext } from "./context/context";
import { useNavigate } from "react-router-dom";
import TableStyles from "./styles/Table.module.scss";

export const Table = ({ data, TableHead }: any) => {
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
                            <td >{customers.is_activ}</td>
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
                </tbody>
            </table>
        </>
    )
}
