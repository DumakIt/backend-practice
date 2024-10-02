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

class flyMonster extends Monster {
  constructor(aaa) {
    super(aaa);
  }

  // 오버라이딩 (부모의 run을 덮어쓰기)
  run = () => {
    console.log("날라서 도망가자");
  };
}

class floorMonster extends Monster {
  // 오버라이딩 (부모의 run을 덮어쓰기)
  run = () => {
    console.log("띄어서 도망가자");
  };
}

const myMonster1 = new flyMonster(20);
myMonster1.attack();
myMonster1.run();

const myMonster2 = new floorMonster(40);
myMonster2.attack();
myMonster2.run();
