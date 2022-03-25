import React from "react";

const SettingsPanel = () => {
  return (
    <div className="settingsPanel">
      <div className="settingsPanel__environment">
        <p>Środowisko</p>
        <a>Models</a>
        <a>Uprawnienia zawartości</a>
      </div>
      <div className="settingsPanel__permissions">
        <p>Roles</p>
        <a>Collaborators</a>
      </div>
    </div>
  );
};

export default SettingsPanel;
