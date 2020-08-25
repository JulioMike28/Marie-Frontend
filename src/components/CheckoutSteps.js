import React from 'react';

function CheckoutSteps(props) {
    return <div className="checkout-steps">
        <div className={props.step1 ? 'active' : ''}>Login</div>
        <div className={props.step2 ? 'active' : ''}>Informações sobre o Enredeço</div>
        <div className={props.step3 ? 'active' : ''}>Pagamento</div>
        <div className={props.step4 ? 'active' : ''}>Finalizar o Pedido</div>
    </div>
}

export default CheckoutSteps