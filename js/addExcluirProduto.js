$(document).ready(function () {
    let produtoCount = 2;
  
    $("#addProduto").click(function () {
      produtoCount++;
      let newProdutoID = "Produto" + produtoCount;
  
      let produtoHTML = `
          <div class="card-body">
          <div class="row">
              <!-- Botão "btn-danger" -->
              <div class="col-1">
              <a href="#" class="btn btn-danger" id="excluir${newProdutoID}">
  
                      <img src="img/trash.svg" alt="e" width="20" height="20">
                  </a>
              </div>
              <!-- Formulário -->
              <div class="col-11">
                  <form action="">
                      <div class="card">
                          <div class="card-body">
                              <div class="row">
                                  <!-- Conteúdo do formulário -->
                                  <div class="col-md-4">
                                      <img src="img/box-seam.svg" alt="Imagem da Caixa" class="mx-auto d-block" width="80%">
                                  </div>
                                  <div class="col-md-8">
                                      <div class="form-group">
                                      <label for="${newProdutoID}">Produto</label>
                                      <input type="text" class="form-control" id="${newProdutoID}" name="${newProdutoID}" placeholder="Nome do Produto">
                                      </div>
                                      <div class="form-group">
                                          <label for="unidadeMedida">Unidade de Medida</label>
                                          <select class="form-control" id="unidadeMedida" name="unidadeMedida">
                                              <option value="kg">Tonelada (t)</option>
                                              <option value="kg">Quilograma (kg)</option>
                                              <option value="g">Grama (g)</option>
                                              <option value="kg">Miligrama (mg)</option>
                                          </select>
                                      </div>
                                      <div class="form-group">
                                          <label for="quantidadeEstoque">Quantidade em Estoque</label>
                                          <input type="text" class="form-control" id="quantidadeEstoque" name="quantidadeEstoque" placeholder="Quantidade em Estoque">
                                      </div>
                                      <div class="form-group">
                                          <label for="valorUnitario">Valor Unitário</label>
                                          <input type="text" class="form-control" id="valorUnitario" name="valorUnitario" placeholder="Valor Unitário">
                                      </div>
                                      <div class="form-group">
                                          <label for="valorTotal">Valor Total</label>
                                          <input type="text" class="form-control" id="valorTotal" name="valorTotal" placeholder="Valor Total" readonly>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
          `;
  
      $("#addProduto").before(produtoHTML);
  
      $(`#excluir${newProdutoID}`).click(function (e) {
        e.preventDefault();
        $(this).closest(".row").remove();
      });
    });
  
    $("#excluirProduto").click(function (e) {
      e.preventDefault();
      $(this).closest(".row").remove();
    });
  });