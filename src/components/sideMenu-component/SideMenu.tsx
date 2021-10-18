import { SyntheticEvent } from "react";
import {
  accountIcon,
  domainIcon,
  helpIcon,
  logoSpaceWeb,
  vpsIcon
} from "../../icons/icons";
import { IMenuSettings } from "../../types";
import './style/style.css';

type SideMenuProps = {
  buttonsSetting: IMenuSettings
}

export const SideMenu: React.FC<SideMenuProps> = ({
  buttonsSetting
}) => {
  const renderButtonContent: JSX.Element[] = [];

  //  анонимная функция собирает верстку для рендера табов меню из обьекта настроек.
  
  (function() {
    for (let key in buttonsSetting) {
      renderButtonContent.push(
        <div key={`tab-${key}`} className="panel__tab">
          {buttonsSetting[key]}
          <span className='menu-tab'>{key}</span>
        </div>
      );
    }
  })();

  return (
    <>
      <div className="left-panel__menu">
        <div className="menu__header">
          <div className="menu__logo">
            {logoSpaceWeb}
          </div>
        </div>
        <div className="menu__panel">
          {
            renderButtonContent.map(item => item)
          }
        </div>
      </div>
    </>
  )
};