import ChartForm from "../components/ChartForm";
import CustomHeader from "../components/CustomHeader";
import DynamicTabs from "../components/DynamicTabs";
import FieldBuilderSection from "../components/FieldBuilderSection";
import DashboardSettings from "../components/DashboardSettings";
import { DescriptionsTabContent } from "../components/DescriptionTabContent";
import {
  ImportExportContent,
  PlaceholderContent,
} from "../components/ContentComponents";
import { BsFileText, BsDownload } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import MainSearchPannel from "../components/MainSearchPannel";
import SaveGadget from "../components/SaveGadget";
import { FiGrid } from "react-icons/fi";

export default function SimpleSearch() {
  const TAB_LIST = [
    { id: "settings", icon: MdSearch, tooltip: "Simple Search Fields" },
    { id: "monitor", icon: FiGrid, tooltip: "Display Option" },
    { id: "descriptions", icon: BsFileText, tooltip: "Descriptions" },
    { id: "import_export", icon: BsDownload, tooltip: "Import/Export" },
  ];

  const TAB_CONTENTS = {
    settings: <FieldBuilderSection />,
    descriptions: <DescriptionsTabContent />,
    import_export: <ImportExportContent />,
    monitor: <PlaceholderContent tabName="Monitor View" />,
    help: <PlaceholderContent tabName="Help" />,
  };

  return (
    <>
      <CustomHeader title="Custom Charts Simple Search" />
      <ChartForm />
      <DynamicTabs />
      <div className="flex flex-wrap pb-4">
        <div className="lg:w-7/10 md:w-1/2 md:pr-4">
          <MainSearchPannel />
        </div>
        <div className="w-full lg:w-3/10 md:w-1/2 mt-4 md:mt-0">
          <DashboardSettings tabs={TAB_LIST} contents={TAB_CONTENTS} />
        </div>
      </div>
      <SaveGadget />
    </>
  );
}
