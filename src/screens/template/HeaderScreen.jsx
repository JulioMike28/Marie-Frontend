import React from 'react'
import logomarca from '../../imagens/logo-footer.png'

export default (props) => (
    <div className="header">
        <div className="image">
            <img src={logomarca} alt="store" className="navbar-brand" />
        </div>
        <div className="header-actions">
            <span className="">
                <i className="fa fa-user fa-1x"></i>
                Login
            </span>
        </div>
        <div className="header-actions">
            <span className="">
                <i className="fa fa-shopping-cart fa-1x"></i>
                Carrinho (0)
            </span>
        </div>
        
    </div>
)