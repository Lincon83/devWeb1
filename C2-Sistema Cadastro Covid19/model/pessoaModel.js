class Pessoa {
    constructor(id, primeiroNome, ultimoNome, endCompleto, problemaSaude, peso, altura, dddCelular, numCelular){
        this.id = id
        this.primeiroNome = primeiroNome
        this.ultimoNome = ultimoNome
        this.endCompleto = endCompleto
        this.problemaSaude = problemaSaude
        this.peso = peso
        this.altura = altura
        this.dddCelular = dddCelular
        this.numCelular = numCelular
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    getPrimeiroNome(){
        return this.primeiroNome;
    }
    setPrimeiroNome(primeiroNome){
        this.primeiroNome = primeiroNome;
    }
    getUltimoNome(){
        return this.ultimoNome;
    }
    setUltimoNome(ultimoNome){
        this.ultimoNome = ultimoNome;
    }
    getEndCompleto(){
        return this.endCompleto;
    }
    setEndCompleto(endCompleto){
        this.endCompleto = endCompleto;
    }
    getProblemaSaude(){
        return this.problemaSaude;
    }
    setProblemaSaude(problemaSaude){
        this.problemaSaude = problemaSaude;
    }
    getPeso(){
        return this.peso;
    }
    setPeso(peso){
        this.peso = peso;
    }
    getAltura(){
        return this.altura;
    }
    setAltura(altura){
        this.altura = altura
    }
    getDDD(){
        return this.dddCelular;
    }
    setDDD(dddCelular){
        this.dddCelular = dddCelular;
    }
    getNumCelular(){
        return this.numCelular;
    }
    setNumCelular(numCelular){
        this.numCelular = numCelular;
    }

    criarPessoa(id, primeiroNome, ultimoNome, endCompleto, problemaSaude, peso, altura, dddCelular, numCelular){
        let pessoa = new Pessoa(id, primeiroNome, ultimoNome, endCompleto, problemaSaude, peso, altura, dddCelular, numCelular);
        return pessoa;
    }
   
}