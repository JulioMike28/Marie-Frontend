import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default (props) => (
    <NavWrapper className="navbar navbar-expand-lg navbar-dark px-sm-5 mr-auto ">
        <ul className="navbar-nav ">
            <li className="nav-link">
                
            </li>
            <li className="nav-link">
                
            </li>
            <li>
                <Link to="/" className="nav-link">
                    Ínicio
                </Link>
            </li>
            <li>
                <Link to="/contato" className="nav-link">
                    Contato
                </Link>
            </li>    
            <li>
                <Link to="/loja" className="nav-link">
                    Loja
                </Link>
            </li>
            <li>
                <Link to="/politica" className="nav-link">
                    Pólitica de troca e devoluções
                </Link>
            </li>
            <li>
                <div className="searchbar">
                    <input className="search_input" type="text" name="" placeholder="O que você deseja?"></input>
                    <span className="search_icon"><i className="fas fa-search"></i></span>

                </div>
            </li>
        </ul>
    
    </NavWrapper>
)

const NavWrapper = styled.nav`
    background: #ffb6c1;
    display: flex;
    flex-direction: row;
    color: purple;
    font-size:20px;
    margin-letf:10%;
    .nav-link{
        display: inline;
        color:purple !important;
        font-size:1.0rem;
        text-transform: capitalize;
        transition:all 0.5s ease-in-out;
        padding: 0.2rem 0.5rem;
        cursor:pointer;
        background: transparent;
        margin-left: 50px;
        list-style-type:none;
        &:hover{
            background-color: white;
            border-radius: 10px;
        }
    }
   
`; 