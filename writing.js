// efecto maquina de escribir
let text = document.querySelector('.text');

window.onload(() => {

    let writing = str => {

        let arrfromstr = str.split("");
        let i = 0;
        let print = setInterval(() => {
            
            text.innerHTML += arrfromstr[i];
            i++;
            
        }, 200);
    }

    writing("FRONTEND DEVELOPER");
})