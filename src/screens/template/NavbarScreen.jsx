import React from 'react'
import styled from 'styled-components'


export default (props) => (
    <NavWrapper className="navbar navbar-expand-lg navbar-dark px-sm-5 mr-auto ">
        <ul className="navbar-nav ">
            <li className="nav-link">
                
            </li>
            <li className="nav-link">
                
            </li>
            <li className="nav-link">
                    Ínicio
            </li>
            <li className="nav-link">
            Contato
            </li>    
            <li className="nav-link">
            Loja
            </li>
            <li className="nav-link">
            Pólitica de troca e devoluções
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
        margin-left: 30px;
        list-style-type:none;
        &:hover{
            border-top: .05rem solid purple;
            border-bottom: .05rem solid purple;
            
        }
    }
   
`; 