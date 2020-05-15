document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo);

function cadastrarVeiculo(e){
	var modeloCarro = document.getElementById('modeloCarro').value;
	var placaCarro = document.getElementById('placaCarro').value;
	var condutorCarro = document.getElementById('condutorCarro').value;
	var docsCondutor = document.getElementById('docsCondutor').value;
	var time = new Date();

	carro = {
		modelo: modeloCarro,
		placa: placaCarro,
		contudor: condutorCarro,
		documentos: docsCondutor,
		hora: time.getHours(),
		minutos: time.getMinutes()
	}
	
	console.log(carro);

	if(localStorage.getItem('patio2') === null){
		var carros = [];
		carros.push(carro);
		localStorage.setItem('patio2', JSON.stringify(carros));
	}else{
		var carros = JSON.parse(localStorage.getItem('patio'));
		carros.push(carro);
		localStorage.setItem('patio2', JSON.stringify(carros));
	}



	e.preventDefault();

}