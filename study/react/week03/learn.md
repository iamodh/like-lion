## useEffect

### 설명

컴포넌트의 생명주기(마운트, 언마운트, 업데이트)에 특정 이벤트를 등록하기 위해 사용하는 훅

### 사용

```jsx
useEffect(setup, dependencies?);
```

**setup**: 호출되는 함수

`setup` 이 리턴하는 함수를 `cleanup` 이라고 부르며,컴포넌트가 업데이트 되거나, 언마운트될 때 실행된다. (`cleanup` 이 먼저 실행되고 setup이 실행된다.)

**dependencies**: 의존 객체 배열 (선택)

`dependencies` 의 유무에 따라 `setup` 이 호출되는 시기가 결정된다.

1. 생략되었을 때: 컴포넌트 업데이트 마다 setup이 실행됨

2. 빈 배열일 때: 컴포넌트 마운트에 setup이 실행됨

3. 값이 있을 때: 값이 바뀔 때 마다 setup이 실행됨

### 역할

```jsx
useEffect(() => {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => setData(data));
}, []);
```

비동기 처리와 같은 side effect를 발생시키는 작업을 useEffect 내에서 관리하여, 컴포넌트의 로직을 두 가지로 명확히 구분할 수 있다:

**렌더링 로직 (순수 함수)**

props와 state를 받아 UI를 계산하고 반환
동일한 입력에 대해 항상 동일한 출력
외부 상태를 변경하지 않음

**side effects (부수 효과)**

API 호출, 구독 설정, DOM 직접 조작 등
useEffect 내에서 격리되어 관리
렌더링 이후에 실행되어 렌더링 성능에 영향을 주지 않음

## useMemo

### 설명

지정한 함수를 호출하여 반환받은 **결과값**을 내부에 저장(캐싱)하는 함수

### 사용

```jsx
const calculateValue = function(){ ... };
const cachedValue = useMemo(calculateValue, dependencies);
```

**calculateValue**: 캐싱할 값을 계산하여 반환하는 순수 함수

**dependencies**: 의존 객체 배열

계산 결과에 영향을 주는 `calculateValue` 함수의 인자값

이 배열의 값이 하나라도 변경되면 `calculateValue` 함수를 다시 호출하고, 변경되지 않으면 캐시된 값을 반환

빈 배열을 지정하면 의존성이 없으므로 매번 캐시된 값을 반환

### 역할
