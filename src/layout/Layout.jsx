import React from "react";

import AppBar from "../components/AppBar";

import { useSelector, useDispatch } from "react-redux";
import { getUiSelector } from "../selectors/ui";
import { setUiMode } from "../actions/ui";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const uiMode = useSelector(getUiSelector).mode;

  const onChangeMode = () => {
    if (uiMode === "light") {
      dispatch(setUiMode("dark"));
    } else {
      dispatch(setUiMode("light"));
    }
  };

  return (
    <div>
      <nav>
        <AppBar
          title="Hotel Explorer"
          mode={uiMode}
          onChangeMode={onChangeMode}
        />
      </nav>
      {children}
    </div>
  );
};

export default Layout;
