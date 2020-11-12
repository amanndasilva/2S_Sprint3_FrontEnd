import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container } from 'react-bootstrap';

const SemPermissao = () => {
    return (
        <div>
            <Menu />
            <Container>
                <h1>Você não tem permissão de acesso a esta página, saia!</h1>
            </Container>
            <Rodape />
        </div>
    )
}

export default SemPermissao;