import React from "react";

import "../../../styles/CMSpanel.scss";

import CMSpanelLeftSide from "./components/CMSpanelLeftSide";
import CMSpanelRightSide from "./components/CMSpanelRightSide";

const CMSpanel = () => {
  return (
    <div className="panel">
      <CMSpanelLeftSide></CMSpanelLeftSide>
      <CMSpanelRightSide></CMSpanelRightSide>
    </div>
  );
};

export default CMSpanel;
