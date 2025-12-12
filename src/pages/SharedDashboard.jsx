import CustomHeader from "../components/CustomHeader";
import DashboardConfig from "../components/DashboardConfig";
import DashboardSettings from "../components/DashboardSettings";
import {
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
import SettingTabContent from "../components/SettingTabContent";
import SaveGadget from "../components/SaveGadget";
import { DescriptionsTabContent } from "../components/DescriptionTabContent";

export default function SharedDashboard() {
  const TAB_LIST = [
    { id: "settings", icon: BsGear, tooltip: "Setting" },
    { id: "monitor", icon: FaLaptopCode, tooltip: "Monitor View" },
    { id: "descriptions", icon: BsFileText, tooltip: "Descriptions" },
    { id: "import_export", icon: BsDownload, tooltip: "Import/Export" },
    { id: "help", icon: BsQuestionCircle, tooltip: "Help" },
  ];

  const TAB_CONTENTS = {
    settings: <SettingTabContent />,
    descriptions: <DescriptionsTabContent />,
    import_export: <ImportExportContent />,
    monitor: <PlaceholderContent tabName="Monitor View" />,
    help: <PlaceholderContent tabName="Help" />,
  };

  return (
    <>
      <CustomHeader title="Custom Charts Shared Dashboard" />
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3 md:pr-4">
          <DashboardConfig />
        </div>

        <div className="w-full md:w-1/3">
          <div className="my-4">
            <DashboardSettings tabs={TAB_LIST} contents={TAB_CONTENTS} />
          </div>
        </div>
      </div>
      <SaveGadget />
    </>
  );
}
