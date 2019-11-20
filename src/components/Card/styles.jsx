import React from "react";
import styled from "styled-components";

import {
  CardMedia as MuiCardMedia,
  Divider as MuiDivider,
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  Collapse as MuiCollapse,
  Typography,
  LinearProgress as MuiLinearProgress,
  CircularProgress as MuiCircularProgress,
  Button as MuiButton
} from "@material-ui/core";

import { ExpandMore } from "@material-ui/icons";

export const Card = styled(MuiCard)`
  max-width: 100%;
`;

export const CardMedia = styled(MuiCardMedia)`
  height: max-fit-content;
  width: 800px;
  @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
    width: 100%;
  }
`;

export const Button = styled(MuiButton)`
  padding-left: ${props => props.theme.spacing(2)}px;
  padding-right: ${props => props.theme.spacing(2)}px;
`;

export const ExpandIcon = styled(({ expanded, ...props }) => (
  <ExpandMore {...props} />
))`
  transform: rotate(0deg);
  margin-left: auto;
  transition: ${props =>
    props.theme.transitions.create("transform", {
      duration: props.theme.transitions.duration.shortest
    })};
  ${({ expanded }) => (expanded ? "transform: rotate(180deg)" : "")};
`;

export const UpperWrapper = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
    flex-direction: column;
  }
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardHeaderRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

export const CardContent = styled(MuiCardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0;
  width: 100%;
  &:last-child {
    padding-bottom: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
    width: auto;
  }
`;

export const Price = styled(props => (
  <Typography {...props} variant="subtitle1" color="secondary" component="p" />
))`
  @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
    text-align: center;
    padding-top: ${props => props.theme.spacing(2)}px;
  }
`;

export const DateCreated = styled(props => (
  <Typography {...props} variant="body2" color="textSecondary" component="p" />
))``;

export const Divider = styled(MuiDivider)``;

export const CardHeader = styled(MuiCardHeader)`
  padding: 0;
  .MuiCardHeader-title {
    text-transform: uppercase;
    @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
      text-align: center;
    }
  }
  .MuiCardHeader-subheader {
    @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
      text-align: center;
    }
  }
`;
export const CardActions = styled(MuiCardActions)`
  padding: ${props => props.theme.spacing(2)}px 0;
  display: flex;
  justify-content: space-between;
`;
export const Collapse = styled(MuiCollapse)``;
export const LinearProgress = styled(MuiLinearProgress)``;
export const CircularProgress = styled(MuiCircularProgress)``;

export const CommentsErrorWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing(4)}px;
`;
export const CommentsErrorText = styled(props => (
  <Typography {...props} variant="body1" color="textSecondary" component="p" />
))`
  margin: ${props => props.theme.spacing(2)}px 0;
`;

export const ImagesLoadingWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagesErrorWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImagesErrorText = styled(props => (
  <Typography {...props} variant="body1" color="textSecondary" component="p" />
))`
  margin: ${props => props.theme.spacing(2)}px 0;
`;

export const UserRatingText = styled(props => (
  <Typography {...props} variant="body1" color="textSecondary" component="p" />
))`
  padding: ${props => props.theme.spacing(2)}px 0 0 0;
`;

export const Description = styled(props => (
  <Typography {...props} variant="body2" color="textSecondary" component="p" />
))`
  padding: ${props => props.theme.spacing(2)}px 0 0 0;
`;
