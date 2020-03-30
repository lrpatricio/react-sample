import React, { Component, Fragment } from "react";
import Header from "../../Components/Header/Header";
import PopUp from "../../utils/PopUp";
import DataTable from "../../Components/DataTable/DataTable";
import ApiService from "../../utils/ApiService";

class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livros: [],
      titulo: "Livros"
    };
  }

  componentDidMount() {
    ApiService.ListaLivros()
      .then(res => {
        if (res.message === "success") {
          this.setState({ livros: [...this.state.livros, ...res.data] });
        }
      })
      .catch(err =>
        PopUp.exibeMensagem(
          "error",
          "Erro na comunicação com a API ao tentar listar os livros."
        )
      );
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Livros</h1>
          <DataTable
            dados={this.state.livros}
            titulo={this.state.titulo}
            colunas={["livro"]}
          />
        </div>
      </Fragment>
    );
  }
}

export default Livros;
