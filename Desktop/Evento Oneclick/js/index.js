let iniciar = document.getElementById('iniciar');

iniciar.addEventListener('click', function (){
    if (iniciar.textContent === 'Iniciar sesión') {
        iniciar.textContent = 'Cerrar sesión';
    } else {
        iniciar.textContent = 'Iniciar sesión';
    }
});

let agregar = document.querySelector('#agregar');

agregar.addEventListener('click', function(){
    this.closest('#agregar').remove();
});

let mgUno = document.querySelectorAll('#mgUno');

for(let i = 0; i < mgUno.length; i ++){
    mgUno[i].addEventListener("click", function(){
        alert('was liked Gato Atigrado');

        let numeros = document.querySelector("#numeroUno");
        let valorActual = numeros.textContent;
        valorActual ++;
        numeros.textContent = valorActual
    })
}

let mgDos = document.querySelectorAll('#mgDos');

for(let i = 0; i < mgDos.length; i ++){
    mgDos[i].addEventListener("click", function(){
        alert('was liked Golden Retriever');

        let numeros = document.querySelector("#numeroDos");
        let valorActual = numeros.textContent;
        valorActual ++;
        numeros.textContent = valorActual
    })
}

