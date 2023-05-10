export class Assertivas {
    assertivas() {
      return {
        ASSERTIVA: {
          COMPARA_TEXTO: "have.text",
          COMPARA_VALOR: "have.value",
          CONTEM: "contain",
          VISIVEL: "be.visible",
          NAO_VISIVEL: "not.be.visible",
          INCLUSO_URL: "include",
          CAMPO_SEM_VALOR: "not.have.value",
        },
      };
    }
  }
  
  const assertivas = new Assertivas();
  export default assertivas;
  