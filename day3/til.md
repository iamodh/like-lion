# 선택자

## 1. 클래스 선택자

```css
.지훈 {
}
```

`.` 앞에 유니버셜 셀렉터 `*`가 생략되어있다.

모든 `지훈` 클래스를 가진 요소를 선택한다.

```css
이.지훈 {
}
```

`이` 타입이면서 `지훈` 클래스를 가진 요소를 선택한다.

### 안정성

> 타입 셀렉터는 광범위한 요소를 선택하기 떄문에 디자인의 안정성을 위해서 클래스 선택자를 사용하는 것이 좋다. (타입 셀렉터는 Reset에 사용할 수 있다.)

### 클래스 naming

- 알기 쉽게 작성되어야 한다.

- 숫자로 시작하지 못한다.

## 2. combinator

```css
.header h1 {
}
```

`h1` 타입 셀렉터에 **descendent combinator** ` `(space)를 이용해 `.header` 클래스 셀렉터를 결합한다.

## 3. 다중 클래스

```html
<body class="type_orange">
  <div class="wrapper orange">Content</div>
</body>
```

위의 `div`를 선택하기 위해 `다중 클래스 선택자`를 사용할 수 있다.

```css
.wrapper.orange {
}
```

`wrapper` 와 `orange`라는 클래스를 가진 요소를 선택한다.
S

```css
body.type_orange .wrapper {
}
```

또는 descendant combinator ` `를 이용해 선택할 수 있다.

> ul안에서 li를 사용할 때 ul에 클래스 이름을 주고 .list li와 같이 다중 클래스 선택자를 사용해 요소를 선택한다. (단위로 나누기)

# 정렬

## 1. 상하단 여백

전체 레이아웃을 기준으로 잡아 어떤 컨텐츠가 들어와도 외곽 여백이 유지되게 하기 위해서 **외부 컨테이너**에 먼저 `padding`을 준다.

## 2. 배경 이미지와 높이

background 사진이 800x400일 때 `min-height`를 이용해 유연한 페이지 디자인을 선택할 수 있다.

```css
.header {
  /*height의 초기값을 명시적으로 표기함으로써 높이가 컨텐츠 양에 따라 달라질 수 있는 가능성을 표시*/
  height: auto;
  min-height: 400px;

  /* padding을 이용한 상 하 여백을 포함해 높이가 400px */
  padding: 40px;
  box-sizing: border-box;
}
```

컨텐츠의 높이가 400px보다 작을 때 사진의 비율를 유지하면서 컨텐츠의 오버플로우를 막는다.

## 3. 같은 디자인을 가지고 있는 요소 스타일링

```html
<div class="wrapper">
  <div class="section">Section #1</div>
  <div class="section">Section #2</div>
</div>
```

두 요소에 동일한 클래스 이름을 준다.

```css
.section {
  box-shadow: inset 0 0 20px red;
  margin: 20px;
  padding: 20px;
}
```

`box-shadow`를 주어 서로 구분할 수 있다.

# 사용자 에이전트 스타일 시트 리셋

의도하지 않은 스타일이 나타날 때 마다 **사용자 에이전트 스타일 시트**를 의심해본다.

`font-size`와 같이 상속이 필요한 타입의 값은 `inherit`,

`margin`과 같이 초기값이 필요한 값은 `initial`

로 초기화 해준다.

# 상속

## 1. border-color

```css
.header {
  color: white;
}

.header p {
  border-top: 8px solid;
}
```

`p`의 `border-top`에 `color` 옵션의 값을 주지 않아도 `.hedaer`의 `(foreground)color`를 상속받아 하얀색 테두리를 만든다.

# 마진 상쇄

CSS 개발자들이 자연스러운 디자인을 위해 의도적으로 만들었다.

**조건**

인접해 있는 **block level element**의 상하단 마진이 겹친다.

**해결**

두 블록 요소 사이에 공간을 차지하는 요소를 준다. (텍스트나 테두리, 패딩 등)

# 이미지 삽입 방법

- 중요 컨텐츠: 마크업 (img 태그)

- 그 외 컨텐츠: CSS (background 속성)

```css
.section {
  background-image: url(images/icon-information.png);
  background-repeat: no-repeat;
  background-position: right 40px center;
}
```

`.section`의 특징을 나타내는 이미지가 아니기기 때문에 `background-image`를 사용했다.

`background-positoin` 프로퍼티의 값에 `40px`를 사용해 `right`로부터 `40px`만큼 떨어트렸다.

# 강사님 어록

행복합니다.

퇴근입니다~

_안녕.._
