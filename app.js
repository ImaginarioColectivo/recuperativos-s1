/* EJERCICIOS RECUPERATIVOS 
Problema dificil 1 
Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
arr = [1, 2, 3, 4, 5, 6, 7]
n = 3
retorna [5, 6, 7, 1, 2, 3, 4]
*/

function rotateRight(arr, n){
// uso for para recorrer el array, y la condicion es que i sea menor que n, y el ++ para que vaya incrementando los elementos que iran rotando a la derecha.
	for(i=0; i<n;i++){
// con el metodo pop elimino el ultimo elemento del array y lo devuelve. 
		var last = arr.pop();
// con el metodo unshift agrego uno o mas elementos al inicio del array.
		arr.unshift(last);
	}
// retorna el nuevo array
	return arr;
	};

//PRUEBO CON: 

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log (rotateRight (arr,6));

/* EJERCICIOS RECUPERATIVOS 
Problema dificil 5 
Dado un arreglo de números positivos, encontrar el elemento más pequeño e intercambiarlo por el primer elemento del arreglo.
arr = [3, 2, 1]
retorna [1, 2, 3]
*/

function smallest (arr){
// creo la variable less para encontrar el indice del elemento mas pequeno.
	var minorIndex = arr.indexOf(Math.min(...arr));
// creo la variable first para guardar el primer elemento del array.
	var first = arr [0];
// creo la variable minor parta guardar el valor del elemento mas pequeno. 
	var minor = arr[minorIndex];
// al indice 0 le asignamos el valor del elemento mas pequeno.
 	arr [0] = minor;
// el elemento mas pequeno guardado al inicio de la funcion se posiciona en el inicio del array.
	arr [minorIndex] = first;
// retorna el nuevo array
	return arr;
	};

//PRUEBO CON: 

var arr = [7, 6, 5, 4, 3, 2, 1];
console.log(smallest(arr));