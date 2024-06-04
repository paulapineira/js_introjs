const valor = document.querySelector('.precio-inicial');
const btnsuma = document.querySelector('#suma');
const btnresta = document.querySelector('#resta');
const cantidad = document.querySelector('.cantidad');
const total = document.querySelector('.valor-total');

const precio = 400000;
let cant = 0;
let tot = precio * cant;

total.innerHTML = tot;
valor.innerHTML = precio;
cantidad.innerHTML = cant;


btnsuma.addEventListener("click", ()=>{
    cant = cant + 1;
    tot= precio * cant;
    cantidad.innerHTML = cant;
    total.innerHTML = tot;
} );


btnresta.addEventListener("click",()=>{
    if(cant > 0) {
        cant = cant - 1;
        tot= precio * cant;
        cantidad.innerHTML = cant;
        total.innerHTML = tot;
}else {
        alert("No puede seleccionar menos de 0 produto");
    }
});