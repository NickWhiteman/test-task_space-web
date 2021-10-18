import {
  accountIcon,
  domainIcon,
  helpIcon,
  logoSpaceWeb,
  vpsIcon
} from "../../icons/icons";
import './style/style.css';

export const SideMenu = () => {
  return (
    <>
      <div className="left-panel__menu">
        <div className="menu__header">
          <div className="menu__logo">
            {logoSpaceWeb}
          </div>
        </div>
        <div className="menu__panel">
          <div className="panel__tab">
            {accountIcon}
            <span className='menu-tab'>АККАУНТ</span>
          </div>
          <div className="panel__tab">
            {vpsIcon}
            <span className='menu-tab'>VSP</span>
          </div>
          <div className="panel__tab">
            {domainIcon}
            <span className='menu-tab'>ДОМЕНЫ</span>
          </div>
          <div className="panel__tab active">
            {helpIcon}
            <span className='menu-tab'>БОРТОВОЙ ЖУРНАЛ</span>
          </div>
        </div>
      </div>
    </>
  )
};