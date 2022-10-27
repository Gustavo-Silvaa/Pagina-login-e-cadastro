function buscacep() {
    let cep = document.getElementById('txtcep').value;
    if (cep !== "") {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        // tratar a resposta da requisição
        req.onload = function () {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);
                document.getElementById("rua").value = endereco.street
                document.getElementById("bairro").value = endereco.neighborhood
                document.getElementById("estado").value = endereco.state
                document.getElementById("cidade").value = endereco.city
            } 
            else if (req.status === 404) {
                alert("Cep Inválido");
            } 
            else {
                alert("Erro no cadastro!!");
            }
        }
    }
}

window.onload = function () {
    let txtcep = document.getElementById("txtcep");
    txtcep.addEventListener("blur", buscacep);
}