import React from "react";

import {
  FixedSpacer,
  FormControlLabel,
  Root,
  StyledAppBar,
  Switch,
  Title,
  Toolbar
} from "./styles";

const AppBar = ({ title, mode, onChangeMode }) => {
  return (
    <Root>
      <StyledAppBar>
        <Toolbar>
          <Title variant="h6">{title}</Title>
          <FormControlLabel
            control={
              <Switch
                onChange={onChangeMode}
                value={mode === "dark" ? "true" : "false"}
              />
            }
            label="Dark Mode"
          />
        </Toolbar>
      </StyledAppBar>
      <FixedSpacer />
    </Root>
  );
};

export default AppBar;
