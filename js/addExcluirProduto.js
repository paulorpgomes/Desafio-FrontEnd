$(document).ready(function () {
    let produtoCount = 0;

    function calcularValorTotal($produto) {
        const valorUnitario = parseFloat($produto.find('.form-control[id^="valorUnitario"]').val()) || 0;
        const quantidadeEstoque = parseFloat($produto.find('.form-control[id^="quantidadeEstoque"]').val()) || 0;
        const valorTotal = (valorUnitario * quantidadeEstoque).toFixed(2);
        $produto.find('.form-control[id^="valorTotal"]').val(valorTotal);
    }

    function adicionarCalculoValorTotal($produto) {
        $produto.find('.form-control[id^="valorUnitario"], .form-control[id^="quantidadeEstoque"]').on('input', function () {
            calcularValorTotal($produto);
        });
    }

    function addProduto() {
        produtoCount++;
        let newProdutoID = "Produto" + produtoCount;

        let produtoHTML = `
            <div class="card-body produto" id="${newProdutoID}">
                <div class="row">
                    <div class="col-1">
                        <a href="#" class="btn btn-danger excluirProduto" data-product-id="${newProdutoID}">
                            <img src="img/trash.svg" alt="e" width="20" height="20">
                        </a>
                    </div>
                    <div class="col-11">
                        <form action="">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
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
                </div>
            </div>
        `;

        

        $("#produtoContainer").append(produtoHTML);


        const $novoProduto = $(`#${newProdutoID}`);

        $(`.excluirProduto[data-product-id="${newProdutoID}"]`).click(function (e) {
            e.preventDefault();
            $novoProduto.remove();
        });
        

        adicionarCalculoValorTotal($novoProduto);
    }

    $("#addProduto").click(addProduto);

    const $primeiroProduto = $("#Produto1");
    adicionarCalculoValorTotal($primeiroProduto);
});
