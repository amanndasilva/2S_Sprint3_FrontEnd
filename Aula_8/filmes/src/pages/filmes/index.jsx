import React, {Component} from 'react';
import Menu from '../../components/menu';
import Jumbotron from '../../components/jumbotron';

class Filmes extends Component{
    constructor (){
        super();

        //Define os valores do state filmes
        this.state= {
            url             : 'https://5f90c78ee0559c0016ad6d71.mockapi.io/api/filmes',
            id              : '',
            nome            : '',
            categoria       : '',
            anoLancamento   : '',
            filmes          : []
        }
    }

    componentDidMount(){
        this.listar();
    }

    listar(){
        fetch(this.state.url)
        .then(response => response.json())
            .then(dado => {
                //Altera o valor do state filmes
                this.setState({filmes : dado})

                console.log(this.state.filmes);
            }
        )
        .catch(err => console.error(err));
    }

    remover(event){
        event.preventDefault();

        console.log(event.target.vale);

        fetch(this.state.url + '/' + event.target.vale, {
            method : 'DELETE'
        })
        .then(response => response.json())
        .then(dado =>{
            alert('Filme removido');

            this.listar();
        })
    }

    editar(event){
        event.preventDefault();

        fetch(this.state.url + '/' + event.target.vale, {
            method : 'GET'
        })
        .then(response => response.json())
        .then(dado =>{
            console.log(dado);

            this.setState({id : dado.id});
            this.setState({nome : dado.nome});
            this.setState({categoria : dado.categoria});
            this.setState({anoLancamento : dado.anoLancamento});
        })
    }

    salar(event){
        event.preventDefault();

        const filme = {
            nome            : this.state.nome,
            categoria       : this.state.categoria,
            anoLancamento   : this.state.anoLancamento,
        }

        //Testa a condição, checa se é válida ? ou não PUT
        let method = (this.state.id === "" ? 'POST' : 'PUT');
        let urlRequest = (this.state.id === "" ? this.state.url : this.state.url + '/' + this.state.id);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(filme),
            headers : {
                'content-type' : 'application/json'
            }
        })

        .then(response => response.json())
        .then(dado => {
            alert('Filme salvo!');
            
            //this serve para dizer que está se referindo a esse arquivo especificamente
            this.listar();
        })

        .catch(err => console.error(err));
    }

    setNome(event){
        console.log(event.target.value);
        this.setState({nome : event.target.value});
    }

    render(){
        return(
            <div>
                <Menu />
                <Jumbotron titulo='Filmes' descricao='Gerencie seus filmes.' />

                <div className="container">
                    <div className="bd-example">
                        <form id="formFilme" onSubmit={this.salvar.bind(this)}>

                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" className="form-control" value={this.state.nome} onChange={this.setNome.bind(this)} id="nome" aria-describedby="nome" placeholder="Informe o Nome" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="categoria">Categoria</label>
                                <input type="text" className="form-control" value={this.state.categoria} onChange={e => {this.setState({categoria : e.target.value})}} id="categoria" placeholder="Informe a Categoria" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="ano">Ano de Lançamento</label>
                                <input type="text" className="form-control small" value={this.state.anoLancamento} onChange={e => {this.setState({anoLancamento : e.target.value})}} id="anoLancamento" placeholder="Informe o Ano de Lançamento" />
                            </div>

                            <button type='button' className="btn btn-secondary">Cancelar</button>
                            <button type='submit' className="btn btn-success">Salvar</button>
                        </form>

                        <table className="table" style={{marginTop: '40px'}}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Ano Lançamento</th>
                                    <th scope="col">Ações</th>
                                    <th scope="col"><button type="reset" className="btn btn-primary">Novo Filme</button></th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo">
                                {
                                    this.state.filmes.map((item, index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.nome}</td>
                                                <td>{item.categoria}</td>
                                                <td>{item.anoLancamento}</td>
                                                <td>
                                                    <button type='button' value={item.id} onClick={this.remover.bind(this)} className='btn btn-danger'>Remover</button>
                                                    <button type='button' value={item.id} onClick={this.editar.bind(this)} className='btn btn-warning'>Editar</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filmes;