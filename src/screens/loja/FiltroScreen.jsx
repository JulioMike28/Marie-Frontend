import React, {useEffect, useState} from 'react'
import api from '../../service/api.js'

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
            <li>
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
            </li>
            <hr></hr>
            <li>
                Preço <i style={{float:"right"}} className="fas fa-plus icone" data-toggle="collapse" data-target="#preco"></i>
            </li>
            <hr></hr>
            <li>
                Cor <i style={{float:"right"}}className="fas fa-plus icone" data-toggle="collapse" data-target="#cor"></i>
            </li>
            <hr></hr>
            <li>
                Tamanho <i style={{float:"right"}}className="fas fa-plus icone" data-toggle="collapse" data-target="#tamanho"></i>
            </li>
            <hr></hr>
        </ul>
    </React.Fragment>
}

export default FiltroScreen