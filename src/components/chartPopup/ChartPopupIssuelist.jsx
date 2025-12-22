import { BarChart3, AlertTriangle , CirclePlus, Lightbulb, Download  } from "lucide-react";
import ChartOptionCard from "./ChartOptionCard";
import ChartPopupHeader from "./ChartPopupHeader";
import InfoCard from "./InfoCard";

export default function ChartPopupIssuelist() {
  return (
      <div className="p-4">

        <ChartPopupHeader
          icon={BarChart3}
          title="Custom Charts Issue List"
          subtitle="Connect Custom Charts and Issue List gadgets to filter your entire dashboard from Simple Search"
        />

        <div className="flex flex-wrap max-w-7xl mx-auto">
          <div className="flex flex-col justify-between space-y-4 p-4 w-full md:w-1/2">

            <ChartOptionCard
              icon={CirclePlus}
              title="Create New Issue List"
              subtitle="Jump straight in and create your Issue List"
              filled={true}
            />
            <div className="flex items-center gap-1 text-orange-500 text-sm">
            <AlertTriangle className="w-4 h-4" strokeWidth={2} />
            <span>Configure all settings for a truly custom gadget</span>
            </div>
            <ChartOptionCard
              icon={Download}
              title="Import gadget configuration"
            />
          </div>

          <div className="flex flex-col justify-between p-4 w-full md:w-1/2">

            <InfoCard
              icon={Lightbulb}
              title="Tutorial and Features"
              subtitle="Get the most out of Custom Charts"
              items={[
                "Use Simple Search to take your charts to the next level",
                "Learn how to customize your charts like a pro",
                "Check out our recommendations for common use cases",
              ]}
            />
          </div>
        </div>
      </div>
  );
}
