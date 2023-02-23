// 01- Crie um array que receba 5 itens e exiba no console.

const powerrangers = ['LightSpeed', 'Time Force', 'Mighty Morphin', 'Lost in Galaxy', 'Turbo']

console.log(powerrangers)

// 02- Utilize um método para adicionar um nome ao inicio do array.

const kpopsoloists = ['Tayeon', 'IU', 'Gyeong Ree', "Moon Byu", 'Nicole']
kpopsoloists.unshift("Jessica")

console.log(kpopsoloists)

// 03- Utilize um método para remover o último nome do array.

const kpopgroups = ['SNSD', 'LOONA', 'T-ARA', 'KARA', 'tripleS', 'Laboum']
kpopgroups.pop()

console.log(kpopgroups)

// 04- Utilize um método para adicionar dois nomes ao fim do array.

const pokémons = ['Piplup', 'Butterfree', 'Pidgeot', 'Chikorita'];
pokémons.push('Lugia', 'Celebi');

console.log(pokémons);
// 05- Utilize um método para remover o primeiro nome do array.

const loonasongs = ['Sonatine', 'Eclipse', 'Singing in the Rain', 'Sweet Crazy Love', 'Hula Hoop'];
loonasongs.shift();

console.log(loonasongs);

// 06 Utilize um método para organizar em ordem crescente o seguinte array:
// // let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort();

console.log(numbers);

// 07 Crie um objeto que receba ao menos três propriedades sobre você.

const eu = {
    FirstName: 'Jackson',
    LastName: 'Ferreira',
    age: '24',
};

const {FirstName, LastName, age} = eu

// 08 Adicione uma nova propriedade sem alterar seu objeto inicial.

eu.hobbie = 'Jogar LoL'

// 09 Remova uma propriedade desse objeto.

delete eu.age;

// 10-Mostre no console todas as propriedades desse objeto.

console.log(FirstName);
console.log(LastName);
console.log(age);
console.log(eu);

// 11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.

const cadastro = [
{
    nome: 'JinSoul',
    idade: '24',
    telefone: 'xx xxxx-xxxx',
    amigos: ['Kim Lip', 'Choerry', 'Heejin', 'Gowon'],
},
{
    nome: 'Heejin',
    idade: '21',
    telefone: 'xx xxxx-xxxx',
    amigos: ['Haseul', 'Hyunjin', 'Vivi', 'Yeojin'],
},
{
    nome: 'Chuu',
    idade: '22',
    telefone: 'xx xxxx-xxxx',
    amigos: ['Yves', 'GoWon', 'Olivia Hye', 'Choerry'],
},
{
    nome: 'Yves',
    idade: '25',
    telefone: 'xx xxxx-xxxx',
    amigos: ['Haseul', 'Kim Lip', 'Heejin', 'JinSoul'],
},
{
    nome: 'GoWon',
    idade: '22',
    telefone: 'xx xxxx-xxxx',
    amigos: ['Chuu', 'Kim Lip', ' Yeojin', 'Choerry'],
}
]

const {nome, idade, telefone, amigos} = cadastro

// 12- Mostre no console o nome de um amigo de cada lista.

cadastro.forEach((membro) => {
    console.log(membro.amigos[1]);
  });
  