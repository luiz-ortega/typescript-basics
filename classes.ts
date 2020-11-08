abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  private level: number;

  get getLevel() {
    console.log("----- GET ----");
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }
}

// const john = new UserAccount("John", 30);
// console.log(john);
// console.log(john.age);
// john.logDetails();

const joe = new CharAccount("Joe", 45, "johnmaster", 80);
// joe.nickname = "another nickname";
// joe.level = 100;

joe.logDetails();
