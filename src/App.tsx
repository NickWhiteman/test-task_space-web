import { Dashboard } from './components/dashboard-component/Dashboard';
import { DashboardHeaderButtons } from './components/dashboard-component/DashboardHeaderButtons';
import { Footer } from './components/footer-component/Footer';
import { SideMenu } from './components/sideMenu-component/SideMenu';
import { tabButtons } from './const';
import './style/style.css';

function App() {
  return (
    <div className='app'>
      <div className="app__page">
        <div className="app__left-panel">
          <SideMenu
            buttonsSetting={tabButtons} />
        </div>
        <div className="app__head-buttons">
          <DashboardHeaderButtons />
        </div>
        <div className="app__dashboard-container">
          <Dashboard />
        </div>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
