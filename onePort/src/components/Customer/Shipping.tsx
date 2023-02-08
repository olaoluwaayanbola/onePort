import ShippingStyles from "./Shipping.module.scss";
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Table } from "../../Table";

const Shipping = () => {
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
                        <button>
                            Add New Shipments
                            <KeyboardArrowDownIcon />
                        </button>
                        <button>
                            Shipment Type
                            <KeyboardArrowDownIcon />
                        </button>
                        <button>
                            Shipment Date
                            <KeyboardArrowDownIcon />
                        </button>
                    </div>
                    <div className={ShippingStyles.inputContainer}>
                        <div className={ShippingStyles.SearchBarWrapper}>
                            <SearchIcon />
                            <input type="text" placeholder="Search by shipment ID, Destination" />
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