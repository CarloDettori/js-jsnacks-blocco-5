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
E' possibile compattare le due variabili findMarcoLanci e marcoLanciClass in un'unica costante chiamata findMarcoLanciClass che cerca un oggetto che ha la proprietà nome uguale a 'Marco Lanci' la proprietà ed estrae il valore della prorieta Class dello stesso oggetto?
una roba tipo come è scritto qui sotto (non funziona, è solo per rendere l'idea)

const findMarcoLanciClass = students.find(
  (element.name === 'Marco Lanci').class
)
console.log(findMarcoLanciClass)

*/