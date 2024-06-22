document.addEventListener('DOMContentLoaded', () => {
    const nombreElemento = document.getElementById('nombre');
    let nombre = localStorage.getItem('nombre');

    if (!nombre) {
        nombre = prompt("Dime el nombre que quieras") || '';
        localStorage.setItem('nombre', nombre);
    }

    nombreElemento.textContent = nombre;
});
