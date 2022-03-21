const tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let separarStringEConverterEmNumero = (id) => {
    const arr = []
    let number1 = Number(id.substring(0, 1));
    let number2 = Number(id.substring(1));
    arr.push(number1);
    arr.push(number2);
    return arr;
}

function verificarSeTemPeca(a, b) {
    const element = tabuleiro[a][b];
    return element === "" ? true : false;
}

function colocarPecaNotabuleiro(id) {
    const lugares = separarStringEConverterEmNumero(id)
    let retorno = verificarSeTemPeca(...lugares);
    if (retorno === true) {
        tabuleiro[lugares[0]][lugares[1]] = 1;
        const elSelect = document.getElementById(id);
        elSelect.innerHTML = "<h1>X</h1>";
        verificarSeGanhou();
        jogoMaquinha();
    } else {
        alert("Este local já tem peça.\nPor favor escolha outro Local");
    }
}

let inicioDoJogo = (element) => {
    const id = element.id;
    colocarPecaNotabuleiro(id)
}

function jogoMaquinha() {

    let lugar = gerarLugar();
    console.log(lugar)
    tabuleiro[lugar[0]][lugar[1]] = 2;
    let lugarID = arrayParaID(...lugar)
    let elDocument = document.getElementById(lugarID);
    setTimeout(()=>{
        elDocument.innerHTML = "<h1>O</h1>";
    },1000)
    
    verificarSeAMaquinaGanhou()
}

function gerarLugar() {
    let retorno = "";
    let arr = [];
    let lugarI = "";
    let lugarJ = "";
    do {
        lugarI = Math.floor(Math.random() * 3);
        lugarJ = Math.floor(Math.random() * 3);
        retorno = verificarSeTemPeca(lugarI, lugarJ)
    } while (retorno === false);

    arr.push(lugarI)
    arr.push(lugarJ)

    return arr;
}

function arrayParaID(a, b) {
    return (`${a}${b}`)

}

function verificarSeGanhou() {
    if ( //palyer 1
        tabuleiro[0][0] === 1 && tabuleiro[0][1] === 1 && tabuleiro[0][2] === 1 ||
        tabuleiro[1][0] === 1 && tabuleiro[1][1] === 1 && tabuleiro[1][2] === 1 ||
        tabuleiro[2][0] === 1 && tabuleiro[2][1] === 1 && tabuleiro[2][2] === 1 ||
        tabuleiro[0][0] === 1 && tabuleiro[1][0] === 1 && tabuleiro[2][0] === 1 ||
        tabuleiro[0][1] === 1 && tabuleiro[1][1] === 1 && tabuleiro[2][1] === 1 ||
        tabuleiro[0][2] === 1 && tabuleiro[1][2] === 1 && tabuleiro[2][2] === 1 ||
        tabuleiro[0][0] === 1 && tabuleiro[1][1] === 1 && tabuleiro[2][2] === 1 ||
        tabuleiro[2][0] === 1 && tabuleiro[1][1] === 1 && tabuleiro[0][2] === 1) {
        ganhou();
    }
}

function verificarSeAMaquinaGanhou() {
    if ( //palyer 1
        tabuleiro[0][0] === 2 && tabuleiro[0][1] === 2 && tabuleiro[0][2] === 2 ||
        tabuleiro[1][0] === 2 && tabuleiro[1][1] === 2 && tabuleiro[1][2] === 2 ||
        tabuleiro[2][0] === 2 && tabuleiro[2][1] === 2 && tabuleiro[2][2] === 2 ||
        tabuleiro[0][0] === 2 && tabuleiro[1][0] === 2 && tabuleiro[2][0] === 2 ||
        tabuleiro[0][1] === 2 && tabuleiro[1][1] === 2 && tabuleiro[2][1] === 2 ||
        tabuleiro[0][2] === 2 && tabuleiro[1][2] === 2 && tabuleiro[2][2] === 2 ||
        tabuleiro[0][0] === 2 && tabuleiro[1][1] === 2 && tabuleiro[2][2] === 2 ||
        tabuleiro[2][0] === 2 && tabuleiro[1][1] === 2 && tabuleiro[0][2] === 2) {
        maquinaGanhou();
    }
}

function ganhou() {
    setTimeout(() => {
        alert("Você Ganhou")
    }, 500);
    setTimeout(() => {
        location.reload()
    }, 1000)
}

function maquinaGanhou() {
    setTimeout(() => {
        alert("Você perdeu LOL")
    }, 500);
    setTimeout(() => {
        location.reload()
    }, 1500)
}
console.log(tabuleiro)