import { Props } from "styled-components/native";
import styled from "styled-components/native";

export const Container = styled.View<Props>`
  background-color: ${({ theme, isActive }) =>
    !isActive ? theme.colors.placeholder.main : theme.colors.background.onMain};
  height: 6px;
  border-radius: 3px;
  margin: 0 2.5px;
`;
