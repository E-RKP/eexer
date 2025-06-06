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
  constructor(name, cognome, età, corso){
    super(name, cognome, età)

    this.corso = corso
  }


}