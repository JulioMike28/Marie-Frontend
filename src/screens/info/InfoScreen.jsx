import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import entrega from '../../imagens/entrega.png'
import medida from '../../imagens/medida.png'
import compartilhar from '../../imagens/compartilhar.png'


export default (props) => (
    <InfoWrapper>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-4 ">
                    <img src={entrega} alt="entrega"/>
                    <h5>Entregamos para todo o Brasil</h5>
                </div>
                <div className="col-md-4 ">
                    <img src={medida} alt="medida"/>
                    <h5>Visite nossa tabela de <Link to="/medida">MEDIDAS</Link></h5>
                </div>
                <div className="col-md-4 " >
                    <img src={compartilhar} alt="compartilhar"/>
                    <h5>Que tal <Link to="/compartilhar">COMPARTILHAR</Link> nosso trabalho?</h5>
                </div>
            </div>
        </InfoWrapper>
)

const InfoWrapper = styled.div`
    text-align: center;
    .altura{
        height:200px;
    }
    font-size:14px;
    color: purple;

`;