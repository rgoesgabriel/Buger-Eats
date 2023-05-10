export class Textos {
    telaInicial() {
      return {
        TEXTO_INICIAL: {
          PAGINA_INICIAL: "https://buger-eats.vercel.app/",
          FRASE_PARCEIRO: "Seja um parceiro entregador pela Buger Eats",
          FRASE_PARAGRAFO:
            "Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.",
          BOTAO_CADASTRE_SE: "Cadastre-se para fazer entregas",
          URL_CADASTRO: "/deliver",
        },
      };
    }
  
    telaCadastro() {
      return {
        TEXTO_CADASTRO: {
          TITULO: "Cadastre-se para  fazer entregas",
          PARTE_TITULO: "Cadastre-se para",
          SUB_TITULO: "Dados",
          CAMPO_NOME: "Nome completo",
          CAMPO_CPF: "CPF somente números",
          CAMPO_EMAIL: "E-mail",
          CAMPO_WHATSAPP: "Whatsapp",
          TITULO_ENDERECO: "Endereço",
          INFORMATIVO_CEP: "Informe o cep, número e complemento",
          CAMPO_CEP: "CEP",
          BOTAO_BUSCA_CEP: "Buscar CEP",
          CAMPO_RUA: "Rua",
          CAMPO_NUMERO: "Número",
          CAMPO_COMPLEMENTO: "Complemento",
          CAMPO_BAIRRO: "Bairro",
          CAMPO_CIDADE: "Cidade/UF",
          TITULO_ENTREGA: "Método de entrega",
          SUB_TITULO_ENTREGA: "Escolha um dos métodos abaixo:",
          BOTAO_MOTO: "Moto",
          BOTAO_BICICLETA: "Bicicleta",
          BOTAO_CARRO: "Van/Carro",
          CAMPO_INSERIR_CNH: "Foto da sua CNH",
          BOTAO_CADASTRAR: "Cadastre-se para fazer entregas",
          FRASE_TELA_INICIAL: "Seja um parceiro",
          PAGINA_CADASTRO: "https://buger-eats.vercel.app/deliver",
        },
        INSERIR_TEXTO: {
          CAMPO_NOME: "Carlos Emmanuel Moura",
          CAMPO_CPF: "99999999999",
          CAMPO_CPF_CORRETO: "16942895083",
          CAMPO_EMAIL: "carlos@gmail.com",
          CAMPO_WHATSAPP: "99999999999",
          CAMPO_CEP: "58417190",
          CAMPO_CEP_INCORRETO: "999999",
          CAMPO_NUMERO: "2000",
          CAMPO_COMPLEMENTO: "Vizinho a uma quadra de tênis",
          CAMPO_RUA: "Rua Maria Lucena Barbosa",
          CAMPO_BAIRRO: "Santa Cruz",
          CAMPO_CIDADE: "Campina Grande/PB",
        },
        TEXTO_ERRO: {
          CAMPO_NOME: "É necessário informar o nome",
          CAMPO_CPF: "É necessário informar o CPF",
          CAMPO_EMAIL: "É necessário informar o email",
          CAMPO_CEP: "É necessário informar o CEP",
          CAMPO_NUMERO: "É necessário informar o número do endereço",
          CAMPO_METODO_ENTREGA: "Selecione o método de entrega",
          CAMPO_INSERIR_CNH: "Adicione uma foto da sua CNH",
          CAMPO_CPF_INVALIDO: "Oops! CPF inválido",
          VARIOS_METODOS_ENTREGA: "Oops! Selecione apenas um método de entrega",
          CEP_INCORRETO: "Informe um CEP válido",
        },
      };
    }
  }
  
  const textos = new Textos();
  export default textos;
  