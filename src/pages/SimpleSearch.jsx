import ChartForm from "../components/ChartForm";
import CustomHeader from "../components/CustomHeader";
import DynamicTabs from "../components/DynamicTabs";
import FieldBuilderSection from "../components/FieldBuilderSection";
import DashboardSettings from "../components/DashboardSettings";
import {
  // FieldBuilderSection,
  DescriptionsContent,
  ImportExportContent,
  PlaceholderContent,
} from "../components/ContentComponents";
import { BsDownload } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import { FiFileText, FiMessageCircle } from "react-icons/fi";
import MainSearchPannel from "../components/MainSearchPannel";

export default function SimpleSearch() {
  const TAB_LIST = [
    { id: "settings", icon: MdSearch, tooltip: "Simple Search Fields" },
    { id: "monitor", icon: FiFileText, tooltip: "Monitor View" },
    { id: "descriptions", icon: FiMessageCircle, tooltip: "Descriptions" },
    { id: "import_export", icon: BsDownload, tooltip: "Import/Export" },
    // { id: "help", icon: BsQuestionCircle, tooltip: "Help" },
  ];

  const TAB_CONTENTS = {
    settings: <FieldBuilderSection />,
    descriptions: <DescriptionsContent />,
    import_export: <ImportExportContent />,
    monitor: <PlaceholderContent tabName="Monitor View" />,
    help: <PlaceholderContent tabName="Help" />,
  };

  return (
    <>
      <CustomHeader title="Custom Charts Simple Search" />
      <ChartForm />
      <DynamicTabs />
      <div className="flex px-4 pb-4">
        <MainSearchPannel />
        <div className="w-full md:w-3/10 mt-4 md:mt-0">
          <DashboardSettings tabs={TAB_LIST} contents={TAB_CONTENTS} />
        </div>
      </div>
    </>
  );
}
