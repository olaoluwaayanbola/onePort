import ShippingStyles from "./Shipping.module.scss";
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Table } from "../../Table";
import { useState } from "react"
const Shipping = () => {
    const [ActiveButton, setActiveButton] = useState<any>("")

    return (
        <>
            <div className={ShippingStyles.Container}>
                <div className={ShippingStyles.BackArrow}>
                    <span className={ShippingStyles.ArrowBack}>
                        < ArrowBackIcon />
                    </span>
                </div>
                <div className={ShippingStyles.UserCard}>
                    <div className={ShippingStyles.ImgContainer}>
                        <img src="" alt="userImag" />
                    </div>
                    <div className={ShippingStyles.UsersInfo}>
                        <div className={ShippingStyles.UserDetails}>
                            <span className={ShippingStyles.UsersName}>
                                Banji oladapo
                            </span>
                            <span className={ShippingStyles.UserEmail}>
                                BanjiOladapo@gmail.com
                            </span>
                            <span className={ShippingStyles.UsersPhoneNumber}>
                                0905768767
                            </span>
                        </div>
                        <div className={ShippingStyles.EditButton}>
                            <button>Edit</button>
                        </div>
                    </div>
                </div>
                <div className={ShippingStyles.ButtonSearchBar}>
                    <div className={ShippingStyles.btnContainer}>
                        <button
                            onClick={
                                () => {
                                    setActiveButton("New_Shipment")
                                    console.log(ActiveButton)
                                }
                            }
                            className={ActiveButton === "New_Shipment" ? ShippingStyles.active : ShippingStyles.notactive}
                        >
                            Add New Shipments
                            <KeyboardArrowDownIcon />
                        </button>
                        <button
                            onClick={
                                () => {
                                    setActiveButton("Shipment Type")
                                    console.log(ActiveButton)
                                }
                            }
                            className={ActiveButton === "Shipment Type" ? ShippingStyles.active : ShippingStyles.notactive}
                        >
                            Shipment Type
                            <KeyboardArrowDownIcon />
                        </button>
                        <button
                            onClick={
                                () => {
                                    setActiveButton("Shipment_Date")
                                    console.log(ActiveButton)
                                }
                            }
                            className={ActiveButton === "Shipment_Date" ? ShippingStyles.active : ShippingStyles.notactive}
                        >
                            Shipment Date
                            <KeyboardArrowDownIcon />
                        </button>
                    </div>
                    <div className={ShippingStyles.inputContainer}>
                        <div className={ShippingStyles.SearchBarWrapper}>
                            <SearchIcon className={ShippingStyles.Icon} />
                            <input type="text" placeholder="Search by shipment ID,Destination" />
                        </div>
                    </div>
                </div>
                <div className={ShippingStyles.Table}>
                    <Table />
                </div>
            </div>
        </>
    )
}

export default Shipping