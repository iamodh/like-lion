interface MyInterface {
  id: number;
  name: string;
}

let d1: MyInterface = { id: 10, name: "kim" };

interface MyInterface3 extends MyInterface {
  age: number;
}

let d2: MyInterface3 = { id: 20, name: "Lee", age: 10 };

// number를 매개변수로 받아 number를 리턴하는 함수 인터페이스
interface MyFunType {
  (arg1: number): number;
}

function t1(argFun: MyFunType) {}

t1((no: number) => 10);

interface MyClassInterface1 {
  data1: number;
  some1(): boolean;
}

interface MyClassInterface2 {
  data2: number;
  some2(): boolean;
}

class MyClass2 implements MyClassInterface1, MyClassInterface2 {
  data1: 10;
  data2: 20;
  some1(): boolean {
    return true;
  }
  some2(): boolean {
    return false;
  }
}
