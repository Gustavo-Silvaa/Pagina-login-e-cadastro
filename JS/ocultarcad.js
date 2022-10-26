function visualizar() {
    const senhas = document.getElementById("inpsenha");
    const visua = document.getElementById("olho");
    let tiposenha = senhas.type == "password"

    if (tiposenha) {
        senhas.setAttribute("type", "text")
        visua.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3178/3178377.png")
    } else {
        senhas.setAttribute("type", "password")
        visua.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/158/158746.png")
    }
}

function visualizar1() {
    const senhas1 = document.getElementById("inpsenha1");
    const visua1 = document.getElementById("olho1");
    let tiposenha1 = senhas1.type == "password"

    if (tiposenha1) {
        senhas1.setAttribute("type", "text")
        visua1.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3178/3178377.png")
    } else {
        senhas1.setAttribute("type", "password")
        visua1.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/158/158746.png")
    }
}