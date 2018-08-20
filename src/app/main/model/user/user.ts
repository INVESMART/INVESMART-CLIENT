export class User {
  public name: String;
  public surname: String;
  public legajo: String;
  public birthDate: Date;

    constructor(name, surname, legajo, birthDate){
      this.name = name;
      this.surname = surname;
      this.legajo = legajo;
      this.birthDate = birthDate;
    }
}
