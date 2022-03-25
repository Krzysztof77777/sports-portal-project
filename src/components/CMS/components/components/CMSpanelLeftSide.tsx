import React from "react";

import ContentPanel from "./ContentPanel";
import SettingsPanel from "./SettingsPanel";

const CMSpanelLeftSide = () => {
  return (
    <div className="panel__leftside">
      {/* <ContentPanel></ContentPanel> */}
      <SettingsPanel></SettingsPanel>
    </div>
  );
};

export default CMSpanelLeftSide;
