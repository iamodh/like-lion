# 태그

## 1. 역할

```js
<h1>Orange</h1>
```

content에 의미를 부여한다. (semantic markup)

검색엔진에서 Orange를 `가장 높은 단계의 제목`으로 인식한다.

## 2. 디자인

태그와 디자인은 관련없다.

브라우저의 사용자 에이전트 스타일 시트에서 태그에 맞는 CSS를 제공하는 것 뿐이다.

<a herf="https://chromium.googlesource.com/chromium/src/third_party/+/master/blink/renderer/core/html/resources/html.css">크롬의 에이전트 스타일 시트</a>

# 경로

## 1. Document Root

```js
<img src="/cat.jpeg" />
```

경로를 시작하는 `/`를 말한다.

보통 컴퓨터의 홈 디렉토리를 나타내지만

Live Server 같은 웹호스팅 서비스를 이용해

vscode의 최상위 디렉토리를 document root로 설정할 수 있다.
