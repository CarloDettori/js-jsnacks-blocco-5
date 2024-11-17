const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];



const findMarcoLanci = students.find(
  (element) => element.name === 'Marco Lanci'
)

const marcoLanciClass = findMarcoLanci.class;
console.log(marcoLanciClass)

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

/*
const findMarcoLanciClass = students.find(
  (element.name === 'Marco Lanci').class
)

console.log(findMarcoLanciClass)
*/