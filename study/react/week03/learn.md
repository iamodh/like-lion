## useEffect

컴포넌트의 생명주기(마운트, 언마운트, 업데이트)에 특정 이벤트를 등록하기 위해 사용하는 훅

### API

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

### useEffect의 역할

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

지정한 함수를 호출하여 반환받은 **결과값**을 내부에 저장(캐싱)하는 함수

### API

```jsx
const calculateValue = function(){ ... };
const cachedValue = useMemo(calculateValue, dependencies);
```

**calculateValue**: 캐싱할 값을 계산하여 반환하는 순수 함수

**dependencies**: 의존 객체 배열

계산 결과에 영향을 주는 `calculateValue` 함수의 인자값

이 배열의 값이 하나라도 변경되면 `calculateValue` 함수를 다시 호출하고, 변경되지 않으면 캐시된 값을 반환

빈 배열을 지정하면 의존성이 없으므로 매번 캐시된 값을 반환

### 사용 예시

```jsx
function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

/* ... */

// 기존 코드
// const count = countActiveUsers(users);

// useMemo를 사용한 코드
const count = useMemo(() => countActiveUsers(users), [users]);
```

`active` 상태인 `user`의 수를 구하는 `countActiveUser`에 `useMemo`를 사용해 주었다.

기존에는 `input`에 의해 `inputs` state가 변경될 때 마다 리렌더링에 의해 `countActiveUsers` 함수가 실행되었다.

`useMemo`를 사용하면 `countActiveUsers` 함수의 실행 값을 메모이제이션 하여, 의존성 배열의 `users`가 변경되지 않았으면 이전 값을 캐싱하고,

`users`가 `onToggle` 함수에 의해 변경되었을 때 함수가 실행되어 `count`의 값을 변경한다.

> 만약 의존성 배열이 빈 배열이면, **마운트 시점**의 함수의 실행 값이 계속 캐싱된다.

## useCallback

컴포넌트가 다시 렌더링되더라도 함수가 다시 생성되지 않고 캐시된 함수를 사용

### API

```jsx
const cachedFn = useCallback(fn, dependencies);
```

**fn**: 캐싱할 함수

**dependencies**: 의존 객체 배열

`useCallback`의 의존 객체 배열에는 캐싱할 함수 내부에서 사용되는 `props`, `state` 등 함수 외부에서 참조되는 모든 변수를 지정해주어야 한다. (클로저에 의해 이전 함수 스코프의 변수가 사용되어 함수 최신화가 안 될 수 있기 때문)

### 사용 예시

```jsx
const onCreate = useCallback(() => {
  const user = {
    id: nextId.current,
    username,
    email,
  };
  setUsers(users.concat(user));

  setInputs({
    username: "",
    email: "",
  });
  nextId.current += 1;
}, [users, username, email]);
```

함수 외부에서 참조하는 값 `users`, `username`, `email을` 의존성 배열에 넣어주었다.

(`user`, `id`는 내부에서 동적 생성하므로 안 넣어줘도 됨)

## React.memo

컴포넌트를 memoize한 후 리렌더링 될 때 **props가 변경되지 않으면** memoize된 컴포넌트를 반환

### API

```jsx
const MemoizedComponent = React.memo(SomeComponent, arePropsEqual?)
```

**SomeComponent**: memoize할 대상 컴포넌트

**arePropsEqual**: memoize된 컴포넌트를 반환할지, 컴포넌트를 다시 호출할지를 결정하는 함수 (선택)

**리턴값**: memoize된 SomeComponent

### React.memo를 사용하기 위한 조건

```jsx
function CreateUser({ username, email, onChange, onCreate }) {
  console.log("CreateUser 컴포넌트 렌더링");
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);
```

CreateUser의 props에서 username과 email는 변경되면 리렌더가 필요하다.

하지만 리렌더될 때 onChange와 onCreate까지 재생성되는데, 이 이유로 memoization이 동작하지 않는다.

따라서 onChange와 onCreate 함수는 useCallbak 훅을 사용하여 리렌더링시에도 재생성되지 않게 관리해야한다.

```jsx
const onChange = useCallback(
  (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  },
  [inputs]
);

const onCreate = useCallback(() => {
  const user = {
    id: nextId.current,
    username,
    email,
  };
  setUsers(users.concat(user));

  setInputs({
    username: "",
    email: "",
  });
  nextId.current += 1;
}, [username, email, users]);
```

위 코드에서는 onChange와 onCreate를 useCallback으로 감싸주었지만, 변수의 최신 값을 유지하기 위해 의존성 배열에 외부에서 참조하는 변수를 넣어주었다.

이때문에 users를 사용하는 함수(onToggle)에서 users를 변경하면 onCreate 함수는 재생성된다.

useState의 setter에서 **함수형 업데이트**를 해주어 useCallback의 의존성 배열을 빈 배열로 만들면 다른 함수에서 state를 변경하더라도 서로 영향을 주고받지 않을 수 있다.

```jsx
const onChange = useCallback((e) => {
  const { name, value } = e.target;
  setInputs((inputs) => ({
    ...inputs,
    [name]: value,
  }));
}, []);

const onCreate = useCallback(() => {
  const user = {
    id: nextId.current,
    username,
    email,
  };
  setUsers((users) => users.concat(user));

  setInputs({
    username: "",
    email: "",
  });
  nextId.current += 1;
}, [username, email]);
```

## useReducer

컴포넌트의 상태 관리가 복잡한 경우, 상태 업데이트 로직을 컴포넌트에서 분리시키기 위해 사용한다.

### API

```jsx
function reducer(state, action){ ... }
const [state, dispatch] = useReducer(reducer, initialArg, init?);
```

**매개변수**

- reducer: state와 action을 받아 새로운 상태를 반환해주는 함수
  - state: reducer에 전달 될 상태 값
  - action: 업데이트를 위한 정보 (객체)

**리턴값**

- state: 상태값이 저장된 getter
- dispatch: 상태값을 변경하는 setter 함수. dispatch에 전달한 인자값이 reducer의 두번째 인자값(action)으로 전달됨

### Action의 예시

```jsx
// 카운터에 1을 더하는 액션
{
  type: 'INCREMENT'
}
// 카운터에 1을 빼는 액션
{
  type: 'DECREMENT'
}
// input 값을 바꾸는 액션
{
  type: 'CHANGE_INPUT',
  key: 'email',
  value: 'tester@react.com'
}
// 새 할 일을 등록하는 액션
{
  type: 'ADD_TODO',
  todo: {
    id: 1,
    text: 'useReducer 배우기',
    done: false,
  }
}
```

> type 값을 대문자와 \_ 로 구성하는 컨벤션

### 예제

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```

**reducer**

reducer 함수는 switch 문 안에서 action에 따라 변경된 state를 리턴하고, 이 리턴 값은 useReducer에 의해 관리되어 다시 매개변수 state로 전달된다.

**useReducer**

useReducer는 dispatch 함수의 매개변수로 지정된 action을 주어 reducer 함수 안의 state를 변경하고, 이를 리턴값 state로 사용한다.

### reducer 함수 내부에서 불변성 지키기

reducer 함수는 순수함수여야하기 때문에 내부적으로 불변성을 지켜야 한다.

```jsx
import React, { useRef, useReducer, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} />
      <UserList users={users} />
      <div>활성사용자 수 : 0</div>
    </>
  );
}

export default App;
```

**onChange 동작 흐름**

1. `useReducer의` 매개변수로 전달된 `initialState`가 지정된다.

2. `dispatch` 함수에서 `action이` 전달된다. (`name`과 `value`는` input` node의 `attribute` 속성)

3. `reducer` 함수 내부에서 `action.type`의 케이스에 따라 변경된 `state`가 리턴된다. (불변성을 유지하기 위해 `state`를 spread하여 객체를 새로 생성했다.)

### useState vs useReducer

`useState`, `useReducer`를 자주 사용해보고 `useReducer`가 더 편리한 상황에 대한 발견이 필요하다.

`setter` 를 한 함수에서 여러번 사용해야 하는 일이 발생한다면 `useReducer`를 쓸까에 대한 고민을 해보는 것을 추천한다.

````jsx
setUsers(users => users.concat(user));
setInputs({
username: '',
email: ''
});
```jsx
````
