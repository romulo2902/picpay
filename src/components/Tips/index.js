import React from 'react';
import { Container, Option, Title, Img } from './styles';


import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [

    {

        key:String(Math.random()),
        img: img8,
        title:''

    },

];



export default function Tips() {
    return (

        <Container>
            <Option bgcolor="#172c4a">

                <Title>Pague suas contas sem sair de casa</Title>

                <Img source={img8} />

            </Option>

            




        </Container>

    );
}