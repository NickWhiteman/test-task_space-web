import { bellIcon } from "../../icons/icons";

export const DashboardHeaderButtons = () => {
  return (
    <div className="head-buttons__inform-panel">
      <div className="inform-panel__balance">
        <span>100.00 ₽</span>
      </div>
      <div className="inform-panel__bell-icon">
        {bellIcon}
      </div>
      <div className="inform-panel__client-name">
        <span>vikavishny</span>
      </div>
      <div className="inform-panel__exit">
        Выйти
      </div>
    </div>
  )
};