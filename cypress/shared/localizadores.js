export class Localizadores {
    telaInicial() {
      return {
        LOC_INICAL: {
          FRASE_PARCEIRO: "h1",
          FRASE_PARAGRAFO: "p",
          BOTAO_CADASTRE_SE: "a",
        },
      };
    }
  
    telaCadastro() {
      return {
        LOC_CADASTRO: {
          TITULO: "h1",
          SUB_TITULO: ":nth-child(2) > header > h2",
          CAMPO_NOME_COMPLETO:
            ":nth-child(2) > :nth-child(2) > :nth-child(1) > input",
          CAMPO_CPF: ":nth-child(2) > :nth-child(2) > :nth-child(2) > input",
          CAMPO_EMAIL: ":nth-child(3) > :nth-child(1) > input",
          CAMPO_WHATSAPP: ":nth-child(3) > :nth-child(2) > input",
          TITULO_ENDERECO: ":nth-child(3) > header > h2",
          INFORMATIVO_CEP: ":nth-child(3) > header > span",
          CAMPO_CEP: ":nth-child(3) > :nth-child(2) > :nth-child(1) > input",
          BOTAO_BUSCA_CEP:
            ":nth-child(3) > :nth-child(2) > :nth-child(2) > input",
          CAMPO_RUA: ":nth-child(3) > input",
          CAMPO_NUMERO: ":nth-child(4) > :nth-child(1) > input",
          CAMPO_COMPLEMENTO: ":nth-child(4) > :nth-child(2) > input",
          CAMPO_BAIRRO: ":nth-child(5) > :nth-child(1) > input",
          CAMPO_CIDADE: ":nth-child(5) > :nth-child(2) > input",
          TITULO_ENTREGA: ":nth-child(4) > header > h2",
          SUB_TITULO_ENTREGA: ":nth-child(4) > header > span",
          BOTAO_MOTO: ".delivery-method > :nth-child(1)",
          BOTAO_BICICLETA: ".delivery-method > :nth-child(2)",
          BOTAO_CARRO: ".delivery-method > :nth-child(3)",
          CAMPO_CNH: "p",
          CAMPO_INSERIR_CNH: 'input[type="file"]',
          BOTAO_CADASTRAR: ".button-success",
          FRASE_TELA_INICIAL: "h1",
          CONFIRMA_CADASTRO: ".swal2-confirm",
          BOTAO_VOLTAR_HOME: "a > svg",
        },
        LOC_ERRO: {
          CAMPO_NOME:
            ":nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error",
          CAMPO_CPF: ":nth-child(2) > :nth-child(2) > .alert-error",
          CAMPO_EMAIL: ":nth-child(3) > :nth-child(1) > .alert-error",
          CAMPO_CEP:
            ":nth-child(3) > :nth-child(2) > :nth-child(1) > .alert-error",
          CAMPO_NUMERO: ":nth-child(4) > :nth-child(1) > .alert-error",
          CAMPO_METODO_ENTREGA: ":nth-child(4) > .alert-error",
          CAMPO_INSERIR_CNH: "form > :nth-child(6)",
          CPF_INVALIDO: ".alert-error",
          VARIOS_METODOS_ENTRADA: ":nth-child(4) > .alert-error",
          CEP_INCORRETO: ".alert-error",
        },
      };
    }
  }
  
  const localizadores = new Localizadores();
  export default localizadores;
  