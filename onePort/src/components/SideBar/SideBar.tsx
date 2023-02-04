import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import { Links_Path } from "../../Pages/Pages"
import { LinkTypes } from "../../Pages/Pages"
import SideBarStyle from "./SideBar.module.scss"
const SideBar = () => {
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
              <Link
                to={LinkItems.path}
                className={SideBarStyle.LinkItems}
              >
                <div className={SideBarStyle.SideBarIcon}>
                  <div className={SideBarStyle.ImageBox}>
                    <img src={LinkItems.logo} />
                  </div>
                </div>
                <div className={SideBarStyle.NameStyling}>
                  {LinkItems.name}
                </div>
              </Link>
            </div>
          ))
        }
      </nav>
    </div>
  )
}

export default SideBar