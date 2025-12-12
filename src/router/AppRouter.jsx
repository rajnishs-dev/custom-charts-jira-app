import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SharedDashboard from "../pages/SharedDashboard";
import SimpleSearch from "../pages/SimpleSearch.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/simple-search" element={<SimpleSearch />} />
          <Route path="/shared-dashboard" element={<SharedDashboard />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRouter;
