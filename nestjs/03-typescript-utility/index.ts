interface IProfile {
  name: String;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입 (전부 필수X로 만듬)
type aaa = Partial<IProfile>;

// 2. Required 타입 (전부 필수로 만듬)
type bbb = Required<IProfile>;

// 3. Pick 타입 (IProfile 안에서 원하는 것만 골라서 타입 만듬)
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입 (IProfile 안에서 원하는것만 뺴서 타입 만듬)
type ddd = Omit<IProfile, "school">;

// 5. Record 타입 (key가 eee의 내용이고 value가 IProfile인 타입 생성)
type eee = "철수" | "영희" | "훈이"; // Union 타입
let child1: eee = "영희"; // 철수, 영희 훈이만 됨

type fff = Record<eee, IProfile>; // Record 타입

// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myProfile: ggg = "name";

// 7. type, interface 차이
// interface는 선언병합 가능
interface IProfile {
  candy: number; // 선언 병합으로 추가됨
}

let profile1: IProfile = {
  candy: 10,
  age: 1,
  name: "123",
  school: "dasdsa",
};

// 8. 배운것 응용
let profile2: Partial<IProfile> = {
  candy: 10,
};
