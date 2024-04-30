// Exercícios com NodeList (Browser) - (Video aula 57)

const div = document.querySelector('.paragrafos');
const paragrafos = div.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
// console.log(backgroundColorBody);

for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
}