let formulario = document.getElementById("formulario");
let contenedorResgistro = document.querySelector(".registro");
let enviar = document.getElementById("enviar");




const validarCorreo = () => {
    let expresion = {correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
    let input = document.getElementById("input");
    let correoValue = input.value

    if(expresion.correo.test(correoValue)){
        contenedorResgistro.classList.remove("input-incorrecto");
        correo = true;
    }else{
        contenedorResgistro.classList.add("input-incorrecto");
        correo = false;
    }

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        if(correo){
            formulario.reset();
        }
    
    })

}


enviar.addEventListener("click", validarCorreo)