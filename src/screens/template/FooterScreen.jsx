import React from 'react'
import logofooter from '../../imagens/logo-footer.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default (props)=>(
    <FooterWrapper>
        <div className="row">
            {/*Sobre Empresa */}
            <div className="col-md-4">
                <img src={logofooter} alt="store" ></img>
                <p className="direita ">Criada especialmente, </p>
                <p>
                    Para renovar o guarda-roupa dos nossos amados clientes. Fazendo, com que, fiquem mais elegantes aonde forem. 
                </p> 
            </div>
            {/*Categorias */}
            <div className="col-md-2">
                <br></br>
                <h5> Categorias </h5>
                <ul>
                    <Item>
                        <Link to="/" >
                            Home
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/loja">
                            Loja
                        </Link>
                    </Item>
                </ul> 
            </div> 
            {/*Contato */}
            <div className="col-md-3">
            <br></br>
                <h5> Contato </h5>
                <p> <i className="fa fa-whatsapp"/> (84) 981173755</p>
                <p> <i className="fa fa-google"/> modamarie.08@gmail.com</p>
                <p><a href="https://www.instagram.com/modamarie_/?hl=pt-br" ><i className="fa fa-instagram"></i> @modamarie_</a></p>
                <p><a href="https://www.facebook.com/profile.php?id=100014645135601" ><i className="fa fa-facebook"></i> Marie Marie</a></p>
            </div>
            {/*Playlist */}
            <div className="col">
                <br></br>
                <h5>Playlist</h5>
                <hr></hr>
                <iframe src="https://open.spotify.com/embed/playlist/4edBW2ZGPYBlctogDntNXU" width="100%"  title="Playlist" frameBorder="0" allowtransparency="true" allow="encrypted-media" ></iframe>
            </div>   
        </div>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <div className="centro">
                <small> &copy; Direitos autorais 2020, Moda Marie - Carnaúba dos Dantas-RN </small><br></br> <small>Desenvolvido por julio.oliveira@ee.ufcg.edu.br</small></div>
                </div>
            <div className="col-md-4"></div>
        </div>
    </FooterWrapper>
    
)
const FooterWrapper = styled.div`
    background:#ffb6c1;
    text-align:justify;
    font-size:16px;
    color:purple;
    .direita{
        text-align:right;
    }
    .centro{
        text-align:center;
    }
    .cursiva{
        font-family:segoe script;
    }
`;

const Item = styled.li`

list-style-type:none;
font-size:16px;
&hover{
    cursor:pointer
};
`;
    