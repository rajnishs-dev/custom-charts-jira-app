import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SharedDashboard from "../pages/SharedDashboard";
import SimpleSearch from "../pages/SimpleSearch.jsx";
import Home from "../pages/Home.jsx";
import ChartPopupJira from "../components/chartPopup/ChartPopupJira.jsx";
import ChartPopupIssuelist from "../components/chartPopup/ChartPopupIssuelist.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/simple-search" element={<SimpleSearch />} />
          <Route path="/shared-dashboard" element={<SharedDashboard />} />
          {/* <Route path="/chart-popup-jira" element={<ChartPopupJira />} />
          <Route path="/chart-popup-issue" element={<ChartPopupIssuelist />} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRouter;
