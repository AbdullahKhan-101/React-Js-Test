import "./App.css";
import Navbar from "./components/dashboard/Navbar";
import Sidebar from "./components/dashboard/Sidebar";
import { useStateContext } from "./context/StateContext";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  const { menu } = useStateContext();

  return (
    <div className="flex overflow-hidden min-h-screen ">
      <Sidebar />
      <div
        className={`flex-1 transition overflow-y-auto bg-light_bg dark:bg-dark_bg dark:text-white ${
          menu && "xl:ml-[300px]"
        } `}
      >
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
