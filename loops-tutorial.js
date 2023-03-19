

//FOR ARRAY
array = [1, 2, 3]
for (let i = 0; i < array.length; i++) {
    const elemento = array[i];
    console.log(elemento)
}

//FOR IN
const objecto = { a: 1, b: 2, c: 3 };
for (const propiedad in objecto) {
    console.log(`${propiedad}: ${objecto[propiedad]}`);
}

//FOR OF
const mascotas = ['perro', 'gato', 'loro'];
for (const mascota of mascotas) {
    console.log(mascota);
}

//WHILE
let numero = 0;
while (numero < 3) {
    numero++;
    console.log(numero)
}

//DO WHILE
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

//BREAK & CONTINUE 
let vuelta = 1
let texto = ''
while(true){
    vuelta++
    if (vuelta == 6) break
    if (vuelta == 3) continue
    texto += vuelta + ''
}
console.log(texto)

