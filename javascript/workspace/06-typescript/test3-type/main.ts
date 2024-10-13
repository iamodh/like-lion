let data: number = 10;
// data = "hello";

let data1: any = 10;
data1 = "hello";

// 타입 유추 기법도 제공되지만
// js와 달리 한 번 유추된 타입이 고정된다.

let data2 = 20;
// data2 = "hello";

function myFun1<T>(arg1: T) {}

function myFun3<T, A>(arg1: T, arg2: A) {}
myFun3<number, string>(1, "hello");

type B = { id: number; name: string };
let b1: B;
let b2: B;
