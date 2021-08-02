function insert(){
    let elemento = document.getElementById('texto');
    document.getElementById('texto').innerHTML = "Um grande círculo!!";
}

function mudarCor(){
    document.getElementById('folha').style.backgroundColor = "rgb(66, 170, 060)";
}

function aumentarTamanho(){
    document.getElementById('quadrado').style.cssText =
        "width: 400px;"
        "height: 600px;"
        "justify-content: center;"
        "align-items: center;"
        "text-align: center;"
}
