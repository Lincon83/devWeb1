document.querySelector('.form').addEventListener('submit', function(event){
    console.log(event);
    event.preventDefault();
    inserirTransacao();
})

function inserirTransacao() {

    var data = document.getElementById("data");
    var quantidade = document.getElementById("quantidade");
    var valor = document.querySelector("#valor");

    console.log(valor);

    var total = quantidade.value * valor.value;

    var tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${data.value}</td>
    <td>${quantidade.value}</td>
    <td>${valor.value}</td>
    <td>${total}</td>
    `;

    document.getElementsByTagName("table")[0].appendChild(tr);

}