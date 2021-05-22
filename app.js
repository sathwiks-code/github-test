const btnT = document.getElementById('btnT');
const btnU = document.getElementById('btnU');
const txt1 = document.getElementById('example1');
const txt2 = document.getElementById('example2');
const txt3 = document.getElementById('example3');

btnT.addEventListener('click', () => {
    txt1.style.display = 'none';
    txt2.style.display = 'none';
    txt3.style.display = 'none';
})
btnU.addEventListener('click', () => {
    txt1.style.display = 'block';
    txt2.style.display = 'block';
    txt3.style.display = 'block';
})
