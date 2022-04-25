// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão dentro do objeto

const filme = {
  nome: 'O bento',
  tipo: 'Comédia',
  data: 2017,
  diretor: 'Robinho',
  mes: 07,
  participantes: 'Outros'
}
exibirString(filme);
function exibirString(obj) {
  for (letra in obj)
    if (typeof obj[letra] === 'string')
      console.log(letra, obj[letra])
}



