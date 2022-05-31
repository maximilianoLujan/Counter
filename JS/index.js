const $micontador = document.querySelector(".mispan");
console.log(typeof(parseInt($micontador.textContent,10)))

function sumarUno(a=""){
    return ((parseInt(a,10)+1).toString(10));
}
function restarUno(a=""){
    return ((parseInt(a,10)-1).toString(10));
}


document.addEventListener("click",(e)=>{
    if ((e.target.className) === "bincrease botonera1"){
        $micontador.textContent = sumarUno($micontador.textContent);
    }
    if ((e.target.className) === "bdecrease botonera1"){
        if ($micontador.textContent === "0"){
            alert("No puede haber numeros negativos")
        }else $micontador.textContent = restarUno($micontador.textContent);
    }
    if ((e.target.className) === "breseat botonera1"){     
        $micontador.textContent = 0;
    }
    if ((e.target.className) === "botonera2"){
        alert("Hay que crear una nueva")
    }
})