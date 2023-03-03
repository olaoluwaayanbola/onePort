import './App.css';
import DashRoutes from './RouteFile';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

function Layout() {
  return (
    <div className="App">
      <div className="left">
        <SideBar />
      </div>
      <div className="right">
        <div>
          <TopBar />
        </div>
        <main>
          <DashRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
