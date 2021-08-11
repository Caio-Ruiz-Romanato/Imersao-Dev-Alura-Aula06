//Todas variaveis com nomes dos jogadores
var caio = { nome: "Caio", vitorias: 2, empates: 2, derrotas: 1, pontos: 0 }
var karina = { nome: "Karina", vitorias: 2, empates: 2, derrotas: 1, pontos: 0 }
var isadora = { nome: "Isadora", vitorias: 2, empates: 2, derrotas: 1, pontos: 0 }
var pixu = { nome: "Pixu", vitorias: 2, empates: 2, derrotas: 1, pontos: 0 }
var neiudo = { nome: "Neiudo", vitorias: 2, empates: 2, derrotas: 1, pontos: 0 }
var micuim = { nome: "Micuim", vitorias: 2, empates: 2, derrotas: 1, pontos: 0 }

/*Podemos calcular os pontos de todos os jogadores executando a função e 
atribuir os pontos no campo (pontos) de cada objeto*/
caio.pontos = calculaPontos(caio)
karina.pontos = calculaPontos(karina)
isadora.pontos = calculaPontos(isadora)
pixu.pontos = calculaPontos(pixu)
neiudo.pontos = calculaPontos(neiudo)
micuim.pontos = calculaPontos(micuim)

/*Dentro da function, vamos criar uma variável chamada pontos,
atribuir o número de vitórias do jogador multiplicado por 3 e somar com número de empates*/
function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    /*Toda vez que essa função for executada, 
    queremos que ela devolva os pontos já calculados, por isso vamos adicionar o return pontos*/
    return pontos
}

//Vamos criar uma lista com todos os jogadores para ser exibidos de uma vez só
var jogadores = [caio, karina, isadora, pixu, neiudo, micuim]

exibirJogadoresNaTela(jogadores)

//Vamos criar uma função que exibe todos os jogadores passando nossa lista de jogadores
function exibirJogadoresNaTela(jogadores) {
    /*Como queremos exibir os objetos que estão no JS na pagina HTML, podemos usar o innerHTML, 
    vamos criar uma variável chamada html e juntar infos de vitória, empate, derrota e pontos*/
    var html = ""
    //Podemos criar um (for) -para exibir todos os jogadores na lista
    for (var i = 0; i < jogadores.length; i++) {
        /*Vamos varrer nossa lista incluíndo uma <tr> indicando uma linha e uma 
        <td> para cada atributo do jogador*/
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        /*Vamos adicionar na função que exibe os jogadores na tela os botões e 
        o concatenando o índice de cada jogador*/
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    /*Para posicionar cada jogador de forma correta, 
    criamos um elemento no HTML com o ID chamado tabelajogador, para exibir as infos da tabela, 
    vamos recuperar usando o elemento do HTML document.getElementById e 
    atribuir com o innerHTML a variável html que criamos*/
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

/*Vamos criar agora as funções adicionar vitoria, empate, derrota e 
pontos com o mesmo nome dos botões*/
function adicionarVitoria(i) {
    /*Agora que sabemos o jogador, vamos somar 1 na quantidade de vitórias, 
    adicionar o ponto no jogador e chamar a junção para exibir o jogador na tela*/
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}
