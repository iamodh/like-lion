# 과제 피드백

## 1. 마크업

- 최외곽 레이아웃 `wrapper`아래 `bukcketlist` 컴포넌트를 둔다.

  : `wrapper`는 레이아웃 관련 스타일만 가지고 있어야 한다. (`width`, `margin: 200px auto`)

  : 다른 컴포넌트 교체시 해당 레이아웃을 쉽게 적용할 수 있다.

- 버킷리스트는 순서와 관계있는 리스트이므로 `ol` 태그를 사용한다.

## 2. 클래스 네이밍

- `wrapper`를 `l_wrapper`로 바꾼다.

  : 레이아웃 스타일링을 위한 클래스임을 표시한다.

- `bucketlist` 하위 대분류 요소 앞에 `bucketlist`를 붙인다. (`bucketlist-header`, `bucketlist-contents`)

  : `ol`과 같은 하위요소에는 `lists`도 적당하다.

- 모든 요소에 클래스를 줄 필요는 없다.

  : `ol` 아래의 `li` 요소는 `.lists .li`로 선택할 수 있다.

  : `li`에 클래스를 준다면 `item`이 적당하다.

## 3. CSS

- 적용 범위를 기준으로 카테고리를 구분하여 작성한다.

  ```css
  /* Resets */

  /* Typography */

  /* Layouts */

  /* Design */
  ```

- **픽셀 퍼펙션** - 주어진 디자인 도안과 일치하게 작업하는 것

  : 픽셀 퍼펙션과 더불어 유지보수를 고려한 스타일을 작성해야 한다. (`li`의 내용 길이가 두 줄 이상이 되었을 경우, `wrapper` 너비가 변한 경우 등)

- 가상 클래스 안에 달라지는 부분의 CSS 코드만 넣는것이 좋다.

  ```css
  .item {
    /* ... */
    background-repeat: no-repeat;
    background-position: center right 14px;
    background-size: 20px;
  }

  .item:hover {
    box-shadow: 0 0 0 2px #759cff inset;
    color: #759cff;

    background-image: url("./checked.svg");
  }
  ```

  : 마우스 호버시 `background-image`가 나타나므로 이미지를 불러오는 속성만 `.item:hover` 안에 작성

- `transition`은 가상 클래스 대신 기본 클래스 선택자에 주어야 hover가 해제되었을 때도 애니메이션이 동작한다.

# 셀렉터 특정성

브라우저는 셀렉터 특정성 점수가 높은 셀렉터의 스타일을 먼저 적용시킨다.

```css
.bg .box {
  background-color: red;
}

.box {
  background-color: blue;
}
```

위의 경우 `.box`가 아래 작성되었음에도 `background-color: red`가 적용된다.

### 규칙

- type selector: 동메달

- class selector, (pseudo class): 은메달

- id selector: 금메달

높은 순위의 메달을 많이 가지고 있는 스타일이 우선된다.

### 예시

```css
.box:hover {
  /* 특정성 점수 (0,2,0)*/
}

h1 + p::first-letter {
  /* (0,0,3) */
}

#identifier {
  /* (1,0,0) */
}
```

### Cascade

- 인라인 CSS는 셀럭터보다 우선순위가 높다.

- CSS 값 뒤에 `!important`를 붙이면 우선순위가 가장 높아진다. (important의 남용은 권장되지 않는다.)

- `!important`가 두 개 이상일 때 특정성 점수를 비교한다.

**Cascasde 알고리즘**은 Selector Specifity, `!important` 외에도 다양한 스타일링 규칙을 포함하고 있다.

# 실습

# 1. 텍스트 컨텐츠의 줄 바꿈 표시

```css
.contents p {
  white-space: pre;
}
```

선택된 요소 컨텐츠의 모든 서식(들여쓰기, 공백, 줄바꿈)이 화면에 반영되게 한다.

그러나 예상치 못한 결과가 나올 때가 있어서 `<br>` 사용이 권장된다.
