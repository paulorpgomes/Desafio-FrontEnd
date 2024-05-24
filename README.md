
# Imagem do Projeto


<img align="center" width=100% src="https://github.com/paulorpgomes/FormularioCadastroFornecedorProdutos/assets/94014276/d65afe02-8fd4-453a-a555-ee9cd868e101"/>

# Formulário para cadastro de fornecedores e produtos

Este é um projeto pessoal desenvolvido por Paulo Ricardo para cadastro de fornecedores e produtos. A página inclui widgets com informações pessoais, endereços, produtos, e muito mais.

## Características

- **Preenchimento automático do endereço:** Usando API via CEP, preenche automático todos os campos relacionados ao endereço somente com o CEP preenchido.
- **Valor total do Produto:** É preenchido automaticamente considerando o valor unitário x a quantidade em estoque.
- **Tabelas de anexos:** Os documentos anexados são armazenados em memória (blob e session storage) para envio.
- **Botão Excluir(lixeira):** Ao excluir o documento, é excluído da memória.
- **Botão Visualizar(olho):** Ao visualizar o documento, é feito do download.
- **Botão Salvar Fornecedor:**  ao clicar no botão, é aberto modal de loading de envio, é formatado um JSON com os dados a serem enviados.

## Tecnologias Utilizadas

- HTML5
- CSS3
- jQuery
- BootStrap

## Estrutura de Arquivos

```plaintext
/projeto
|-- /css
    |-- style.css
|-- /img
    |-- box-seam.svg
    |-- eye.svg
    |-- trash.svg
|-- /js
    |-- addExcluirProduto.js
    |-- calcValorTotal.js
    |-- cepapi.js
    |-- funcAnexo.js
    |-- imprimirJson.js
    |-- jquery-3.5.1.min.js
|-- index.html
```

## Como Usar

1. Clone o repositório em sua máquina local usando `git clone [URL do Repositório]`.
2. Abra o arquivo `index.html` em um navegador para visualizar o site.
3. Explore as diferentes seções clicando nos links e ícones disponíveis.

## Contribuições

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto, sinta-se à vontade para fazer um fork do repositório e enviar sua pull request.

## Autor

**Paulo Ricardo**
- [Perfil no GitHub](https://github.com/paulorpgomes)
- [LinkedIn](https://www.linkedin.com/in/pauloricardo-ponte/)
