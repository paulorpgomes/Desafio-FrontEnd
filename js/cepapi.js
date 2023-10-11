$('#cep').blur(function(){
    var v1 = this.value;

    $.get('https://viacep.com.br/ws/'+v1+'/json/', function(dados){
        $('#endereco').val(dados.logradouro);
        $('#bairro').val(dados.bairro);
        $('#municipio').val(dados.localidade);
        $('#estado').val(dados.uf);
        $('#complemento').val(dados.complemento);
    })

});

$('#cep').mask('99999-999');