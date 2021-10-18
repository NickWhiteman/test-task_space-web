import { useEffect, useState } from 'react';
import { url } from '../../const';
import './style/style.css';

export const Dashboard = () => {
  const [responce, setResponce] = useState({});
  let getXML = new XMLHttpRequest();
    getXML.open('GET', url);
    getXML.send();
    getXML.onload(() => {if (getXML.status === 200) console.log(getXML.responce) });

  useEffect(() => {

  }, []);
  
  return (
    <div className="dashboard-container__dashboard">
      <div className="dashboard__page-name">БОРТОВОЙ ЖУРНАЛ</div>
      <h3 className="dashboard__header">БОРТОВОЙ ЖУРНАЛ</h3>
      <div className="content">
        {
          
        }
      </div>
    </div>
  )
};