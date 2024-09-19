# 유효성 검사

```js
function isValidCheck() {
  let idNode = document.getElementById("id");
  id = idNode.value;

  if (id === null || id.trim().length === 0) {
    // 입력이 안 된 경우
    isIdValid = false;
    idErrorMsgNode.innerHTML = "아이디는 필수 입력입니다.";
  }
}
```

# 배열

## 1. forEach

```js
const array = ["a", "b", "c", "d"];

array.forEach((data, index) => {
  console.log(`array[${index}] = ${data}`);
});
```

![image](https://github.com/user-attachments/assets/0d8fcfbf-23dd-48ae-8259-6391123ab7b1)

## 2. concat

앞의 배열에 뒤 배열을 이어 붙여 새로운 배열을 만든다.

```js
let array3 = array1.concat(array2);
```

## 3. 데이터 추가

```js
array3.push(100); // 뒤에 추가
array3.unshift(200); // 앞에 추가
```

## 4. 데이터 삭제

```js
array3.pop(); // 뒤 삭제
array3.shift(); // 앞 삭제
```

## 5. splice

```js
let array = [10, 20, 30, 40];

// 중간에 삽입
array.splice(2, 0, "hello");
console.log(array); // 10, 20, "hello", 30, 40

// 삭제 후 삽입
array.splice(2, 2, 100, 200);
console.log(array); // 10, 20, 100, 200, 40
```

## 6. slice

배열에서 데이터를 획득하여 새로운 배열을 만든다.

`slice`의 매개변수는 인덱스가 아닌 **위치**를 의미한다.

```js
let array = [10, 20, 30, 40];

let result2 = array.slice(1, 4);
console.log(result2); // 20, 100, 200
```
