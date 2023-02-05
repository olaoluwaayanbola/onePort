import { dummydata } from "./data/data";
import { UseContext } from "./context/context";
import { useNavigate } from "react-router-dom";
import TableStyles from "./styles/Table.module.scss";
export const Table = () => {
    const navigate = useNavigate()
    const { setControlTable } = UseContext()
    return (
        <>
            <table className={TableStyles.Container}>
                <thead>
                    <tr>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL ADDRESS</th>
                        <th>PHONE NUMEBR</th>
                        <th>LAST LOGIN</th>
                    </tr>
                </thead>
                <tbody>
                    {dummydata.map((row, index) => (
                        <tr key={index}>
                            <td className={TableStyles.ProfileIconBox}>
                                <div className={TableStyles.ProfileIconImg}>
                                    <img />
                                </div>
                                <div>{row.firstName}</div>
                            </td>
                            <td >{row.lastName}jjnjnjnj</td>
                            <td >{row.email}</td>
                            <td >{row.email}</td>
                            <td >{row.email}</td>
                            <td className={TableStyles.ButtonBox}>
                                <div className={TableStyles.btn}>
                                    <button onClick={() => {
                                        navigate("shipping")
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
