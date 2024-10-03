// generic 타입
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result = getGeneric<string, number, boolean>("철수", 123, true);

// generic 타입 - 2
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result2 = getGeneric2<string, number, boolean>("철수", 123, true);

// generic 타입 - 3
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result3 = getGeneric3<string, number, boolean>("철수", 123, true);

// generic 타입 - 4
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result4 = getGeneric4("철수", 123, true);
