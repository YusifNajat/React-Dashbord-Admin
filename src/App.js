import Topbar from "./components/Topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar"
import './App.css'

function App() {
  return (
    <div className="App">
      <Topbar/>

        <div className="container">
          <Sidebar/>
          <div className="others">other pages</div>
          
        </div>
    </div>
  );
}

export default App;
