import React from "react";

import "../../../styles/CMSmenu.scss";

const CMSmenu = () => {
  return (
    <nav className="NavigationBar">
      <h1>
        sports-portal<span>CMS</span>
      </h1>
      <ul>
        <li>
          <a>Content</a>
        </li>
        <li>
          <a>Media</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
      </ul>
      <div className="NavigationBar__auth">
        <button>Profile</button>
        <button>Log out</button>
      </div>
    </nav>
  );
};

export default CMSmenu;
