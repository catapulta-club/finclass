import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background.main};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
