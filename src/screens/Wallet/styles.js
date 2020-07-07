import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex:1;

`;


export const Header = styled(LinearGradient)`
  height: 300px;

`;


export const HeaderContainer = styled.SafeAreaView`
  flex:1;
  align-items:center;
  justify-content:center;
`;

export const Tittle = styled.Text`
color:#fff;
font-size:16px;
font-weight:bold;

`;

export const BalanceContainer = styled.View`
margin: 5px 0px;
flex-direction:row;
align-items:center;

`;

export const Value = styled.Text`
font-size:38px;
color:#fff;
font-weight:200;
`;
export const Bold = styled.Text`
font-weight:bold;
`;

export const EyeButton = styled.TouchableOpacity`
margin-left: -2px; 


`;