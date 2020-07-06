import React from 'react';

import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'


import { Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    Avatar, 
    Description, 
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,

} from './styles';

import avatar from '../../images/avatar.png';


export default function Activities() {
    return (
        <Container>

            <Header>
                <Title> Atividades</Title>

            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@RomuloValadares </Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Romulo Valadares</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 50,00</Value>
                        <Divider />

                    <Feather name="lock" color="#FFF" size={14}/>
                    <Date> há 1 Semana </Date>

                       
                    </Details>

                    <Actions>
                        <Option>

                                <MaterialCommunityIcons name="comment-outline" color="#FFF" size={14} />
                                <OptionLabel>2</OptionLabel>

                        </Option>

                        <Option>

                                <AntDesign name="hearto" color="#FFF" size={14} />
                                <OptionLabel>4</OptionLabel>

                        </Option>


                    </Actions>


                </CardFooter>

            </Card>


        </Container>



    );
}