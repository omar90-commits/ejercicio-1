function multiplicar(a, b) {

	let result = 0;

	for (let i = 0; i < Math.abs(b); i++) {
		result += a;
	}

	return  b < 0 ? result * -1 : result;
}

// console.log(multiplicar(7, -4)); ----> a.

function letraRepetida(cadena) {
	const quitarEspacios = cadena.replace(/[.!?¿]/g, '');
	const arrCaracter = quitarEspacios.split(' ');

	const dict = arrCaracter.reduce((dict,letra) => {
		letra in dict ? ++dict[letra] : dict[letra] = 1;

		return dict;
	},{});
	
	return Object.entries(dict).reduce((el1, el2) => el1[1] > el2[1] ? el1 : el2);
}

const reesult = letraRepetida('omar raul raul raul raul vargas. jaimes! omar jaimes jaimes');
// console.log(reesult[0])

const mayorNumeroArray = arr => (arr.reduce((mayor, el) => el > mayor ? el : mayor, 0));
const mayorNumero = mayorNumeroArray([-500, -6, 2, 1, 7, 2 ,5 ,4, -8]);
// console.log(mayorNumero)

function limpiar(arr) {
	const limpiarArr = arr.filter((el) => el); 

	return limpiarArr;
}

const limpiarArr = limpiar([0, 23, undefined, false, 5, null, 1, undefined]);
// console.log(limpiarArr)

function paliendromo(str) {
	const quitarEspacios = str.replace(/[\s]/g, '').toLowerCase();

	return quitarEspacios.split('').reverse().join('') === quitarEspacios;
}

const cadena = paliendromo('Son mulas o civicos alumnos');
console.log(cadena)