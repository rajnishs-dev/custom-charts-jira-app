import ChartForm from "../components/ChartForm";
import CustomHeader from "../components/CustomHeader";
import DynamicTabs from "../components/DynamicTabs";
import FieldBuilderSection from "../components/FieldBuilderSection";

export default function SimpleSearch() {
  return (
    <>
      <CustomHeader title="Custom Charts Simple Search" />
      <ChartForm />
      <DynamicTabs />
      <FieldBuilderSection />
    </>
  );
}
