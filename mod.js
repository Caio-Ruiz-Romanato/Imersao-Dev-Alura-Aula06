var jogador1 = {
    nome: "Jogador1",
    vitorias: 2,
    empates: 2,
    derrotas: 1,
    pontos: 2
}

var jogador2 = {
    nome: "Jogador2",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 1
}

var jogador3 = {
    nome: "Jogador3",
    vitorias: 1,
    empates: 2,
    derrotas: 1,
    pontos: 8
}

var jogador4 = {
    nome: "Jogador4",
    vitorias: 1,
    empates: 2,
    derrotas: 1,
    pontos: 8
}

var jogador5 = {
    nome: "Jogador5",
    vitorias: 1,
    empates: 2,
    derrotas: 1,
    pontos: 8
}


jogador1.pontos = calculaPontos(jogador1)
jogador2.pontos = calculaPontos(jogador2)
jogador3.pontos = calculaPontos(jogador3)
jogador4.pontos = calculaPontos(jogador4)
jogador5.pontos = calculaPontos(jogador5)

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [jogador1, jogador2, jogador3, jogador4, jogador5]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for (var i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onclick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onclick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onclick='adicionarDerrota(" + i + ")'>Derrota</button></td><tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.empates = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.derrotas = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}
