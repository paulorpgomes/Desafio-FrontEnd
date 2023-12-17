# FormularioCadastroFornecedorProdutos
Projeto desenvolvido usando as seguintes tecnologias:
- **HTML**: na versão 5;
- **JAVASCRIPT**:ECMA-6;
- **BOOTSTRAP**:  
  - [CSS](https://fluig.totvs.com/style-guide/css/fluig-style-guide.min.css)
  - [JQUERY-3.5.1 ](https://jquery.com/download/)

Objetivo do projeto era criar um Formulario de Cadastro com função de adicionar Produtos e Fornecedores.

### Sobre o preenchimento dos campos existentes no formulário de cadastro

- **Razão Social**: obrigatório
- **Nome Fantasia**: obrigatório
- **CNPJ**: obrigatório
- **Inscrição Estadual**: opcional
- **Inscrição Municipal**: opcional
- **Endereço**: obrigatório (deve ser preenchido automaticamente usando a API via CEP)
- **Nome da pessoa de contato**: obrigatório
- **Telefone**: obrigatório
- **E-mail**: obrigatório
- **Tabela de Produtos**: obrigatório a inclusão de pelo menos 1 item
  - **Descrição**: obrigatório
  - **Unidade de Medida**: obrigatório
  - **Quantidade em Estoque**: obrigatório
  - **Valor Unitário**: obrigatório
  - **Valor Total**: obrigatório (bloqueado, deve ser preenchido automaticamente considerando o valor unitário x a quantidade em estoque)
- **Tabela de Anexos**: obrigatório a inclusão de pelo menos 1 documento
  - Os documentos anexados deverão ser armazenados em memória (blob e session storage) para envio
  - O Botão Excluir (lixeira) - Ao excluir o documento, deverá ser excluído da memória
  - O Botão Visualizar (olho) - Ao visualizar o documento, deve ser feito o download
- **Botão Salvar Fornecedor**: ao clicar no botão, deverá ser aberto modal de loading de envio, e deverá ser formatado um JSON com os dados a serem enviados, conforme exemplo: [jsonExemplo](./jsonExemplo/) 
  - **OBS Sobre o JSON**: o JSON de resultado pode ser baixado ou apenas exibido no console do browser.
