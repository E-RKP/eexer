class Persona{
  constructor(name, cognome, età){

    this.nome = name,
    this.cognome = cognome
    this.età = età
  }

  saluta(){
    return `Ciao, sono ${this.nome} ${this.cognome} ed ho ${this.età}`
  }

  invecchia(){
    this.età = this.età+1
  }
}


const p1 = new Persona('Mario', 'Rossi', 19)
console.log(p1.saluta())
p1.invecchia();
console.log(p1.età)

class Student extends Persona{
  constructor(nome, cognome, età, corso){
    super(nome, cognome, età)

    this.corso = corso
  }

  infoStudente (){
    return `Ciao, sono ${this.nome} e studio ${this.corso}`
  }
}

const sd = new Student ('Pippo', 'Coglione', 20, 'matematica')
console.log(sd.infoStudente())


class classeScuola{
  constructor(studenti){
    this.studenti = studenti
  }
  
  aggiungiStudente(nome){
    for (let i=0; i<this.studenti.length;i++){
      if (this.studenti[i] === nome){
        console.log('Studente già esistente')
      }
    }
    this.studenti.push(nome)

  }

  get nomeCompleto (){
    for (let i=0; i<this.studenti.length;i++){
       console.log(this.studenti[i])
    }
  }
    
}

const classe1 = new classeScuola(['Marco', 'Pippo', 'Mario', 'Coglione', 'Maria'])
classe1.aggiungiStudente('Luca')
console.log(classe1.studenti)
classe1.nomeCompleto