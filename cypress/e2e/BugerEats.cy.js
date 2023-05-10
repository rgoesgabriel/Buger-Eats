/// <reference types="cypress" />

import paginaInicial from "../page-objects/tela-inicial/inicial";
import paginaCadastro from "../page-objects/tela-cadastro/cadastro";

import TEXTOS from "../shared/textos";

const { TEXTO_INICIAL } = TEXTOS.telaInicial();

describe("Abrindo site do buger-eats", () => {
  before(() => {
    cy.visit(TEXTO_INICIAL.PAGINA_INICIAL);
  });

  it("Conferindo Textos", () => {
    paginaInicial.conferirTextos();
  });

  it("Clicar no botão e redirecionar página", () => {
    paginaInicial.botaoDirecionarCadastro();
  });
});

describe("Testando tela de cadastro", () => {
  it("Conferindo textos da página", () => {
    paginaCadastro.conferirTextos();
    paginaCadastro.conferirMsgsErro();
  });

  it("Preenchendo os campos", () => {
    paginaCadastro.preencherCampos();
  });

  it("Chegando valores", () => {
    paginaCadastro.checandoValores();
  });

  it("Submetendo formulário", () => {
    paginaCadastro.submeterFormulario();
  });
});
