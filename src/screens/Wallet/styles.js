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

export const Info = styled.Text`
color:#fff;
font-size:12px;
font-weight:bold;

`;

export const Actions = styled.View`
flex-direction:row;
margin-top:40px;

`;

export const Action = styled.TouchableOpacity`
flex-direction:row;
align-items:center;
border: 1px solid rgba(255, 255,255,0.6);
width:150px;
height:50px;
border-radius:15px;
justify-content:center;
margin: 0 8px;

`;

export const ActionLabel = styled.Text`
color:#fff;
font-size:16px;
marginLeft: 10px;

`;




