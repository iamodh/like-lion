# Tailwind CSS Intro

## 1. 환경 설정

#### 설치

```git
npm install -D tailwindcss

npx tailwindcss init
```

https://tailwindcss.com/docs/installation

#### config 파일 수정

```js
// tailwind.config.js
content: ["./src/**/*.html"],
```

`scr` 밑의 모든 서브 디렉토리 중 `html` 확장자를 가진 파일들을 컴파일하라는 의미이다.

#### 디렉티브 추가

```css
/* src/styles.input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### html 연결

```html
<!-- src/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./styles/output.css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="underline">Hello world!</h1>
  </body>
</html>
```

#### 빌드

```git
npx tailwindcss -i ./src/styles/input.css -o ./src/styles/output.css
```

#### 이름 변경

`output.css`를 `main.css`로 이름을 바꾼 후 `html` 파일의 `link` 요소 `href` 속성 수정

#### 재빌드

```js
// package.json
{
"scripts": {
    "dev": "npx tailwindcss -i ./src/styles/tailwind.css -o  ./src/styles/main.css"
  },
}
```

`package.json`에 스크립트 추가 후에 `npm run dev`로 명령어 실행

#### Tailwind CSS IntelliSence 익스텐션 설치

익스텐션 설치 후 기본 설정

```js
// .vscode/settings.json
{
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "tailwindCSS.includeLanguages": {
    "plaintext": "html"
  }
}

```

#### 자동 재빌드

```json
"scripts": {
    "dev": "npx tailwindcss -i ./src/styles/input.css -o  ./src/styles/main.css",
    "watch": "npm run dev -- --watch"
},
```

#### live-server 패키지 사용

```git
npm i -D live-server
```

```json
// package.json
"serve": "live-server --open=/src"
```

`srcipts`에 `serve` 명령어 추가

#### 두 명령어 병렬 실행

```git
npm i -D npm-run-all
```

```json
// package.json
{
  "scripts": {
    "start": "run -p watch serve"
  }
}
```

`start`명령어는 `run` 키워드 없이 사용할 수 있다.

```git
npm start
```

## 2. Typography

#### snipept 등록하기

`ctrl + shift + p`로 명령 팔레트를 연다.

snippet을 검색한다.

snippet config 파일을 수정한다.

**스니펫 생성기**  
https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode

#### 유틸리티 클래스 추가

```js
// tailwind.config.js
theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
```

tailwind.config.js의 extends에 추가한다.

#### cdnjs 익스텐션 사용해서 웹 폰트 적용

1. cdnjs 익스텐션 설치

2. `ctrl + shift + p`로 명령 팔레트를 열어 cdn 검색

3. pretendard 검색 후 링크 추가

4. extends에 `fontFamily` 추가

```json
"fontFamily": {
  "pre": ["\"Pretendard Variable\", Pretendard, sans-serif"]
}
```

#### 클래스 유틸리티 찾기

CSS 속성으로 검색할 수 있는 사이트  
https://www.creative-tim.com/twcomponents/cheatsheet
