import { Dashboard } from './components/dashboard-component/Dashboard';
import { Footer } from './components/footer-component/Footer';
import { SideMenu } from './components/sideMenu-component/SideMenu';
import './style/style.css';

function App() {
  return (
    <div className='app'>
      <div className="app__page">
        <div className="app__left-panel">
          <SideMenu />
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
