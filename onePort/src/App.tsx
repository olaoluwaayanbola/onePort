import './App.css'
import TopBar from './components/TopBar/TopBar';
import Customer from "./components/Customer/Customer";
import DashRoutes  from "./RouteFile"
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  )
}

function Layout() {
  return (
    <>
      <div className="SideBar">
        <SideBar />
      </div>
      <div className="TopBar">
        <div>
          <TopBar />
        </div>
        <main>
          <DashRoutes />
        </main>
      </div>
    </>
  )
}

export default App
