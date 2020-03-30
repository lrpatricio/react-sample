import React from "react";
import LinkWrapper from "../../utils/LinkWrapper";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper indigo lighten-2">
        <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>
          Casa do código
        </LinkWrapper>
        {/* <a href="/" className="brand-logo">
          Casa do código
        </a> */}
        <ul className="right">
          <li>
            {/* <a href="/autores">Autores</a> */}
            <LinkWrapper to='/autores'>Autores</LinkWrapper>
          </li>
          <li>
            {/* <a href="/livros">Livros</a> */}
            <LinkWrapper to='/livros'>Livros</LinkWrapper>
          </li>
          <li>
            {/* <a href="/sobre">Sobre</a> */}
            <LinkWrapper to='/sobre'>Sobre</LinkWrapper>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
