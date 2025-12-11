import CustomHeader from "../components/CustomHeader";
import DashboardConfig from "../components/DashboardConfig";
import DashboardSettings from "../components/DashboardSettings";

export default function SharedDashboard() {
  return (
    <>
      <CustomHeader title="Custom Charts Shared Dashboard" />
      <div className="flex ">
        <div className="w-full md:w-7/10 md:pr-4">
          <DashboardConfig />
        </div>
        <div className="w-full md:w-3/10 mt-4 md:mt-0">
          <DashboardSettings />
        </div>
      </div>
    </>
  );
}
