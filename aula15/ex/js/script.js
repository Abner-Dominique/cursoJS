const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo'); 
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5} <br></br></p>`; 
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} <br></br> <p/>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} <br></br> </p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)} <br></br> </p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)} <br></br> </p>`; 
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} <br></br></p>`; 