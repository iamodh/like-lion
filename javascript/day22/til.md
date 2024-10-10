# File

## 브라우저에 파일 출력

### 1. input

```js
<div>
    <input type="file" id="fileInput1" />
</div>
<div>
    <input type="file" id="fileInput2" multiple />
</div>
<div>
    <input type="file" accept="image/*" />
    <input type="file" accept=".txt, .jpg" />
</div>
<ul id="results"></ul>
```

#### attributes

- multiple: 한 번에 여러개의 파일을 받을 수 있다.

- accpet: 특정 타입 또는 확장자의 파일만 받을 수 있다.

획득한 파일은 input DOM 노드의 files속성에 FileList 오브젝트에 저장되며

각 file에 대하여 name, size, lastModified 속성을 이용할 수 있다.

### 2. FileReader

#### 메소드

- readAsText(): 파일 내용을 텍스트로 읽음

- readAsImage()

## 2. 파일 업로드

### 1. form

file type의 input을 전송할 때의 method는 post만 가능하다.

form의 attribute에 encType 값에 multipart/form-data 를 주어야 한다. (단순한 json 형태로 전달할 수 없기 떄문이다.)

하지만 동기통신이기 때문에 파일의 용량이 큰 경우 전체 프로그램의 동작에 영향을 끼친다.

### 2. FormData

FormData에 파일을 담은 후 Ajax의 비동기 통신으로 파일을 업로드 하는 방식이다.

# Typescript

## 1. 개발환경 설정

#### 오래된 방법

1. typescript 설치

typescript를 사용할 폴더에서 패키지를 설치한다.

```git
npm i typescript
```

2. 컴파일

ts 파일을 js로 컴파일한다.

```git
npx tsc main.js
```

#### ts.config 활용

1. package.json 파일 생성

프로젝트가 npm으로 관리되도록 초기화한다.

```git
npm init
```

2.  ts 환경 파일 생성과 설정

```git
npx tsc -init
```

```json
{
  "compilerOptions": {
    // 컴파일된 js 파일을 생성할 위치
    "outDir": "./build",
    // 컴파일 대상에 자바스크립트 파일을 포함 (es6 => es5)
    "allowJs": true,
    // es6 스타일의 모듈화 방식 사용
    "esModuleInterop": true,
    // json 파일을 코드에서 객체로 바로 이용
    "resolveJsonModule": true,
    // ts -> js 컴파일 시 js.map 파일 자동 생성
    // ts 디버깅을 위해 만들어 주는 것이 좋다. (에러 발생한 줄 매핑)
    "sourceMap": true,
    // any 타입 허용하지 않는다.
    "noImplicitAny": true,
    // 컴파일된 js 코드 스타일
    "target": "ES5",
    // jsx 구문을 react 형태의 js로 변형
    "jsx": "react",
    // 모듈화 방식을 target과 맞추어 설정
    "module": "CommonJS"
  },
  // transfile 시킬 대상 폴더 파일
  "include": ["./src/**/*"],
  // transfile 제외 시킬 파일
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

3. transfile 생성

```git
npx tsc
```
