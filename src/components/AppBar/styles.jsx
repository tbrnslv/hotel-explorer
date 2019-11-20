import styled from "styled-components";

import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  Typography,
  FormControlLabel as MuiFormControllerLabel,
  Switch as MuiSwitch
} from "@material-ui/core";

export const Root = styled.div`
  flex-grow: 1;
`;

export const Title = styled(Typography)`
  flex-grow: 1;
`;

export const FixedSpacer = styled.div`
  display: none;
  ${props => props.theme.mixins.toolbar};
  @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
    display: block;
  }
`;

export const StyledAppBar = styled(MuiAppBar)`
  position: static;
  @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
    position: fixed;
  }
`;

export const Toolbar = styled(MuiToolbar)``;

export const FormControlLabel = styled(MuiFormControllerLabel)``;

export const Switch = styled(MuiSwitch)``;
