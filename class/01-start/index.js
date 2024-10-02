// class Date {

//   qqq = 3

//   getFullTeat(){

//   }

//   getMonth(){

//   }
// }

class Monster {
  power = 10;

  constructor(qqq) {
    this.power = qqq;
  }

  attack = () => {
    console.log("공격");
    console.log("공격력" + this.power);
  };

  run = () => {
    console.log("도망");
  };
}

const myMonster = new Monster(20);
myMonster.attack();
myMonster.run();
