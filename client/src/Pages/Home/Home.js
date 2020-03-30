import React, { Component, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./Home.css";
import Tabela from "../../Components/Tabela/Tabela";
import Form from "../../Components/Formulario/Formulario";
import Header from "../../Components/Header/Header";
import PopUp from "../../utils/PopUp";
import ApiService from "../../utils/ApiService";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    autores: []
  };

  removeAutor = id => {
    const { autores } = this.state;

    const AutoresAtualizado = autores.filter(autor => autor.id !== id);

    ApiService.RemoveAutor(id)
      .then(res => {
        if (res.message === "deleted") {
          this.setState({ autores: AutoresAtualizado });
          PopUp.exibeMensagem("success", "Autor removido com sucesso.");
        }
      })
      .catch(err =>
        PopUp.exibeMensagem(
          "error",
          "Erro na comunicação com a API ao tentar remover um autor."
        )
      );
  };

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if (res.message === "success") {
          this.setState({
            autores: [...this.state.autores, res.data]
          });
          PopUp.exibeMensagem("success", "Autor adiconado com sucesso.");
        }
      })
      .catch(err =>
        PopUp.exibeMensagem(
          "error",
          "Erro na comunicação com a API ao tentar criar um autor."
        )
      );
  };

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        if (res.message === "success") {
          this.setState({
            autores: [...this.state.autores, ...res.data]
          });
        }
      })
      .catch(err =>
        PopUp.exibeMensagem(
          "error",
          "Erro na comunicação com a API ao tentar listar os autores."
        )
      );
  }

  render() {
    console.log("n");
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do código</h1>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
