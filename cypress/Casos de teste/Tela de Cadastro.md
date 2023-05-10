<h1> Casos de teste <b>Tela de Cadastro</b> </h1>

## <b> ``Funcionalidade``: </b> Cadastrar para fazer entregas

- **Como** entregador gostaria de realizar o cadastro
- **Então** vou preecher o formulário de cadastro
- **E** vou clicar no botão Cadastre-se
- **Para** me tornar um entregador Buger Eats

<br>

## <b> ``Cenário``: </b> Cadastro válido de entregador com Moto

**Dado** que eu me encontro na tela de cadastro

**E** Preencho os campos referente aos DADOS

**E** Preencho os campos referente ao ENDEREÇO

**E** Seleciono a opção referente a MOTO

**E** Anexo a imagem da minha CNH

**Quando** Clico no botão "Cadastre-se para fazer entregas"

**Então** O sistema exibe a mensagem “Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.” e após clicar em "OK", sou redirecionado para a tela inicial.

<br>

## <b> ``Cenário``: </b> Cadastro válido de entregador com Bicicleta

**Dado** que eu me encontro na tela de cadastro

**E** Preencho os campos referente aos DADOS

**E** Preencho os campos referente ao ENDEREÇO

**E** Seleciono a opção referente a BICICLETA

**E** Anexo a imagem da minha CNH

**Quando** Clico no botão "Cadastre-se para fazer entregas"

**Então** O sistema exibe a mensagem “Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.” e após clicar em "OK", sou redirecionado para a tela inicial.

<br>

## <b> ``Cenário``: </b> Cadastro válido de entregador com VAN/CARRO

**Dado** que eu me encontro na tela de cadastro

**E** Preencho os campos referente aos DADOS

**E** Preencho os campos referente ao ENDEREÇO

**E** Seleciono a opção referente a VAN/CARRO

**E** Anexo a imagem da minha CNH

**Quando** Clico no botão "Cadastre-se para fazer entregas"

**Então** O sistema exibe a mensagem “Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.” e após clicar em "OK", sou redirecionado para a tela inicial.

<br>

## <b> ``Cenário``: </b> Tentar cadastrar mais de um método de entrega

**Dado** que eu me encontro na tela de cadastro

**E** Preencho os campos referente aos DADOS

**E** Preencho os campos referente ao ENDEREÇO

**E** Seleciono todas os métodos de entrega

**E** Anexo a imagem da minha CNH

**Quando** Clico no botão "Cadastre-se para fazer entregas"

**Então** O sistema exibe a mensagem de erro "Oops! Selecione apenas um método de entrega" logo após os campos referentes a entrega.

<br>

## <b> ``Cenário``: </b> Cadastro sem o preenchimento total dos campos obrigatórios

**Dado** que eu me encontro na tela de cadastro

**E** Preencho os campos referente aos DADOS exceto NOME COMPLETO

**E** Preencho os campos referente ao ENDEREÇO

**E** Seleciono a opção referente a VAN/CARRO

**E** Anexo a imagem da minha CNH

**Quando** Clico no botão "Cadastre-se para fazer entregas"

**Então** O sistema exibe a mensagem de erro "É necessário informar o nome" logo após o campo NOME COMPLETO.

<br>

## <b> ``Cenário``: </b> Validar campo CEP com CEP Existente

**Dado** que eu me encontro na tela de cadastro

**E** Preencho o campo "CEP" com um CEP VÁLIDO

**Quando** Clico no botão "Buscar CEP"

**Então** Os campos de "RUA", "BAIRRO" e "CIDADE" são preenchidos automaticamente

<br>

## <b> ``Cenário``: </b> Validar campo CEP com CEP Inexistente

**Dado** que eu me encontro na tela de cadastro

**E** Preencho o campo "CEP" com um CEP INVÁLIDO

**Quando** Clico no botão "Buscar CEP"

**Então** uma mensagem de erro será apresentada abaixo do campo de "CEP" com a informação de que o CEP está INVÁLIDO.

<br>

## <b> ``Cenário``: </b> Validar campo CPF com CPF Inexistente

**Dado** que eu me encontro na tela de cadastro

**E** Preencho o campo "CPF" com um CPF INVÁLIDO

**Quando** Clico no botão "Cadastre-se para fazer entregas"

**Então** Uma mensagem de erro abaixo do campo de "CPF" será apresentada com a informação de que o CPF está inválido. MSG: "Oops! CPF inválido"

<br>

## <b> ``Cenário``: </b> Voltar para a tela Inicial a partir da tela de Cadastro

**Dado** que eu me encontro na tela de cadastro

**E** Clico no botão na parte superior direita "Voltar para home"

**Então** Serei redirecionado a tela inicial do Buger Eats
