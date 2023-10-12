$(document).ready(function () {
    var fileInput = $("#anexo")[0];
    var file = null;

    $("#anexo").change(function () {
        file = fileInput.files[0];
        var fileName = file ? file.name : '';
        $("#file-name").text(fileName);
    });

    $("#baixarButton").click(function (e) {
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
            e.preventDefault();
            alert("Nenhum arquivo anexado.");

        }
    });

    $("#deleteButton").click(function (e) {
        e.preventDefault();
        file = null;
        $("#file-name").text('');
    });
});
