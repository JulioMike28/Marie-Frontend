import React from 'react'
import icon from '../../imagens/favicon.ico'

export default (props) => (
    <React.Fragment>
        <br></br>
            <center><h4 style={{color:"purple"}}>Contato <img src={icon} alt="icon" /></h4></center>
        <br></br>
        <div className="row">
            <div className="col-md-1"></div>
            <div style={{color:"purple"}} className="col-md-4 ">
                <h4>Moda Marie</h4>
                <h5>Rua: Cel. Quincó, 178A.</h5>
                <h5>Carnaúba dos Dantas, RN - 59374-000</h5>
            </div>
            <div className="col-md-3">
                <h5 style={{color:"purple"}}> <i className="fa fa-whatsapp"/> (84) 981173755</h5>
                <h5 style={{color:"purple"}}> <i className="fa fa-google"/> modamarie.08@gmail.com</h5>
                <h5><a href="https://www.instagram.com/modamarie_/?hl=pt-br" className="text-roxo"><i className="fa fa-instagram"></i> @modamarie_</a></h5>
                <h5><a href="https://www.facebook.com/profile.php?id=100014645135601" className="text-roxo"><i className="fa fa-facebook"></i> Marie Marie</a></h5>
            </div>
            <div className="col-md-3">
                <h4 style={{color:"purple"}}>Google maps</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.9317963621501!2d-36.59696017085309!3d-6.556083999703634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ae4abae67cdbe9%3A0xfb5f6aba4020d228!2sR.%20Cel.%20Quinco%2C%20122%20-%20Carnauba%20Dos%20Dantas%2C%20Carna%C3%BAba%20dos%20Dantas%20-%20RN%2C%2059374-000!5e0!3m2!1spt-BR!2sbr!4v1591034841680!5m2!1spt-BR!2sbr" title="playlist" style={{width:"600"},{height:"450"},{frameborder:"0"},{border:"0"},{allowfullscreen:""},{tabindex:"0"}}></iframe>
            </div>
        </div>
        <br></br>
    </React.Fragment>
)