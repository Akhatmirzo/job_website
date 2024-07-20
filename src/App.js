import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddCompany from "./pages/AddCompany";
import AddJob from "./pages/AddJob";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import MainLayouts from "./layout/MainLayouts";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/add">
            <Route path="company" element={<AddCompany />} />
            <Route path="job" element={<AddJob />} />
          </Route>
          <Route path="/companies">
            <Route index element={<Companies />} />
            <Route path=":id" element={<CompanyDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<br />} />
      </Routes>
    </div>
  );
}

export default App;
