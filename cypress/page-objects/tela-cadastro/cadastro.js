/// <reference types="cypress" />

import LOCALIZADORES from "../../shared/localizadores";
import TEXTOS from "../../shared/textos";
import ASSERTIVAS from "../../shared/assertivas";

const { LOC_CADASTRO } = LOCALIZADORES.telaCadastro();
const { LOC_ERRO } = LOCALIZADORES.telaCadastro();
const { TEXTO_CADASTRO } = TEXTOS.telaCadastro();
const { INSERIR_TEXTO } = TEXTOS.telaCadastro();
const { TEXTO_ERRO } = TEXTOS.telaCadastro();
const { ASSERTIVA } = ASSERTIVAS.assertivas();

const FILE = "cnh.png";

export class PaginaCadastro {
  conferirTextos() {
    cy.get(LOC_CADASTRO.TITULO).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_CADASTRO.TITULO
    );
    cy.get(LOC_CADASTRO.SUB_TITULO).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_CADASTRO.SUB_TITULO
    );
    cy.get(LOC_CADASTRO.CAMPO_NOME_COMPLETO)
      .invoke("attr", "placeholder")
      .should(ASSERTIVA.CONTEM, TEXTO_CADASTRO.CAMPO_NOME);
    cy.get(LOC_CADASTRO.CAMPO_CPF)
      .invoke("attr", "placeholder")
      .should(ASSERTIVA.CONTEM, TEXTO_CADASTRO.CAMPO_CPF);
    cy.get(LOC_CADASTRO.CAMPO_EMAIL)
      .invoke("attr", "placeholder")
      .should(ASSERTIVA.CONTEM, TEXTO_CADASTRO.CAMPO_EMAIL);
    cy.get(LOC_CADASTRO.CAMPO_WHATSAPP)
      .invoke("attr", "placeholder")
      .should(ASSERTIVA.CONTEM, TEXTO_CADASTRO.CAMPO_WHATSAPP);
    cy.get(LOC_CADASTRO.TITULO_ENDERECO).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_CADASTRO.TITULO_ENDERECO
    );
    cy.get(LOC_CADASTRO.INFORMATIVO_CEP).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_CADASTRO.INFORMATIVO_CEP
    );
    cy.get(LOC_CADASTRO.CAMPO_CEP)
      .invoke("attr", "placeholder")
      .should(ASSERTIVA.CONTEM, TEXTO_CADASTRO.CAMPO_CEP);
    cy.get(LOC_CADASTRO.BOTAO_BUSCA_CEP).should(
      ASSERTIVA.COMPARA_VALOR,
      TEXTO_CADASTRO.BOTAO_BUSCA_CEP
    );
    cy.get(LOC_CADASTRO.CAMPO_RUA)
      .invoke("attr", "placeholder")
      .should(ASSERTIVA.CONTEM, TEXTO_CADASTRO.CAMPO_RUA);
    cy.get(LOC_CADASTRO.CAMPO_NUMERO)
      .invoke("attr", "placeholder")
      .should(ASSERTIVA.CONTEM, TEXTO_CADASTRO.CAMPO_NUMERO);
    cy.get(LOC_CADASTRO.CAMPO_COMPLEMENTO)
      .invoke("attr", "placeholder")
      .should(ASSERTIVA.CONTEM, TEXTO_CADASTRO.CAMPO_COMPLEMENTO);
    cy.get(LOC_CADASTRO.CAMPO_BAIRRO)
      .invoke("attr", "placeholder")
      .should(ASSERTIVA.CONTEM, TEXTO_CADASTRO.CAMPO_BAIRRO);
    cy.get(LOC_CADASTRO.CAMPO_CIDADE)
      .invoke("attr", "placeholder")
      .should(ASSERTIVA.CONTEM, TEXTO_CADASTRO.CAMPO_CIDADE);
    cy.get(LOC_CADASTRO.TITULO_ENTREGA).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_CADASTRO.TITULO_ENTREGA
    );
    cy.get(LOC_CADASTRO.SUB_TITULO_ENTREGA).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_CADASTRO.SUB_TITULO_ENTREGA
    );
    cy.get(LOC_CADASTRO.BOTAO_MOTO).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_CADASTRO.BOTAO_MOTO
    );
    cy.get(LOC_CADASTRO.BOTAO_BICICLETA).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_CADASTRO.BOTAO_BICICLETA
    );
    cy.get(LOC_CADASTRO.BOTAO_CARRO).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_CADASTRO.BOTAO_CARRO
    );
    cy.get(LOC_CADASTRO.CAMPO_CNH).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_CADASTRO.CAMPO_INSERIR_CNH
    );
    cy.get(LOC_CADASTRO.BOTAO_CADASTRAR).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_CADASTRO.BOTAO_CADASTRAR
    );
  }

  conferirMsgsErro() {
    cy.get(LOC_CADASTRO.BOTAO_CADASTRAR).click();
    cy.get(LOC_ERRO.CAMPO_NOME).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_ERRO.CAMPO_NOME
    );
    cy.get(LOC_ERRO.CAMPO_CPF).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_ERRO.CAMPO_CPF
    );
    cy.get(LOC_ERRO.CAMPO_EMAIL).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_ERRO.CAMPO_EMAIL
    );
    cy.get(LOC_ERRO.CAMPO_CEP).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_ERRO.CAMPO_CEP
    );
    cy.get(LOC_ERRO.CAMPO_NUMERO).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_ERRO.CAMPO_NUMERO
    );
    cy.get(LOC_ERRO.CAMPO_METODO_ENTREGA).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_ERRO.CAMPO_METODO_ENTREGA
    );
    cy.get(LOC_ERRO.CAMPO_INSERIR_CNH).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_ERRO.CAMPO_INSERIR_CNH
    );
  }

  preencherCampos() {
    cy.get(LOC_CADASTRO.CAMPO_NOME_COMPLETO).type(INSERIR_TEXTO.CAMPO_NOME);
    cy.get(LOC_CADASTRO.CAMPO_CPF).type(INSERIR_TEXTO.CAMPO_CPF);
    cy.get(LOC_CADASTRO.CAMPO_EMAIL).type(INSERIR_TEXTO.CAMPO_EMAIL);
    cy.get(LOC_CADASTRO.CAMPO_WHATSAPP).type(INSERIR_TEXTO.CAMPO_WHATSAPP);
    cy.get(LOC_CADASTRO.CAMPO_CEP).type(INSERIR_TEXTO.CAMPO_CEP);
    cy.get(LOC_CADASTRO.CAMPO_NUMERO).type(INSERIR_TEXTO.CAMPO_NUMERO);
    cy.get(LOC_CADASTRO.CAMPO_COMPLEMENTO).type(
      INSERIR_TEXTO.CAMPO_COMPLEMENTO
    );
  }

  checandoValores() {
    cy.get(LOC_CADASTRO.BOTAO_BUSCA_CEP).click();
    cy.get(LOC_CADASTRO.CAMPO_NOME_COMPLETO).should(
      ASSERTIVA.COMPARA_VALOR,
      INSERIR_TEXTO.CAMPO_NOME
    );
    cy.get(LOC_CADASTRO.CAMPO_CPF).should(
      ASSERTIVA.COMPARA_VALOR,
      INSERIR_TEXTO.CAMPO_CPF
    );
    cy.get(LOC_CADASTRO.CAMPO_EMAIL).should(
      ASSERTIVA.COMPARA_VALOR,
      INSERIR_TEXTO.CAMPO_EMAIL
    );
    cy.get(LOC_CADASTRO.CAMPO_WHATSAPP).should(
      ASSERTIVA.COMPARA_VALOR,
      INSERIR_TEXTO.CAMPO_WHATSAPP
    );
    cy.get(LOC_CADASTRO.CAMPO_CEP).should(
      ASSERTIVA.COMPARA_VALOR,
      INSERIR_TEXTO.CAMPO_CEP
    );
    cy.get(LOC_CADASTRO.CAMPO_NUMERO).should(
      ASSERTIVA.COMPARA_VALOR,
      INSERIR_TEXTO.CAMPO_NUMERO
    );
    cy.get(LOC_CADASTRO.CAMPO_COMPLEMENTO).should(
      ASSERTIVA.COMPARA_VALOR,
      INSERIR_TEXTO.CAMPO_COMPLEMENTO
    );
    cy.get(LOC_CADASTRO.CAMPO_RUA).should(
      ASSERTIVA.COMPARA_VALOR,
      INSERIR_TEXTO.CAMPO_RUA
    );
    cy.get(LOC_CADASTRO.CAMPO_BAIRRO).should(
      ASSERTIVA.COMPARA_VALOR,
      INSERIR_TEXTO.CAMPO_BAIRRO
    );
    cy.get(LOC_CADASTRO.CAMPO_CIDADE).should(
      ASSERTIVA.COMPARA_VALOR,
      INSERIR_TEXTO.CAMPO_CIDADE
    );
  }

  submeterFormulario() {
    cy.get(LOC_CADASTRO.BOTAO_CADASTRAR).click();
    cy.get(LOC_CADASTRO.CAMPO_CPF).clear();
    cy.get(LOC_CADASTRO.CAMPO_CPF).type(INSERIR_TEXTO.CAMPO_CPF_CORRETO);
    cy.get(LOC_CADASTRO.CAMPO_INSERIR_CNH).attachFile(FILE);

    cy.get(LOC_CADASTRO.BOTAO_CADASTRAR).click();

    cy.get(LOC_CADASTRO.CONFIRMA_CADASTRO).click();
    cy.contains(
      LOC_CADASTRO.FRASE_TELA_INICIAL,
      TEXTO_CADASTRO.FRASE_TELA_INICIAL
    );
  }
}

const paginaCadastro = new PaginaCadastro();
export default paginaCadastro;
