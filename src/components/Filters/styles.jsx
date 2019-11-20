import styled from "styled-components";

import {
  Button as MuiButton,
  FormControl as MuiFormControl,
  Select as MuiSelect,
  InputLabel as MuiInputLabel,
  MenuItem as MuiMenuItem,
  TextField as MuiTextField
} from "@material-ui/core";

import { Search as SearchIcon, Delete as DeleteIcon } from "@material-ui/icons";

export const Button = styled(MuiButton)`
  margin: ${props => props.theme.spacing(1)}px
    ${props => props.theme.spacing(2)}px;
`;

export const FormControl = styled(MuiFormControl)`
  margin: ${props => props.theme.spacing(1)}px
    ${props => props.theme.spacing(2)}px;
  width: 150px;
  @media (max-width: ${props => props.theme.breakpoints.values["sm"]}px) {
    width: 100%;
  }
`;

export const TextField = styled(MuiTextField)`
  margin: ${props => props.theme.spacing(1)}px
    ${props => props.theme.spacing(2)}px;
  width: 150px;
  @media (max-width: ${props => props.theme.breakpoints.values["sm"]}px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.paper};
  padding: ${props => props.theme.spacing(2)}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: ${props => props.theme.breakpoints.values["lg"]}px) {
    justify-content: center;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Select = styled(MuiSelect)``;

export const InputLabel = styled(MuiInputLabel)``;

export const MenuItem = styled(MuiMenuItem)``;

export const Search = styled(SearchIcon)``;

export const Delete = styled(DeleteIcon)``;
