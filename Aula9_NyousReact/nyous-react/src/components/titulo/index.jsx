import React from 'react';
import {Jumbotron} from 'react-boostrap';

const Titulo = ({titulo, chamada}) => {
    return(
        <Jumbotron>
            <h1>{titulo}</h1>
            <p>
                {chamada}
            </p>
        </Jumbotron>
    )
}

export default Titulo;