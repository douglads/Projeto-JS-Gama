const livros = require('./database')

const readLine = require('readline-sync')

const entradaInicial = readLine.question('Deseja buscar um livro?S/N ')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponiveis')
    console.log('Produtividade e estilo de vida,', 'História Brasileira,', 'Américas,', 'Técnologia,', 'e Estilo de vida')

    const entradaCategoria = readLine.question('Qual categoria você deseja? ')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a, b) => a.pagina - b.pagina)
    console.log('Esses são todos os livros disponiveis')
    console.table(livrosOrdenados)

}