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
const printToPage = ( (object) => {
  html = $('.box ul').append(`
  <li class="${object.color}">
    <i class="fas fa-cat"></i>
    <span>${object.name}</span>
  </li>
  `);
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
    color: 'blue',
    gender: 'female'
  }
];


$(document).ready(function(){


  cats.forEach((cat) => {
    printToPage(cat);
  });

  
});
