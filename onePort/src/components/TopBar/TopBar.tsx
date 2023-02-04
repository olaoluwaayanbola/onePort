import TopBarStyles from "./TopBar.module.scss"
import { NotificationsNoneOutlined } from '@mui/icons-material';



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
          6
          </span>
        </div>
        <div className={TopBarStyles.UserDetails}>
          <div className={TopBarStyles.userIcon}>

          </div>
          <div className={TopBarStyles.userName}>
              james
          </div>
          <div className={TopBarStyles.DropDown}>
              ^
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar