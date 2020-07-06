import React from 'react';


import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Container, Header, BalanceContatiner, BalanceTitle, Balance } from './styles'

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';


export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={22} color="#10c86e" />

          <BalanceContatiner>
            <BalanceTitle> Meu Saldo </BalanceTitle>
            <Balance> R$ 0,00  </Balance>
          </BalanceContatiner>

          <AntDesign name="gift" size={22} color="#10c86e" />
        </Header>

        <Suggestions />

        <Activities />

        <Tips />

        <Banner />


      </Container>
    </Wrapper>

  );
}