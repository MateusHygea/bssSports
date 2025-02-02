import styled from "styled-components/native";

export const TabArea = styled.View`
  height: 70px;
  background-color: #FFFFFF;
  flex-direction: row;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-left: 50px;
  padding-right: 50px;

  shadowColor: "#000";
  shadowOffset: {
    width: 0;
    height: 2.
  },
  shadowOpacity: 0.25;
  shadowRadius: 3.84;
`;
export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled.Image``