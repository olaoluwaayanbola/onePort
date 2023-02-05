import Logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom"
import { LinkTypes } from "../../Pages/Pages"
import { Links_Path } from "../../Pages/Pages"
import SideBarStyle from "./SideBar.module.scss"
const SideBar = () => {
  const activeStyle = {
    color: "black"
  }
  return (
    <div className={SideBarStyle.Container}>
      <div className={SideBarStyle.LogoBox}>
        <img
          src={Logo}
          className={SideBarStyle.LogoStyle}
          alt="onePortLogo"
        />
      </div>
      <nav>
        {
          Links_Path.map((LinkItems: LinkTypes): any => (
            <div
              className={SideBarStyle.LinkBox}
              key={LinkItems.name}
            >
              <NavLink
                to={LinkItems.path}
                id={SideBarStyle.LinkItems}
                className={({ isActive }) =>
                  isActive ? SideBarStyle.isActive : undefined
                }
              >
                <div className={SideBarStyle.SideBarIcon}>
                  <div className={SideBarStyle.ImageBox}>
                    <img src={LinkItems.logo} />
                  </div>
                </div>
                <div className={SideBarStyle.NameStyling}>
                  {LinkItems.name}
                </div>
              </NavLink>
            </div>
          ))
        }
      </nav>
    </div>
  )
}

export default SideBar