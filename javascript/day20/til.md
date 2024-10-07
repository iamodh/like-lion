# Axios

## 1. config

공통적인 config가 반복된다면 한 번만 설정 후 재사용 할 수 있다.

1. defaults에 추가

```js
axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.timeout = 2000;

axios.post(`post_test`, {
  name: "홍길동",
  age: 20,
});
```

http://localhost:3000/post_test에 post 요청

2. custom axio 객체 생성

```js
const myAxios = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 2000,
});

myAxios.post(`post_test`, {
  name: "홍길동",
  age: 20,
});
```

# Storage

## 1. 로컬 스토리지

동일한 오리진 내에서 데이터 공유

창이 닫혀도 데이터 유지

## 2. 세션 스토리지

오리진이 같아도 브라우저 창이 다르면 데이터 공유 불가

=> 로그인 정보 등 저장

> 스토리지의 키 값은 문자열로 저장된다. (객체를 저장하려 해도 문자열로 변환해야함)

> 데이터 삭제는 removeItem이나 clear 메서드를 사용한다.
