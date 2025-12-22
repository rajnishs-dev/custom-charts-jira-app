import { BarChart3, LoaderCircle, CirclePlus, RefreshCcwDot, Lightbulb, LayoutPanelLeft } from "lucide-react";
import ChartOptionCard from "./ChartOptionCard";
import ChartPopupHeader from "./ChartPopupHeader";
import InfoCard from "./InfoCard";

export default function ChartPopupJira() {
  return (
      <div className="p-4">

        <ChartPopupHeader
          icon={BarChart3}
          title="Custom Charts for Jira"
          subtitle="Choose from our template library or create a new chart"
        />

        <div className="flex flex-wrap max-w-7xl mx-auto">
          <div className="flex flex-col justify-between space-y-4 p-4 w-full md:w-1/2">

            <ChartOptionCard
              icon={LoaderCircle}
              title="Use Existing Template"
              subtitle="See examples & pick from our library of templates"
            />

            <ChartOptionCard
              icon={CirclePlus}
              title="Create new Chart"
              subtitle="Configure all settings for a truly custom chart"
            />

            <ChartOptionCard
              icon={RefreshCcwDot}
              title="Import gadget configuration"
              subtitle="Configure all settings for a truly custom gadget"
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

            <h3 className="text-xl font-semibold text-black mt-4 mb-2">
              Take a Guided tour
            </h3>

            <ChartOptionCard
              icon={LayoutPanelLeft}
              title="Learn how to use Custom Charts"
              subtitle="Unsure what to do? Take this tour and we can help show you"
            />
          </div>
        </div>
      </div>
  );
}
