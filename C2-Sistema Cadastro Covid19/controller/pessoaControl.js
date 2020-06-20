Pessoa = new Pessoa;
var cont = 0;
let pessoaLocal = [];

document.querySelector("#registrar").addEventListener("submit", function (event) {
    criarPessoa();
})

document.querySelector("#delRegistro").addEventListener("submit", function (event){
    deletarPessoa(id);
})

document.querySelector("#formPessoa").addEventListener("submit", function (event) {
    let saude = [];
    let vet = document.querySelectorAll("input.input--style-5")
    for (let i = 0; i < vet.length; ++i) {
        if (vet[i].checked === true) {
            saude[i] = vet[i].value;

        }
    }
    saude = saude.filter(function (elem) {
        return elem != null;
    });

    cont++; 
    function criarPessoa(){
        let objetoPessoa = Pessoa.criarPessoa(
            document.querySelector("input#primeiroNome").textContent,
            document.querySelector("input#ultimoNome").textContent,
            document.querySelector("input#endCompleto").textContent,
            document.querySelector("input#problemaSaude").textContent,
            document.querySelector("input#peso").textContent,
            document.querySelector("input#altura").textContent,
            document.querySelector("input#dddCelular").textContent,
            document.querySelector("input#numCelular").textContent,
        )

        pessoaLocal.push(objetoPessoa)
    };

function editarPessoa(id,params){
    objetoPessoa = new Pessoa(params)
    pessoaLocal.push(id,objetoPessoa)
    return objetoPessoa;
}

function deletarPessoa(id){
    pessoaLocal.splice(id,1);
}