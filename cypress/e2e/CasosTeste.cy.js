/// <reference types="cypress" />

import TEXTOS from "../shared/textos";
import casosTesteInicial from "../page-objects/tela-inicial/casosTesteInicial";
import casoTestesCadastro from "../page-objects/tela-cadastro/casoTestesCadastro";

const { TEXTO_INICIAL } = TEXTOS.telaInicial();
const { TEXTO_CADASTRO } = TEXTOS.telaCadastro();

describe("Funcionalidade: Acessar Buger Eats", () => {
  describe("Cenário: Acesso a tela inicial", () => {
    before(() => {
      cy.visit(TEXTO_INICIAL.PAGINA_INICIAL);
    });

    it("Dado que eu acesso a página do Buger Eats", () => {
      casosTesteInicial.conferirPagina();
      casosTesteInicial.conferirTextos();
    });

    it("E leio as informações contidas na página inicial", () => {
      casosTesteInicial.conferirTextos();
    });

    it("Então clico no botão de Cadastre-se e sou redirecionado a tela de cadastro", () => {
      casosTesteInicial.botaoDirecionarCadastro();
    });
  });
});

describe("Funcionalidade: Cadastrar para fazer entregas", () => {
  describe("Cenário: Cadastro válido de entregador com Moto", () => {
    before(() => {
      cy.visit(TEXTO_CADASTRO.PAGINA_CADASTRO);
    });

    it("Dado que eu me encontro na tela de cadastro", () => {
      casoTestesCadastro.conferirPagina();
      casoTestesCadastro.conferirTextos();
    });
    it("E Preencho os campos referente aos DADOS", () => {
      casoTestesCadastro.preencherCamposDados();
    });
    it("E Preencho os campos referente ao ENDEREÇO", () => {
      casoTestesCadastro.preencherCamposEndereco();
      casoTestesCadastro.clickBuscarCep();
    });
    it("E Seleciono a opção referente a MOTO", () => {
      casoTestesCadastro.selecionarMoto();
    });
    it("E Anexo a imagem da minha CNH", () => {
      casoTestesCadastro.anexarImagem();
    });
    it('Quando Clico no botão "Cadastre-se para fazer entregas"', () => {
      casoTestesCadastro.checandoValores();
      casoTestesCadastro.submeterFormulario();
    });
    it('Então O sistema exibe a mensagem “Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.” e após clicar em "OK", sou redirecionado para a tela inicial.', () => {
      casoTestesCadastro.confirmarSucesso();
    });
  });

  describe("Cenário: Cadastro válido de entregador com Bicicleta", () => {
    before(() => {
      cy.visit(TEXTO_CADASTRO.PAGINA_CADASTRO);
    });

    it("Dado que eu me encontro na tela de cadastro", () => {
      casoTestesCadastro.conferirPagina();
      casoTestesCadastro.conferirTextos();
    });
    it("E Preencho os campos referente aos DADOS", () => {
      casoTestesCadastro.preencherCamposDados();
    });
    it("E Preencho os campos referente ao ENDEREÇO", () => {
      casoTestesCadastro.preencherCamposEndereco();
      casoTestesCadastro.clickBuscarCep();
    });
    it("E Seleciono a opção referente a BICICLETA", () => {
      casoTestesCadastro.selecionarBicicleta();
    });
    it("E Anexo a imagem da minha CNH", () => {
      casoTestesCadastro.anexarImagem();
    });
    it('Quando Clico no botão "Cadastre-se para fazer entregas"', () => {
      casoTestesCadastro.checandoValores();
      casoTestesCadastro.submeterFormulario();
    });
    it('Então O sistema exibe a mensagem “Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.” e após clicar em "OK", sou redirecionado para a tela inicial.', () => {
      casoTestesCadastro.confirmarSucesso();
    });
  });

  describe("Cenário: Cadastro válido de entregador com VAN/CARRO", () => {
    before(() => {
      cy.visit(TEXTO_CADASTRO.PAGINA_CADASTRO);
    });

    it("Dado que eu me encontro na tela de cadastro", () => {
      casoTestesCadastro.conferirPagina();
      casoTestesCadastro.conferirTextos();
    });
    it("E Preencho os campos referente aos DADOS", () => {
      casoTestesCadastro.preencherCamposDados();
    });
    it("E Preencho os campos referente ao ENDEREÇO", () => {
      casoTestesCadastro.preencherCamposEndereco();
      casoTestesCadastro.clickBuscarCep();
    });
    it("E Seleciono a opção referente a VAN/CARRO", () => {
      casoTestesCadastro.selecionarCarro();
    });
    it("E Anexo a imagem da minha CNH", () => {
      casoTestesCadastro.anexarImagem();
    });
    it('Quando Clico no botão "Cadastre-se para fazer entregas"', () => {
      casoTestesCadastro.checandoValores();
      casoTestesCadastro.submeterFormulario();
    });
    it('Então O sistema exibe a mensagem “Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.” e após clicar em "OK", sou redirecionado para a tela inicial.', () => {
      casoTestesCadastro.confirmarSucesso();
    });
  });

  describe("Cenário: Tentar cadastrar mais de um método de entrega", () => {
    before(() => {
      cy.visit(TEXTO_CADASTRO.PAGINA_CADASTRO);
    });

    it("Dado que eu me encontro na tela de cadastro", () => {
      casoTestesCadastro.conferirPagina();
      casoTestesCadastro.conferirTextos();
    });
    it("E Preencho os campos referente aos DADOS", () => {
      casoTestesCadastro.preencherCamposDados();
    });
    it("E Preencho os campos referente ao ENDEREÇO", () => {
      casoTestesCadastro.preencherCamposEndereco();
      casoTestesCadastro.clickBuscarCep();
    });
    it("Seleciono todas os métodos de entrega", () => {
      casoTestesCadastro.selecionarCarro();
      casoTestesCadastro.selecionarMoto();
      casoTestesCadastro.selecionarBicicleta();
    });
    it("E Anexo a imagem da minha CNH", () => {
      casoTestesCadastro.anexarImagem();
    });
    it('Quando Clico no botão "Cadastre-se para fazer entregas"', () => {
      casoTestesCadastro.checandoValores();
      casoTestesCadastro.submeterFormulario();
    });
    it('O sistema exibe a mensagem de erro "Oops! Selecione apenas um método de entrega" logo após os campos referentes a entrega.', () => {
      casoTestesCadastro.erroMetodosEntrega();
    });
  });

  describe("Cenário: Cadastro sem o preenchimento total dos campos obrigatórios", () => {
    before(() => {
      cy.visit(TEXTO_CADASTRO.PAGINA_CADASTRO);
    });

    it("Dado que eu me encontro na tela de cadastro", () => {
      casoTestesCadastro.conferirPagina();
      casoTestesCadastro.conferirTextos();
    });
    it("Preencho os campos referente aos DADOS exceto NOME COMPLETO", () => {
      casoTestesCadastro.preencherDadosSemNome();
    });
    it("E Preencho os campos referente ao ENDEREÇO", () => {
      casoTestesCadastro.preencherCamposEndereco();
      casoTestesCadastro.clickBuscarCep();
    });
    it("E Seleciono a opção referente a VAN/CARRO", () => {
      casoTestesCadastro.selecionarCarro();
    });
    it("E Anexo a imagem da minha CNH", () => {
      casoTestesCadastro.anexarImagem();
    });
    it('Quando Clico no botão "Cadastre-se para fazer entregas"', () => {
      casoTestesCadastro.submeterFormulario();
    });
    it('O sistema exibe a mensagem de erro "É necessário informar o nome" logo após o campo NOME COMPLETO.', () => {
      casoTestesCadastro.erroCampoNome();
    });
  });

  describe("Cenário: Validar campo CEP com CEP Existente", () => {
    before(() => {
      cy.visit(TEXTO_CADASTRO.PAGINA_CADASTRO);
    });

    it("Dado que eu me encontro na tela de cadastro", () => {
      casoTestesCadastro.conferirPagina();
      casoTestesCadastro.conferirTextos();
    });
    it('Preencho o campo "CEP" com um CEP VÁLIDO', () => {
      casoTestesCadastro.preencherCamposEndereco();
    });
    it('Quando Clico no botão "Buscar CEP"', () => {
      casoTestesCadastro.clickBuscarCep();
    });
    it('Então Os campos de "RUA", "BAIRRO" e "CIDADE" são preenchidos automaticamente', () => {
      casoTestesCadastro.confereDadosEndereco();
    });
  });

  describe("Cenário: Validar campo CEP com CEP Inexistente", () => {
    before(() => {
      cy.visit(TEXTO_CADASTRO.PAGINA_CADASTRO);
    });

    it("Dado que eu me encontro na tela de cadastro", () => {
      casoTestesCadastro.conferirPagina();
      casoTestesCadastro.conferirTextos();
    });
    it('Preencho o campo "CEP" com um CEP INVÁLIDO', () => {
      casoTestesCadastro.preencherCepIncorreto();
    });
    it('Quando Clico no botão "Buscar CEP"', () => {
      casoTestesCadastro.clickBuscarCep();
    });
    it('Então uma mensagem de erro será apresentada abaixo do campo de "CEP" com a informação de que o CEP está INVÁLIDO.', () => {
      casoTestesCadastro.confereMsgCepInvalido();
    });
  });

  describe("Cenário: Validar campo CPF com CPF Inexistente", () => {
    before(() => {
      cy.visit(TEXTO_CADASTRO.PAGINA_CADASTRO);
    });

    it("Dado que eu me encontro na tela de cadastro", () => {
      casoTestesCadastro.conferirPagina();
      casoTestesCadastro.conferirTextos();
    });
    it('E Preencho o campo "CPF" com um CPF INVÁLIDO', () => {
      casoTestesCadastro.preencherCpfIncorreto();
    });
    it('Quando Clico no botão "Cadastre-se para fazer entregas"', () => {
      casoTestesCadastro.submeterFormulario();
    });
    it('Então Uma mensagem de erro abaixo do campo de "CPF" será apresentadada com a informação de que o CPF está inválido. MSG: "Oops! CPF inválido"', () => {
      casoTestesCadastro.confereMsgCpfInvalido();
    });
  });

  describe("Cenário: Voltar para a tela Inicial a partir da tela de Cadastro", () => {
    before(() => {
      cy.visit(TEXTO_CADASTRO.PAGINA_CADASTRO);
    });

    it("Dado que eu me encontro na tela de cadastro", () => {
      casoTestesCadastro.conferirPagina();
      casoTestesCadastro.conferirTextos();
    });
    it('E Clico no botão na parte superior direita "Voltar para home"', () => {
      casoTestesCadastro.clicarBotaoVoltarHome();
    });
    it("Então Serei redirecionado a tela inicial do Buger Eats", () => {
      casoTestesCadastro.conferePaginaInicial();
    });
  });
});
