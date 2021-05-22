const btnT = document.getElementById('btnT');
const btnU = document.getElementById('btnU');
const txt = document.getElementById('example');

btnT.addEventListener('click', () => {
    txt.style.display = 'none';
})
btnU.addEventListener('click', () => {
    txt.style.display = 'block';
})
