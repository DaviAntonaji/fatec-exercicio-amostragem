function calcular() {
    let isValid = true;
    if ($("#populacao").val() == "") {
        isValid = false;
        Swal.fire({
            icon: "warning",
            title: "Ooops...",
            text: "Preencha o campo 'Tamanho da população'"
        })
    }  else if ($("#erro_amostral").val() == "") {
        isValid = false;
        Swal.fire({
            icon: "warning",
            title: "Ooops...",
            text: "Preencha o campo 'Erro amostral'"
        })
    }
    if (isValid) {
        let N = parseInt($("#populacao").val())
        let Z = $("#confianca").val()
        switch (Z) {
            case "90":
                Z = 1.65
                break;
            case "95":
                Z = 1.96
                break;
            case "95.5":
                Z = 2
                break;
            case "99":
                Z = 2.57
                break;
        }

        let p = $("#proporcao").val()
        if(p == "") {
            p = 50
        }
        p = parseFloat(p);
        p /= 100
        let e = parseFloat($("#erro_amostral").val());
        e /= 100
        console.log("Z", Z, "p", p, "e", e)
        n = (N * (Z ** 2) * p * (1 - p)) / ((e ** 2) * (N - 1) + (Z ** 2) * p * (1 - p))
        n = n.toFixed(2);
        $("#resultado").html(n);
    }
}

function limpar() {
    $("#resultado").html("...");
    $("#populacao").val("");

    $("#erro_amostral").val("");
    $("#proporcao").val("");

}