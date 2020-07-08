import React, {useState} from 'react';

import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

import {Switch} from 'react-native';


import {
  Wrapper, 
  Header, 
  HeaderContainer, 
  Tittle, 
  BalanceContainer,
  Value, 
  Bold,
  EyeButton, 
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodstitle,
  CardBody,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,

} from './styles';

import creditCard from '../../images/credit-card.png';


export default function Wallet() {

  const [isVisible, setIsVisible] = useState(false);
  const [UseBalanceTeste, setUseBalance] = useState(false);

  function handleToggleVisibility() {
     setIsVisible( (prevState) =>  !prevState);
   }

   function handleToggleUsebalance() {
    setUseBalance( (prevState) =>  !prevState);
  }


  return (
      <Wrapper>
        <Header colors={['#52E78C' , '#1AB563']}>

      <HeaderContainer>
      <Tittle>Saldo PicPay</Tittle>

      <BalanceContainer> 
      <Value> R$ <Bold>0,00 </Bold>  </Value>

      <EyeButton > 
        
      <Feather name= "eye" size={28} color="#fff"   />  
        
      </EyeButton>
      </BalanceContainer>

      <Info> 
       Seu saldo está rendendo 100% do CDI
      </Info>


      <Actions>

      <Action>
      <MaterialCommunityIcons name="cash" size={28} color="#fff" /> 
      <ActionLabel>Adicionar</ActionLabel>
      </Action>

      <Action>
      <FontAwesome name="bank" size={20} color="#fff" /> 
      <ActionLabel>Retirar</ActionLabel>
      </Action>
      </Actions>

      </HeaderContainer>
        </Header>

        <UseBalance>
          <UseBalanceTitle>Usar saldo saldo ao pagar </UseBalanceTitle>


          <Switch 
          
          value={UseBalanceTeste}
          onValueChange={handleToggleUsebalance}
          
          />


        </UseBalance>



        <PaymentMethods>

        <PaymentMethodstitle>Formas de pagamento</PaymentMethodstitle>

        <Card>
          
        <CardBody>
        <CardDetails>
          
        <CardTitle> Cadastre seu cartão de crédito</CardTitle>
        <CardInfo>
          Cadastre seu cartão de crédito para poder fazer pagamentos mesmo qaundo não tiver saldo no seu PicPay
        </CardInfo>

          </CardDetails>

        <Img source={creditCard} resizeMode="contain" />

        </CardBody>

          <AddButton>

          <AntDesign name="pluscircleo" size={30} color="#0DB060"   />  
          <AddLabel>Adicionar cartão de crédito</AddLabel>

          </AddButton>

        </Card>

        {/* <UseTicketButton>

            <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>


        </UseTicketButton> */}


        </PaymentMethods>

      
      </Wrapper>


  );
}