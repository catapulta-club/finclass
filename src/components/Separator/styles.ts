import styled from "styled-components/native";
import { ContainerProps } from "./types";

export const Container = styled.View<ContainerProps>`
    height: ${({h})=>h}px;
    width: ${({w})=>w}px;
`;