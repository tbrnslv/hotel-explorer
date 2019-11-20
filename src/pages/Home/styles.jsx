import styled from "styled-components";

import {
  CircularProgress as MuiCircularProgress,
  Typography as MuiTypography,
  Button as MuiButton
} from "@material-ui/core";

export const CardListWrapper = styled.div`
  padding: ${props => props.theme.spacing(4)}px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
    padding: ${props => props.theme.spacing(2)}px;
    padding-bottom: 0;
  }
`;

export const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-gap: ${props => props.theme.spacing(4)}px;
  grid-template-columns: none;
  @media (max-width: ${props => props.theme.breakpoints.values["md"]}px) {
    grid-gap: ${props => props.theme.spacing(2)}px;
  }
`;

export const CircularProgress = styled(MuiCircularProgress)``;

export const Button = styled(MuiButton)``;

export const LoadingWrapper = styled.div`
  position: fixed;
  left: calc(50% - 60px);
  top: calc(50% - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ErrorWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoadingText = styled(MuiTypography)`
  margin: ${props => props.theme.spacing(4)}px 0;
`;

export const ErrorText = styled(MuiTypography)`
  margin: ${props => props.theme.spacing(2)}px 0;
`;
