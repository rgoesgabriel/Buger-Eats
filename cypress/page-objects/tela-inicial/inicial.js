/// <reference types="cypress" />

import LOCALIZADORES from "../../shared/localizadores";
import TEXTOS from "../../shared/textos";
import ASSERTIVAS from "../../shared/assertivas";

const { LOC_INICAL } = LOCALIZADORES.telaInicial();
const { TEXTO_INICIAL } = TEXTOS.telaInicial();
const { ASSERTIVA } = ASSERTIVAS.assertivas();

export class PaginaInicial {
  conferirTextos() {
    cy.get(LOC_INICAL.FRASE_PARCEIRO).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_INICIAL.FRASE_PARCEIRO
    );
    cy.get(LOC_INICAL.FRASE_PARAGRAFO).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_INICIAL.FRASE_PARAGRAFO
    );
    cy.get(LOC_INICAL.BOTAO_CADASTRE_SE).should(
      ASSERTIVA.COMPARA_TEXTO,
      TEXTO_INICIAL.BOTAO_CADASTRE_SE
    );
  }

  botaoDirecionarCadastro() {
    cy.get(LOC_INICAL.BOTAO_CADASTRE_SE).click();
    cy.url().should(ASSERTIVA.INCLUSO_URL, TEXTO_INICIAL.URL_CADASTRO);
  }
}

const paginaInicial = new PaginaInicial();
export default paginaInicial;
