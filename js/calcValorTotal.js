function calcularValorTotal() {
    var valorUnitario = parseFloat($("#valorUnitario").val());
    var quantidadeEstoque = parseFloat($("#quantidadeEstoque").val());

    if (!isNaN(valorUnitario) && !isNaN(quantidadeEstoque)) {
        var valorTotal = valorUnitario * quantidadeEstoque;
        $("#valorTotal").val(valorTotal.toFixed(2));
    } else {
        $("#valorTotal").val("");
    }
}

$("#valorUnitario, #quantidadeEstoque").on("input", calcularValorTotal);