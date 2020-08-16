import React, {useEffect, useState} from 'react'
import api from '../../service/api.js'
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

function FiltroScreen (props){
    const [products, setProduct] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const {data} = await api.get("/api/products");
            setProduct(data);
        }
        fetchData();
        return()=>{

        };
    }, [])

    return <React.Fragment>
        
        <h5 style={{color:"purple",marginBottom:"10px",marginLeft:"10px"}}>Filtrar por:</h5>
        <ul className="filtro">
            <hr></hr>
                Tipo de Roupa <i style={{float:"right"}} className="fas fa-plus icone" data-toggle="collapse" data-target="#tipo"></i>
                <div id="tipo" className="collapse">
                    <br></br>
                    {   
                        products.map(el=>
                            <div>
                                <input type="checkbox" id={el._id} name={el._id} value={el.category}></input>
                                <label for={el._id} > {el.category} </label>    
                            </div>
                        )
                    }
                </div>
            <hr></hr>
            <li>
                Preço <i style={{float:"right"}} className="fas fa-plus icone" data-toggle="collapse" data-target="#preco"></i>
                <div id="preco" className="collapse preco">
                    
                    <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect />
                </div>
            </li>
            <hr></hr>
            <li>
                Cor <i style={{float:"right"}}className="fas fa-plus icone" data-toggle="collapse" data-target="#cor"></i>
                <div id="cor" className="collapse">
                    <div className="cor">
                        {
                            products.map(el=>
                                <div style={{backgroundColor:`${el.cor}`}}></div>
                            )
                        }
                    </div>
                </div>
            </li>
            <hr></hr>
            <li>
                Tamanho <i style={{float:"right"}}className="fas fa-plus icone" data-toggle="collapse" data-target="#tamanho"></i>
                <div id="tamanho" className="collapse">
                    <br></br>
                    <ul className="tamanho">
                        <li>
                            <input type="checkbox" id="P" name="P" value="P"></input>
                            <label for="P">P</label>
                        </li>
                        <li>
                            <input type="checkbox" id="M" name="M" value="M"></input>
                            <label for="M">M</label>
                        </li>
                        <li>
                            <input type="checkbox" id="G" name="G" value="GP"></input>
                            <label for="G">G</label>
                        </li>
                    </ul>
                    
                </div>
            </li>
            <hr></hr>
        </ul>
    </React.Fragment>
}

export default FiltroScreen