//Importando um component do react
import React, {Component} from 'react';

class Titulo extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>{this.props.texto}</h1>
                <p>{this.props.descricao}</p>
            </div>
        )
    }
}

export default Titulo;