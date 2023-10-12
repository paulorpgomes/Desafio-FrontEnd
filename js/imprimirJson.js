$(document).ready(function() {
    $("#salvarFornecedor").click(function() {
        $("#loadingModal").show();

        var fornecedorData = {
            razaoSocial: $("#razaoSocial").val(),
            cnpj: $("#cnpj").val(),
            nomeFantasia: $("#nomeFantasia").val(),
            inscricaoEstadual: $("#inscricaoEstadual").val(),
            cep: $("#cep").val(),
            inscricaoMunicipal: $("#inscricaoMunicipal").val(),
            endereco: $("#endereco").val(),
            numero: $("#numero").val(),
            complemento: $("#complemento").val(),
            bairro: $("#bairro").val(),
            municipio: $("#municipio").val(),
            estado: $("#estado").val(),
            pessoaContato: $("#pessoaContato").val(),
            telefone: $("#telefone").val(),
            email: $("#email").val(),
        };

        var jsonInfo = JSON.stringify(fornecedorData, null, 2);

        setTimeout(function() {
            $("#loadingModal").hide();
        }, 2000);
        console.log(jsonInfo)
        return false;
    });
});


$(document).ready(function() {
    $("#salvarFornecedor").click(function() {
        $("#loadingModal").show();

        var fornecedorData = {
            produto: $("#produto").val(),
            unidadeMedida: $("#unidadeMedida").val(),
            quantidadeEstoque: $("#quantidadeEstoque").val(),
            valorUnitario: $("#valorUnitario").val(),
            valorTotal: $("#valorTotal").val(),
        };

        var jsonInfo2 = JSON.stringify(fornecedorData, null, 2);

        setTimeout(function() {
            $("#loadingModal").hide();
        }, 2000); 
        console.log(jsonInfo2)
        return false; 
    });
});

$(document).ready(function() {
    $('#botaoAnexo').click(function() {
      $('#anexo').click();
    });
    $('#anexo').change(function() {
      var fileName = $('#anexo')[0].files[0].name;
      $('#file-name').text('Arquivo selecionado: ' + fileName);
    });
  });
  

  $(document).ready(function() {
    $("#salvarFornecedor").click(function() {
        $("#loadingModal").show();

        var fornecedorData = {
            file: $("#anexo").val(),
        };

        var jsonInfo3 = JSON.stringify(fornecedorData, null, 2);

        setTimeout(function() {
            $("#loadingModal").hide();
        }, 2000); 
        console.log(jsonInfo3)
        return false;
    });
});