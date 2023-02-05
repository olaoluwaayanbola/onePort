import TopBarStyles from "./TopBar.module.scss"
import ProfileIcon from "../../assets/ProfileIcon.png";
import { NotificationsNoneOutlined } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const TopBar = () => {
  return (
    <div className={TopBarStyles.Container}>
      <div className={TopBarStyles.Page}>
        <span className={TopBarStyles.PageName}>
          Customer
        </span>
      </div>
      <div className={TopBarStyles.NotificationSection}>
        <div className={TopBarStyles.NotificatIcon}>
          <span className={TopBarStyles.Icons}><NotificationsNoneOutlined /></span>
          <span className={TopBarStyles.Badge}>
            2
          </span>
        </div>
        <div className={TopBarStyles.UserDetails}>
          <div className={TopBarStyles.userIcon}>
            <img src={ProfileIcon} alt="Profileicon"/>
          </div>
          <div className={TopBarStyles.userName}>
            Temoc
          </div>
          <div className={TopBarStyles.DropDown}>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar