import TopBarStyles from "./TopBar.module.scss"

const TopBar = () => {
  return (
    <div className={TopBarStyles.Container}>
      <div className={TopBarStyles.Page}>
        <span className={TopBarStyles.PageName}>
          Customer
        </span>
      </div>
      <div className={TopBarStyles.NotificationSection}>

      </div>
    </div>
  )
}

export default TopBar