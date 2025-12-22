import { useState } from "react";
import { Link } from "react-router-dom";
import ChartPopupWrapper from "../components/chartPopup/ChartPopupWrapper";
import ChartPopupJira from "../components/chartPopup/ChartPopupJira";
import ChartPopupIssuelist from "../components/chartPopup/ChartPopupIssuelist";

export default function Home() {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <>
      <h1>Home page</h1>
      <Link className="text-blue-400" to="/shared-dashboard">
        Go to Shared Dashboard
      </Link>
      <br></br>
      <Link className="text-blue-400" to="/simple-search">
        Go to Simple Search
      </Link>
      <br></br>
      <button
        className="text-blue-400 cursor-pointer"
        onClick={() => setActivePopup("jira")}
      >
        Custom Chart Popup for Jira
      </button>

      <br />

      <button
        className="text-blue-400 cursor-pointer"
        onClick={() => setActivePopup("issueList")}
      >
        Custom Chart Popup Issue list
      </button>

      {activePopup && (
        <ChartPopupWrapper onClose={() => setActivePopup(null)}>
          {activePopup === "jira" && <ChartPopupJira />}
          {activePopup === "issueList" && <ChartPopupIssuelist />}
        </ChartPopupWrapper>
      )}
    </>
  );
}
