/*
	1: 1 ó punto
	2: 2abc
	3: 3def
	4: 4ghi
	5: 5jkl 
	6: 6mno
	7: 7pqrs
	8: 8tuv
	9: 9wxyz
	0: 0 ó espacio
	#: Activar o desactivar mayúsculas

	Por ejemplo la entrada:
	444#6666555522
	debía imprimir "Hola"

	Y además era cíclico, tipo 22 debía imprimir "a" pero 222222 también era "a"
	Y para mostrar letras de la misma tecla, usando espacios, ejemplo 2 22 222 debía imprimir 2ab
*/

const keyboard = { 0: ['0', ' '], 1: ['1', '.'], 2: ['2', 'a', 'b', 'c'], 3: ['3', 'd', 'e', 'f'], 
			4: ['4', 'g', 'h', 'i'], 5: ['5', 'j', 'k', 'l'], 6: ['6', 'm', 'n', 'o'], 
			7: ['7', 'p', 'q', 'r', 's'],  8: ['8', 't', 'u', 'v'], 
			9: ['9', 'w', 'x', 'y', 'z'], "#": "#" };

function parseCyclical(nCharacters, cont) {

	const turns = Math.floor(cont / nCharacters);
	const contParse = cont - turns * nCharacters;
	
	return contParse;
}

function write(keysPressed) {
	const characters = keysPressed.split('');
	let cont = 0;

	const word = characters.reduce((acc, character, index) => {
		if (character === characters[index+1]) cont++;
		else if (character !== ' ' && character !== '#') {
			cont = cont > keyboard[character].length 
			? parseCyclical(keyboard[character].length, cont) : cont;
			
			const key = keyboard[character][cont];

			cont = 0;
			acc += characters[index+1] === '#' ? key.toUpperCase() : key;
		}
	
		return acc;

	}, '');

	return word;
}

write("6666# 6622222222227777 00777722888#555500888822777744227777777777#11");
