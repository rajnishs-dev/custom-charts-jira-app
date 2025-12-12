import CustomHeader from "../components/CustomHeader";
import DashboardConfig from "../components/DashboardConfig";
import DashboardSettings from "../components/DashboardSettings";
import {
  SettingContent,
  DescriptionsContent,
  ImportExportContent,
  PlaceholderContent,
} from "../components/ContentComponents";
import {
  BsGear,
  BsFileText,
  BsDownload,
  BsQuestionCircle,
} from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import SharedDashboardAccordions from "../components/SharedDashboardAccordions";

export default function SharedDashboard() {
  const TAB_LIST = [
    { id: "settings", icon: BsGear, tooltip: "Setting" },
    { id: "monitor", icon: FaLaptopCode, tooltip: "Monitor View" },
    { id: "descriptions", icon: BsFileText, tooltip: "Descriptions" },
    { id: "import_export", icon: BsDownload, tooltip: "Import/Export" },
    { id: "help", icon: BsQuestionCircle, tooltip: "Help" },
  ];

  const TAB_CONTENTS = {
    settings: <SharedDashboardAccordions />,
    descriptions: <DescriptionsContent />,
    import_export: <ImportExportContent />,
    monitor: <PlaceholderContent tabName="Monitor View" />,
    help: <PlaceholderContent tabName="Help" />,
  };

  return (
    <>
      <CustomHeader title="Custom Charts Shared Dashboard" />
      <div className="flex ">
        <div className="w-full md:w-2/3 md:pr-4">
          <DashboardConfig />
        </div>

        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <DashboardSettings tabs={TAB_LIST} contents={TAB_CONTENTS} />
        </div>
      </div>
    </>
  );
}
