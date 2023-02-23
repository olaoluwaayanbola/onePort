import { Table } from "../../Table";
import ShippingStyles from "./Shipping.module.scss";
import SearchIcon from '@mui/icons-material/Search';
import { TableHeaderShipment } from "../../data/data";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { dataFetching } from "../../data/data";
import { useState } from "react"

const Shipping = () => {
    const [ActiveButton, setActiveButton] = useState<any>("")
    const [ShipmentType, setShipmentType] = useState<any>(false)

    const { data } = dataFetching("https://demo3522726.mockable.io/get_single_customer_shipments/123456789")
    const importValues: object[] = []
    const exportValues: object[] = []
    const ShipmentTypeData = () => {
        data?.map((ele: any) => {
            if (ele.shipping_type === "import") {
                importValues.push(ele)
            } else {
                exportValues.push(ele)
            }
        })
    }
    const [dataRender, setDataRender] = useState<object[]>([])
    ShipmentTypeData()
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
                                    setShipmentType((prev: any) => !prev)
                                    setActiveButton("Shipment Type")
                                }
                            }
                            className={ActiveButton === "Shipment Type" ? ShippingStyles.active : ShippingStyles.notactive}
                        >
                            Shipment Type
                            <KeyboardArrowDownIcon />
                        </button>
                        {
                            ShipmentType &&
                            <div className={ShippingStyles.shipmentType}>
                                <span
                                    onClick={() => {
                                        setDataRender(importValues)
                                    }}
                                >Import</span>
                                <span
                                    onClick={() => {
                                        setDataRender(exportValues)
                                    }}
                                >Export</span>
                            </div>
                        }
                        <button
                            onClick={
                                () => {
                                    setActiveButton("Shipment_Date")
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
                    <Table ShippingData={dataRender} TableHead={TableHeaderShipment} />
                </div>
            </div>
        </>
    )
}

export default Shipping