import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {Container, Form, Button} from 'react-bootstrap';
import logo from '../../assets/img/Logo.svg';
import './index.css';

import jwt_decode from "jwt-decode";

const Login = () => {
    let history = useHistory();

    //A mesma coisa de - string email { get; set; }
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        console.log('${email} - ${senha}');
        
        const login = {
            email : email,
            senha : senha
        }

        //url + '/account/login'
        fetch('https://localhost:5000/api/account/login', {
            method : 'POST',
            body : JSON.stringify(login),
            headers : {
                'content-type' : 'application/json'
            }
        })

        .then(response => {
            //Verifica a resposta da API
            if(response.ok){
                return response.json();
            }

            //Caso não retorne, ele mostra um alert
            alert('Dados inválidos')
        })

        .then(data => {
            localStorage.setItem('token-nyous', data.token)

            let usuario = jwt_decode(data.token);

            if(usuario.role === 'Admin'){
                history.push('/admin/dashboard');
            } else {
                history.push('/eventos')
            }
        })

        .catch(err => console.error(err))
    }

    return(
        <div>
            <Menu />
                <Container className='form-height'>
                    <Form className='form-signin' onSubmit={event => logar(event)}>
                        <div className='text-center'>
                            <img src={logo} alt='NYOUS' style={{ width : '64px'}} />
                        </div>
                        <br/>
                        <small>Informe seus dados abaixo</small>
                        <hr/>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Informe o email" value={email} onChange={event => setEmail(event.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" value={senha} onChange={event => setSenha(event.target.value)} required/>
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Enviar
                        </Button>

                        <br/><br/>
                        <a href='/login' style={{ marginTop :'30px'}}>Ainda não tenho conta!</a>
                    </Form>
                </Container>
            <Rodape />
        </div>
    )
}

export default Login;