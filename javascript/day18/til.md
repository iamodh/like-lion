# 비동기 처리

## 1. Promise

비동기 함수 실행이 필요할 때 해당 함수의 실행 결과를 받겠다는 약속(Promise)를 담은 객체로 state와 result를 프로퍼티로 가지고 있다.

![image](https://github.com/user-attachments/assets/af6f76eb-7aff-4c32-b362-aa4f03bbf3b9)

1. Promise 객체의 생성자 매개변수에 지정하는 함수를 executor라고 한다.

2. executor는 비동기적으로 즉시 실행되고 그동안 다른 thread는 대기 상태가 되지 않는다. (Promise 객체를 return 받았기 때문에)

3. executor는 실행 결과를 전달하기 위해 매개변수로 resolve, reject 함수를 가진다.

4. resolve 함수 호출 시 매개변수에 지정된 값이 리턴된 promise 객체에서 then 메서드에 전달된다.

5. reject 함수가 호출 시 state는 rejected 상태가 되며 매개변수에 지정된 값이 catch 메서드에 전달된다.

6. 리턴된 promise 객체의 finally 메서드는 성공 여부에 상관없이 항상 실행된다.
