// Crie um objeto que receba ao menos três propriedades sobre você.

let eu = {
    idade:17,
    nome:'nathan',
    esporte:'futebol'
}


// Adicione uma nova propriedade sem alterar seu objeto inicial.
eu.genero = "rap"


// Remova uma propriedade desse objeto

delete eu.idade

console.log(eu)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = {
    brasil: [
        {
            nome: "neymar",
            idade: 30,
            telefone: 9222222
        },
        {
            nome: "coutinho",
            idade: 29,
            telefone: 93333333
        }
    ],
    amigos: ["messi", "cristiano", "suarez", "mbappe", "lewa"]
}

//Mostre no console o nome de um amigo de cada lista.
console.log(cadastro.brasil[0])
console.log(cadastro.amigos[3])