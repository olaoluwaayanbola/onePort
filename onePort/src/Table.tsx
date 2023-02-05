import { UseContext } from "./context/context";
import { useNavigate } from "react-router-dom";
import TableStyles from "./styles/Table.module.scss";
import { TableHeads } from "./data/data";
import { dataFetching } from "./data/data";
import { useEffect, useState } from "react";
import axios from "axios"
export const Table = () => {
    const { data } = dataFetching()

    const navigate = useNavigate()
    const { setControlTable, GetCustomerData } = UseContext()
    console.log(data)
    // return (
        // <>
        //     <table className={TableStyles.Container}>
        //         <thead>
        //             <tr>
        //                 {
        //                     TableHeads.map((items: any) => (
        //                         <th key={items}>{items}</th>
        //                     ))
        //                 }
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {GetCustomerData.map((customers: any) => (
        //                 <tr key={customers.id}>
        //                     <td className={TableStyles.ProfileIconBox}>
        //                         <div className={TableStyles.ProfileIconImg}>
        //                             <img src={customers.Avatar} alt="userimage" />
        //                         </div>
        //                         <div>{customers.first_name}</div>
        //                     </td>
        //                     <td >{customers.last_name}</td>
        //                     <td >{customers.email}</td>
        //                     <td >{customers.phone}</td>
        //                     <td >{customers.is_activ}</td>
        //                     <td className={TableStyles.ButtonBox}>
        //                         <div className={TableStyles.btn}>
        //                             <button onClick={() => {
        //                                 navigate("shipping")
        //                                 setControlTable(false)
        //                             }} className={TableStyles.Shipments}>Shipments</button>
        //                         </div>
        //                         <div className={TableStyles.btn}>
        //                             <button className={TableStyles.Edit}>Edit</button>
        //                         </div>
        //                     </td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </>
    // )
}
