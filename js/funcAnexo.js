$(document).ready(function () {
    $("#baixarButton").click(function () {
        var fileInput = $("#anexo")[0];
        var file = fileInput.files[0];

        if (file) {
            var fileURL = URL.createObjectURL(file);

            var a = document.createElement('a');
            a.href = fileURL;
            a.download = file.name;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(fileURL);
        } else {
            alert("Nenhum arquivo anexado.");
        }
    });

    $("#deleteButton").click(function (e) {
        e.preventDefault();
        $("#file-name").text('');
    });

    

    $("#anexo").change(function () {
        var fileName = $("#anexo")[0].files[0].name;
        $("#file-name").text(fileName);
    });
});
