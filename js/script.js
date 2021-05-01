/* 
Milestone 1
Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

Milestone 2
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

Milestone 3
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.
 */

//funzioni
const printToPage = ( (object, keyObject) => {
  
  let html = `
  <li class="${object.color}">
    <i class="fas fa-cat"></i>
    <i class="fas fa-ribbon ${keyObject}"></i>
    <span>${object.name}</span>
  </li>
  `;
  return html;
})


//creo un array dei gatti
const cats = [
  {
    name: 'Fluffers',
    age: 1.5,
    color: 'grey',
    gender: 'male'
  },
  {
    name: 'Felix',
    age: 1,
    color: 'brown',
    gender: 'male'
  },
  {
    name: 'Snow Ball',
    age: 2,
    color: 'black',
    gender: 'female'
  },
  {
    name: 'Garfield',
    age: 0.5,
    color: 'orange',
    gender: 'male'
  },
  {
    name: 'Trix',
    age: 3,
    color: 'red',
    gender: 'female'
  },
  {
    name: 'Bijou',
    age: 4,
    color: 'green',
    gender: 'female'
  }
];


$(document).ready(function(){

  //milestone 1 con il ciclo forEach svolgo la funzione printToPage che mi appende la lista dentro l'ul
  cats.forEach( (cat) => {
    $('#cats-1 ul').append(printToPage(cat));
  });

  //ho definito in due costanti il colore del ribbon
  const blue = 'blue';
  const pink = 'pink'

  //milestone 2
  //faccio un ciclo map() per estrapolare l'array cats e modificarlo aggiungendo dentro ogni oggetto cat un oggetto ribon contente proprieta color e opacity
  const ribbonCats = cats.map( (cat) => {

    //con il ternay(if di ES6) pongo la condizione che se la proprieta' gendere di cat e' 'male' il colore e' blue. Altrimenti pinki
     const ribbonColor = (cat.gender === 'male') ? blue : pink;


      //con il return clono l'oggetto cat con in aggiunta l'a proprieta'/oggetto ribbon contente le proprieta opacity e ribbonColor
     return {// chiedere chiarimento
       ...cat,
      ribbon:{
        ribbonColor
      }}
    });


    //filtro i gatti maschi e i gatti femmina in 2 array
    const maleCats = ribbonCats.filter((cat)=> cat.gender=== 'male');
    const femaleCats = ribbonCats.filter((cat)=> cat.gender=== 'female');

    
    maleCats.forEach((cat) => $('#cats-male ul').append(printToPage(cat, cat.ribbon.ribbonColor)));

    femaleCats.forEach((cat) => $('#cats-female ul').append(printToPage(cat, cat.ribbon.ribbonColor)));
    

    //milestone 3
    //clono in un nuovo array l'array femaleCats e maleCats
    const oderedCats = [...femaleCats, ...maleCats];
    oderedCats.forEach((cat) => $('#cats-ordered ul').append(printToPage(cat, cat.ribbon.ribbonColor)));
    
    console.log(oderedCats);
  
});
