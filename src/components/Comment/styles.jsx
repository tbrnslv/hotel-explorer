import styled from "styled-components";

import {
  Typography,
  Avatar as MuiAvatar,
  Divider as MuiDivider
} from "@material-ui/core";

export const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing(2)}px;
  padding-right: ${props => props.theme.spacing(4)}px;
  @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
    padding-right: 0;
  }
`;

export const Avatar = styled(MuiAvatar)`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.common.white};
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FullName = styled(Typography)`
  margin: ${props => props.theme.spacing(2)}px;
`;

export const CommentBody = styled(Typography)`
  margin: ${props => props.theme.spacing(2)}px 0;
`;

export const Date = styled(Typography)`
  text-align: right;
  padding-right: ${props => props.theme.spacing(4)}px;
  @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
    padding-right: 0;
  }
`;

export const Divider = styled(MuiDivider)``;
